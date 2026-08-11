---
name: builder-sync
description: "Sync now — re-fetch the dev box's source immediately so a freshly-claimed task's code materializes within seconds, instead of waiting for the ~10-min cron. Triggers on '/builder-sync', 'sync my box', 're-scope my box', 'pull my task's code now', or right after '/builder-claim N' when the builder wants the code on the box now. Runs ON the box."
---

**Script skill (authoritative).** The core action is `bongos exec scripts/gds/box-sync.js`. Run it and relay its output verbatim.

You are re-running the dev box's source-fetch **on demand** (BV1.R96, goal 1000051 — task-scoped dev box). The box normally re-fetches on a ~10-min cron; this makes it instant.

## Why this exists

A builder's box holds only the code for their **active claim** (ADR 0148 task-scoping): `GET /box/source-access` returns the sparse-checkout set for the modules the claimed task's goal scopes. The box applies that via `infra/box-source-fetch.sh`, on a cron every ~10 min. So right after `/builder-claim N`, the *new* task's code isn't on the box yet — until the next cron tick.

`box-sync.js` re-runs that fetch **now**. Because the fetch re-reads `/box/source-access`, it **re-scopes the box in place** to whatever the builder currently holds a claim on — seconds after claiming, not ~10 minutes later. The cron stays the backstop.

## How to use

1. **Run it** (on the box):
   ```
   bongos exec scripts/gds/box-sync.js
   ```
   Add `--dry-run` to print what it would run without fetching.

2. **Relay the output.** On success it prints `sync: done — your box now holds the code for your active claim.` The sparse-checkout is now scoped to the active claim's modules (plus the base instance).

3. **Typical flow:** `/builder-claim N` → `/builder-sync` → the box now has task N's module code; open the working folder and start.

## Failure modes

- **`no infra/box-source-fetch.sh found`** — you are **not on a dev box** (off a box your source *is* your local checkout, so there's nothing to sync). This is expected on a laptop; the skill exits non-zero and says so.
- **The fetch itself errors** — the underlying `box-source-fetch.sh` output is passed through verbatim (e.g. a credential/rank issue surfaces there); relay it and, if it's a rank/claim problem, check the active claim with `/builder-start`.

## Constraints

- **Runs on the box only.** It re-runs the box-side fetch; it does not push, claim, or change scope by itself — scope follows the builder's active claim (change scope by claiming a different task, then sync).
- **Idempotent + safe.** Re-running is harmless; the cron does the same thing on its own schedule.

## Files this skill touches

- Runs: `scripts/gds/box-sync.js` → `infra/box-source-fetch.sh` (on the box)
- Reads (indirectly, via the fetch): `GET /box/source-access`
