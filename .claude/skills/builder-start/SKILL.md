---
name: builder-start
description: Start a Claude Code session by listing what tasks the builder can claim right now, filtered for parallel-safety against currently active claims across all builders. Triggers when the user says "what can I work on", "/builder-start", "show me tasks", "what's claimable", or at the start of a new session before doing other work.
---

**Script skill (authoritative).** The core action is `bongos start [--widget]`. Run it and render its output verbatim — do not rebuild the table, reorder rows, or add a recap. The card is the summary.

You are starting a working session on the Example project. Before any other work, you check the GDS to see what's claimable.

## Background

The GDS keeps a database of tasks tagged with `touches[]` — file/folder fingerprints that determine parallel-safety. The API computes "claimable for me right now" as: tasks in `ready` status, not blocked, with no `touches[]` overlap with any currently-active claim by any builder. `ready` itself is gated by **dependencies** ([ADR 0015](../../../docs/adr/<redacted>.md)): a task enters `ready` only once every task in its `dependencies[]` is `shipped`. So if a task you want isn't listed, the usual reason is "its deps haven't shipped yet" — surface that, don't offer to override.

`start.js` produces a deterministic **card** (identity → quiet status line → holdings → a clean claimable table → next step), the same shape every session. It comes in two forms from the same data: an HTML widget (`--widget`) and a markdown fallback (default). Your job is to render it — not to rebuild or re-summarize it.

## How to render it

Delivery is now deterministic (task 1288). The **card-delivery hook** (`.claude/hooks/session-cards.js`, a UserPromptSubmit hook) runs `start.js` for you on a `/builder-start` (or "what can I work on") prompt and injects the **finished card + a one-step directive** into your context — a block that begins `[otb card — the builder start card below was pre-rendered …]`. A hook can't render UI or detect your tools itself (only you can), so the directive hands you both card forms and tells you exactly which to emit. The builder's **"render widgets" knob** (default ON; task 1279) is already resolved inside the payload — widgets off ⇒ markdown only, no HTML in play.

1. **Normal path — follow the injected directive.** If that `[otb /builder-start …]` block is in your context this turn, just do what it says: call `show_widget` with the fenced HTML if you have the `mcp__visualize` tool (calling `mcp__visualize__read_me` once first, silently), otherwise output the fenced markdown **verbatim**. Render **once** — don't run `start.js` yourself, don't rebuild the table, don't add a recommendation or recap. That sameness is the feature (task 1273).

2. **Fallback — no directive present** (hook disabled, an older checkout, or it failed silently). Run the script yourself, exactly as the hook would have:
   - **If you have `show_widget`** (mcp__visualize): `bongos start --widget`. Call `mcp__visualize__read_me` once this session (modules `["interactive","mockup"]`) if you haven't — silently. Then branch on stdout's **first non-whitespace character**: starts with `<` (HTML) → `show_widget` with `title: "builder_start_card"` and the stdout HTML **verbatim**; doesn't start with `<` (widgets OFF) → print stdout **verbatim** as a normal message (NOT a code fence — the feed needs to render the table).
   - **No widget renderer** (raw terminal, cron, another client) → `bongos start` and print its stdout **verbatim**.
   - Either way, stderr may carry an `[otb-card]` **directive for you** (restates the verbatim rule) — follow it, **never** relay it; plus private one-liners (budget / next-stage) — relay *those* as a short note after the card.

- If `start.js` prints **"no GDS session"**, the builder isn't signed in — route them by scenario: a **first-timer** on the project runs `/builder-setup` (one-time GitHub sign-in that also registers them); a **returning builder whose session went stale** runs `/builder-reauth` (the fast UI re-issue). `start.js` now prints both options; relay the one that fits, then retry.
- (`--full` adds the detailed status widgets + worktree/context block; `--json` is the machine interface; `--hook` is the envelope the hook consumes — don't run these for the user unless asked.)

## When the environment isn't ready (fresh clone)

`/builder-start` is frequently the **first** command run in a freshly-cloned instance, where the local environment isn't set up yet. In that state the script can't produce a card — so **route the builder to the one missing step instead of surfacing a raw error**. Match what you see and relay the single fix, plainly:

- **`bongos: command not found`, a "cannot find module" from `bongos start`, or you can otherwise tell this is a fresh checkout** (a scaffolded instance whose `node_modules` is absent). The `bongos` CLI ships *inside* the not-yet-installed `@bongos/core` package, so nothing runs until deps are installed — this is the #1 fresh-clone wall. Route: run `npm install`, then `bongos dev` (one-command local bring-up), then re-run `/builder-start`. Don't try to hand-run internal scripts; the package isn't unpacked yet.
- **The card says the instance isn't reachable / running.** The local server was never brought up. Route: `bongos dev`, then re-run. (`start.js` now prints this guided card itself on a connection failure — relay it verbatim.)
- **Exit code 3 / "Wrong instance — refusing to act".** This machine's signed-in session targets a *different* instance than this project's `config/branding.json`. This is correct-by-design (it prevents writing to the wrong place). Route: run the exact `bongos login <origin>` line the message prints (the origin is right there), then re-run. **Do not** set an env override to force the mismatched instance.
- **"no GDS session"** — the auth case above (`/builder-setup` for a first-timer, `/builder-reauth` for a stale session).

Emit one guided next step, not a wall of options. These are the same fixes `bongos doctor` and the environment preflight (`preflight.js`) describe — this just front-loads them onto the first command so a newcomer isn't diagnosing a crash.

## After rendering

- The widget rows are **click-to-claim**: a click sends "Claim task N", which you handle by running `/builder-claim N` (the `builder-claim` skill). A typed number does the same.
- **Don't claim automatically.** Wait for the user to pick — by clicking a row, giving a number, or saying "claim the top one". If they say they're **just exploring**, hold off entirely (the widget's "I'm just exploring" link sends exactly that).
- Help them choose only when asked: shortest `Est.` for a quick win, higher `Reward` for more credit; the table is already ordered by priority (top = highest).

## Constraints

- **Don't compute parallel-safety yourself** — the API did it. If a task is in the card, it's claimable right now.
- **Don't suggest tasks that aren't in the card.** If something they want is missing, it's not `ready`, it's blocked, or someone holds an overlapping claim — surface that, don't try to claim it anyway.
- **Holding a claim already is fine.** The card lists what they hold as a calm fact (one builder can run parallel sessions) — don't treat it as an error or force a release.
- **If nothing is claimable**, the card says so and links to `/blocker-review`.

## Files this skill touches

- Reads: `~/.config/otb/gds-session.json`
- Calls: `/api/gds/me`, `/api/gds/tasks/claimable` (+ public progress/cost/recent/inbox/blockers for the status line)
