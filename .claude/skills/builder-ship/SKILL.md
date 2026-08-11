---
name: builder-ship
description: Mark the current builder's claimed task as shipped. Awards credits, writes a session log entry, frees the claim. Triggers when the user says "/builder-ship", "I'm done", "ship it", "mark this complete". Asks for handoff notes and a public-facing value summary if the user didn't provide them.
---

You are shipping a task on behalf of the current builder. Shipping is the moment that converts in-flight work into permanent project history + credits.

## What this skill does

Runs `bongos ship <task-id> --notes "..." --summary "..."`.

The CLI drives a **three-state lifecycle** with a subagent grader between states (Phase 5, 2026-05-10):

1. **`completed`** — the builder declared the work done. Always reached. Sets the task's `value_summary` (used on `status.example.com`) and the handoff notes.
2. **`confirmed`** — smoke green + the subagent grader passed. **Verified, but not yet paid** — no credits land here ([ADR 0120](../../../docs/adr/<redacted>.md) pays on land, not on confirm). If the grade fails, the task stays at `completed` for human follow-up.
3. **`shipped`** — the branch is merged into `main` + deployed (visible in production). The claim is released and the task is stamped `shipped_at` + `shipped_by`. **Credits land here**, as `credit_log.reason = 'task.shipped'` (a trigger updates `builders.total_credits`). If this step fails (conflicts, smoke red), the task stays at `confirmed` for `/merge-mode` to land later.

   > **What actually pays depends on the instance's reward mode** ([ADR 0146](../../../docs/adr/<redacted><redacted>.md)). The default `cost-plus-and-estimate` books both the per-task estimate and the cost-plus session reward. **Cloud Bongos runs `cost-plus-only`**, so the per-task `credits_reward` estimate is *never* paid here — it is an advertised guide only, and the cost-plus session reward (`round(true_cost_usd × 1.20)`) is the sole equity stream. A `Credits +0` on the ship card is expected on this instance, not a bug.

`/builder-ship` runs steps 1 + 2 inline; on auto-confirm it chains into step 3 (push, merge on main, smoke, deploy).

(Dev-box game changes, `--approved`) Persists the builder's sandbox self-approval to `tasks.sandbox_review` — `{ by, at, stamp, url, method }`, with `by`/`at` stamped server-side ([#1048](https://example.com/builders#/task/1048), ADR 0046).

## How to use

1. **Confirm the task id** the user is shipping (it must match their currently-active claim).

   **On a dev box with game-surface changes, stage first (#927, ADR 0046 + #1048).** If the diff touches the game (`public/`, `src/world/`, `src/rooms/`, `server.js`) and the session is on a dev box, the flow is: stage → the builder reviews the change at `https://sandbox-<login>.example.com` → approve → ship. `ship.js` enforces this before the claim resolves: un-staged game work gets staged to the sandbox and the ship **aborts with a `🔍 REVIEW REQUIRED` block** carrying the URL (claim intact, nothing lost).

   **When you see that block, position the sandbox link prominently for the builder.** `ship.js` also emits the deterministic lifecycle card for the `review` stage (an `[otb-card-html] <path>` marker) — if an in-feed visualization tool is available, render that card (its primary action is **Open in sandbox ↗**, the URL); it's the cleanest way to make the link impossible to miss. Either way, surface the URL as its own standalone, clickable line in chat — a clear callout, NOT buried inside a paragraph of command output — and say in one line what to look at. This is the moment the change is ready to review; the link must be impossible to miss. Let the builder open it, review, and suggest changes; iterate if needed. **Only once the builder explicitly approves, re-run with `bongos ship <id> --approved`** — that records their sign-off as a durable `sandbox_review` fact on the task (who, when, and the content stamp of exactly what was reviewed). Never pass `--approved` yourself without a real human go; the pause + sign-off IS the feature. `--skip-stage` is the escape hatch (use sparingly — the gate exists so unreviewed game changes don't ride straight to prod). Laptop sessions and non-game diffs are unaffected.

