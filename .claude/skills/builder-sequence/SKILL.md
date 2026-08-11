---
name: builder-sequence
description: Walk a whole dependency chain from one kickoff — claim, build, ship, then pick up whatever that unblocked, and repeat until the chain is done or something needs a human. Triggers when the user says "/builder-sequence N", "work the chain from task N", "do these tasks in order", "run goal N end to end", "keep going until the chain is done", or "work through the rest of this chain". One task is claimed at a time; a task is always fully shipped before the next is claimed.
---

You are running a **chain**: several dependency-linked tasks, one after another, from a single kickoff. Two-thirds of the open backlog sits behind a predecessor, and shipping a task auto-promotes its dependents `backlog`→`ready` — but nothing picks the newly-unblocked task up. That gap is what this skill closes.

This skill owns the **loop and the halt discipline**. It does not re-derive how to claim, build, or ship — `/builder-claim`, `/dev`, and `/builder-ship` own those, and you defer to them each pass.

## The one rule

**One task at a time, fully shipped before the next is claimed.** The server enforces this anyway (one active claim per working tree, `shouldRefuseSessionClaim`), and it is what makes the chain safe: each task lands on a clean tree, and each ship is what unblocks the next task. Never batch-claim a chain — successors fail `DEPS_NOT_SHIPPED` by construction, because their predecessor has not shipped yet.

## The loop

1. **Plan the chain, and show it before starting.**

   ```bash
   bongos exec scripts/gds/sequence.js --from <task-id>
   ```

   Or `--goal <goal-id>` to scope to a goal's open tasks. This prints the chain in dependency order with total credits and total estimated time. Relay it, and confirm the scope looks right before doing any work — a 24-task chain is not a single sitting, and the user should see the size before you start.

2. **Ask for the next task.**

   ```bash
   bongos exec scripts/gds/sequence.js --from <head-id> --next
   ```

   Exit 0 with a task means go. **Exit 1 means halt** — see below. Re-run this each pass rather than working from the step-1 plan: the plan is a snapshot, and shipping changes what is claimable.

3. **Claim it** — `/builder-claim <id>`, or `bongos claim <id>`.

4. **Build it** — follow `/dev`. Stay strictly inside the task's `touches[]`. Everything the normal task loop requires still applies: read the acceptance criteria, work test-first, commit before shipping.

5. **Ship it** — `/builder-ship`. The task must reach `shipped`, not stall at `completed` or `confirmed`. A ship that does not land has not unblocked anything, so the chain cannot advance; treat it as a halt (see `ship_failed` below).

6. **Go back to step 2.** The ship you just landed is what promotes the next task to `ready`.

Between passes, report progress in one line — which task landed, what is next, how much of the chain remains. The user is following a long run; they should never have to ask where it is.

## Halting — the contract

**The runner stops and reports. It never ships a half-finished task, and it never skips ahead to work around a blocked one.** A skipped predecessor strands everything behind it, so skipping is not the safer option it looks like.

`sequence.js --next` exits 1 and names the reason when the next task:

| Reason | Means |
|---|---|
| `needs_migration` | wants a schema change — needs a reserved migration number and human eyes |
| `security_sensitive` | flagged security-sensitive |
| `protected_path` | `touches[]` hits the permission/deploy core |
| `rank_floor` | requires a rank above the running builder's |
| `thin_spec` | no description, or too thin to verify "done" against |
| `judgement_kind` | a `decision` or `spike` — the output is a recommendation or an ADR, not mechanical work |
| `not_claimable` | `ready`, but the server will not hand it over (open blocker, or `touches[]` collide with a live claim) |
| `deps_unmet` | still waiting on a predecessor |
| `in_flight` | already mid-ship |
| `cycle` | sits in a dependency cycle and cannot be ordered |

Two more halts are yours to detect, not the script's:

- **`ship_failed`** — the ship bounced, the grade failed, or the task did not reach `shipped`.
- **`scope_surprise`** — the task turns out to need work outside its `touches[]`, or its premise is wrong (the thing it describes is already done, or no longer true). Do not quietly widen the scope; that is a new task.

**On any halt:** leave the current task claimed, stop, and report — what you hit, which task, and what it needs from a human. Then say plainly what already landed. Everything shipped stays shipped; a halt costs the rest of the run, not the work done.

To inspect one task without running anything:

```bash
bongos exec scripts/gds/sequence.js --check <task-id>
```

## What NOT to do

- **Do not skip a halted task and continue down the chain.** The owner chose stop-and-report precisely so a blocked predecessor does not silently strand its dependents.
- **Do not batch-claim.** See "The one rule".
- **Do not widen a task's `touches[]`** to make the chain flow. File a new task instead (`bongos exec scripts/gds/capture.js`).
- **Do not keep going past the user's stated scope.** `--from` and `--goal` bound the run; when the chain is exhausted, stop and report rather than reaching into the wider backlog.
- **Do not treat a long chain as a mandate to run unattended forever.** If the remaining estimate is large, say so and let the user decide whether to continue.

## Flags

| Flag | Effect |
|---|---|
| `--from <id>` | scope to a task and everything transitively behind it |
| `--goal <id>` | scope to a goal's open tasks |
| `--next` | emit only the next claimable task, or exit 1 with a halt reason |
| `--check <id>` | evaluate the halt matrix for one task; exit 1 if anything fires |
| `--limit N` | cap the planned chain (default 50) |
| `--json` | machine-readable output for all of the above |

## Files this skill touches

- Runs: `scripts/gds/sequence.js` (planning + next + check), then `scripts/gds/claim.js` and `scripts/gds/ship.js` per pass.
- Reads: `GET /api/gds/tasks/:id` (for `dependencies[]`/`dependents[]`), `GET /api/gds/tasks/claimable`, `GET /api/gds/me`.
- Writes nothing itself — every state change goes through the claim and ship paths that already own it.
