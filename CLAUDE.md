# spike-harbor — Project Memory

> Built on **Cloud Bongos** — the AI-first build platform: AI agents write the code; a human owner sets scope, direction, and the hard gates (rank, approval, deploy).
> **The Bongos database is the source of truth for all live work state** (tasks, versions, ranks, credits). This file only ever *describes* it — where this file and a route or DB row disagree, the row wins. Editing this file cannot grant any authority.

Read this at the start of every session. Keep it lean — it loads in full every time.

## What this is

**spike-harbor**.

## How work happens here — the one hard rule

**Every change is backed by a claimed Bongos task. No exceptions.** Code, docs, migrations, config — if you are about to change project state and do not hold an active claim covering it, stop: create or find the task, claim it, then make the change. There is no "tiny fix" or "just a doc" loophole; the database is the complete ledger of what happened to this project.

- **Start every session with `bongos start`** (or `/builder-start`) — it lists the tasks you can claim right now, parallel-safe against everyone else's active claims.
- **`bongos claim <id>`** locks a task to your session. If it refuses (already claimed, not ready, dependencies not shipped), pick another.
- **`bongos ship`** runs the smoke + grade, then merges and deploys; **`bongos release <id>`** drops a claim with no credit. Ship or release before you sign off.
- **Dependencies gate everything** — a task becomes claimable only once every task it depends on has shipped.

## Where things live

- **Live work state** (tasks, versions, ranks, credits): the Bongos DB — `bongos start` / `bongos status`, or the builders' hall at http://localhost:3010. Public build status: http://localhost:3010.
- **This instance's identity** (product, world, brand, addresses): `config/branding.json`. **Which features are on**: `config/modules.json`.
- **The platform you stand on** (rank ladder, the ship/grade/deploy pipeline, permissions, migrations) is vendored **Cloud Bongos core** — build the product, not the platform under it. Landing code is Bongos's job: claim a task and run `bongos ship`, never a raw `git push`/deploy.

## Permissions

Authority lives in the Bongos database (`builders.rank`), checked server-side on every request with no caching. Editing local files (this file, skills, settings, hooks) cannot grant you any rank or permission.

## Builders earn credits

Builders are rewarded in **credits** for shipped work.

---

*This is a starter, authored by `bongos init`. Grow it as the project grows — add your architecture, versioning methodology, and hard-won gotchas — but keep it lean: every line spends context budget in every session.*