2. **Compose the handoff notes (`--notes`)** following the structure in `docs/handoff-template.md`:
   - What shipped (with confidence tags: verified-prod | verified-smoke | implemented-not-verified)
   - What's broken or unverified
   - Manual checks the next session should run first
   - Next obvious work
   - New limitations / risks / blockers introduced
   - Generative ideas captured
   - Decisions made (linked to ADRs)
   If the user is in a hurry, ask them for one bullet per heading and fill gaps from session context.

   **Confirm every new behavior is asserted by a checked-in `tests/*.mjs` case** — the grader treats throwaway verification scripts and Playwright probes as unverified and bounces the ship back to `completed`.

3. **Compose the value summary (`--summary`)** — ONE LINE, written for non-engineers. This is what shows up on `status.example.com` for the team and the public. Examples:
   - "Players can now resume at their last position after a browser refresh."
   - "Cost dashboard backfilled with 377 art-pipeline API calls."
   - "Sessions can claim work atomically; merge conflicts can't happen across worktrees."
   No jargon, no file paths, no commit hashes.

4. **Run**:
   ```bash
   bongos ship <task-id> \
     --notes "$(cat <<'EOF'
   ...handoff markdown...
   EOF
   )" \
     --summary "the one-liner"
   ```

   **Never merge a task branch to main before running `ship.js`.** `ship.js` diffs the claim branch against `main`; an already-merged branch yields an empty diff, and the only exits are `--allow-empty` (dead-ends the task at `completed`, requiring an Archon-only confirm) or reverting the merge. Ship from the branch, then let `ship.js` land it. (This trap was hit on tasks 1002417 and 1002419, producing blockers 1000081/1000082 and an ~8.5-hour stall.)

5. **Render the completion card — it IS the summary; do NOT write a prose recap (task 1270).**
   _As of task 1288 the lifecycle-card `PostToolUse` hook (`.claude/hooks/lifecycle-card.js`) reads this card and injects a one-step render directive right after `ship.js` runs — normally just follow that and render **once**; the detail below is the fallback if no directive appears._
   On every ship, `ship.js` prints ONE deterministic completion card — the same shape every time, only the data changes. It always prints a monospace card to stdout, and for a shipped / confirmed / grade-failed outcome it ALSO writes a branded HTML card to a temp file and prints two marker lines:
   ```
   [otb-card-html] /tmp/otb-ship-card-<id>.html
   [otb-card] builder-ship: render the HTML ... via the visualization tool ...
   ```
   - If the `[otb-card-html] <path>` line is present **and** an in-feed visualization tool is available (e.g. `show_widget`): **Read that file and pass its exact contents** to the tool as `widget_code` (title like `task_<id>_shipped`). The card renders in the chat feed. **Author nothing yourself** — the HTML is generated, so the card is byte-identical every ship; that determinism is the whole point.
   - If instead you see an **`[otb-card] widgets are off …`** line (the builder disabled widgets via Settings → Rendering — task 1279), there is no HTML file by design: **relay the monospace card as plain text and do NOT call show_widget.** Don't try to "restore" the widget — the absence is the saving.
   - If no visualization tool is available at all (headless / cron / a session without it), the **monospace card already printed IS the summary** — stop there.
   - **Either way: do NOT add a free-form recap** of what shipped, credits, files, cost, or next steps. The card already carries all of it, and its built-in action ("Start next task" / "Land it" / "Fix & re-grade") is the next-step prompt — you don't need to restate it. This replaces the old per-ship prose summary the owner asked us to retire.
   - The ONLY thing you may add is a single **required** action the card can't express — e.g. a sandbox `🔍 REVIEW REQUIRED` URL from a review pause (see step 1), or a blocker that needs the owner. One line, then stop.
   - A Hero sound + Discord broadcast may still fire on a milestone (CLAUDE.md §2); that's automatic — no need to narrate it.

## Constraints

- **Never ship a task you don't have an active claim on.** The API will reject it (`NOT_YOUR_CLAIM`); surface clearly and run `/builder-start` to find the right state.
- **Don't fabricate the value summary.** If you can't summarize the value in non-jargon English, the work is probably not actually shippable yet — release instead and surface the gap to the user.
- **Be honest in handoff notes.** Use `[verified-prod]` only when a real human exercised the feature on the live site. Otherwise `[verified-smoke]` or `[implemented-not-verified]`. The whole project relies on this honesty.

## Files this skill touches

- Reads: `~/.config/otb/gds-session.json`
- Calls: `GET /api/gds/me`, `POST /api/gds/claims/:id/resolve`
