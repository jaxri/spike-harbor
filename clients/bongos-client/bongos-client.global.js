// @bongos/client (browser-global build) — GENERATED from index.mjs by
// scripts/gds/gen-api-client.js. DO NOT EDIT BY HAND. Exposes window.BongosClient
// for classic <script> pages. Same behavior as the ESM build.
(function (global) {
'use strict';
// @bongos/client — GENERATED from the OpenAPI spec by
// scripts/gds/gen-api-client.js (task 1995 / ADR 0118). DO NOT EDIT BY HAND —
// regenerate on spec change. Zero deps; uses the platform fetch.

const API_VERSION = "v1";
const DEFAULT_BASE_URL = "/api/bongos/v1";

// The one error shape (ADR 0116). A non-2xx response rejects with this.
class ApiError extends Error {
  constructor(status, body) {
    const env = body && body.error;
    super((env && (env.message || env.code)) || ('HTTP ' + status));
    this.name = 'ApiError';
    this.status = status;
    this.code = env && env.code;
    this.details = env && env.details;
  }
}

function buildPath(template, args) {
  return template.replace(/\{(\w+)\}/g, (_, k) => {
    if (args[k] == null) throw new Error('missing path param: ' + k);
    return encodeURIComponent(args[k]);
  });
}

function qs(query) {
  if (!query) return '';
  const parts = [];
  for (const [k, v] of Object.entries(query)) {
    if (v == null) continue;
    parts.push(encodeURIComponent(k) + '=' + encodeURIComponent(v));
  }
  return parts.length ? '?' + parts.join('&') : '';
}

// createClient({ baseUrl, token, fetch, throwOnError }) — baseUrl defaults to the
// versioned same-origin base (/api/bongos/v1). Pass an absolute baseUrl for an
// external caller. token → Authorization: Bearer. fetch defaults to the platform
// fetch. throwOnError (default true): a non-2xx rejects with ApiError and a 2xx
// resolves to the parsed body. Set throwOnError:false for the internal-CLI
// contract — every call resolves to { status, ok, data } and never throws on HTTP
// status (network errors still reject), so status-inspecting callers port 1:1.
// credentials: forwarded to fetch as `credentials` (e.g. 'same-origin' / 'include')
// so a same-origin BROWSER page can authenticate by session COOKIE instead of a
// Bearer token — the hall/status web pages use this (task 1996 / R09).
function createClient(opts = {}) {
  // An explicit baseUrl:'' means "paths are already absolute" — honored (not
  // treated as unset), so a caller that passes full same-origin paths (e.g. the
  // hall's fetch wrappers, task 1996) routes them through unchanged.
  const baseUrl = (opts.baseUrl != null ? opts.baseUrl : DEFAULT_BASE_URL).replace(/\/$/, '');
  const token = opts.token || null;
  const credentials = opts.credentials || null;
  const cache = opts.cache || null; // forwarded to fetch (e.g. 'no-store' for the public status page)
  const doFetch = opts.fetch || (typeof fetch !== 'undefined' ? fetch : null);
  const throwOnError = opts.throwOnError !== false;
  if (!doFetch) throw new Error('no fetch available — pass opts.fetch');
  async function request(method, template, spec, args) {
    args = args || {};
    const url = baseUrl + buildPath(template, args) + qs(args.query);
    const headers = Object.assign({}, args.headers);
    if (token) headers['Authorization'] = 'Bearer ' + token;
    const init = { method, headers };
    if (credentials) init.credentials = credentials;
    if (args.cache || cache) init.cache = args.cache || cache;
    if (spec.hasBody && args.body !== undefined) {
      headers['Content-Type'] = 'application/json';
      init.body = JSON.stringify(args.body);
    }
    const res = await doFetch(url, init);
    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = null; }
    if (!res.ok && throwOnError) throw new ApiError(res.status, data);
    return throwOnError ? data : { status: res.status, ok: res.ok, data };
  }
  return {
    // Generic escape hatch for a path with no generated method (an undocumented
    // route or a non-API URL). request(method, path, { query, body, headers }).
    // Honors the same throwOnError mode. `path` is relative to baseUrl.
    request: (method, path, o) => { o = o || {}; return request(method, path, { hasBody: o.hasBody != null ? o.hasBody : o.body !== undefined }, o); },
    "accessRequests": {
      // GET /access-requests — rank: archon — GET /access-requests
      getAccessRequests: (args) => request("GET", "/access-requests", { hasBody: false }, args),
      // POST /access-requests — rank: public — POST /access-requests
      postAccessRequests: (args) => request("POST", "/access-requests", { hasBody: true }, args),
      // PATCH /access-requests/{id} — rank: archon — PATCH /access-requests/:id
      patchAccessRequestsId: (args) => request("PATCH", "/access-requests/{id}", { hasBody: true }, args),
      // GET /access-requests/status — rank: public — GET /access-requests/status
      getAccessRequestsStatus: (args) => request("GET", "/access-requests/status", { hasBody: false }, args),
    },
    "achievements": {
      // GET /achievements — rank: any-builder — GET /achievements
      getAchievements: (args) => request("GET", "/achievements", { hasBody: false }, args),
    },
    "analytics": {
      // GET /analytics/builder/{id} — rank: any-builder — GET /analytics/builder/:id
      getAnalyticsBuilderId: (args) => request("GET", "/analytics/builder/{id}", { hasBody: false }, args),
    },
    "auditLog": {
      // GET /audit-log — rank: metic+archon — GET /audit-log
      getAuditLog: (args) => request("GET", "/audit-log", { hasBody: false }, args),
    },
    "auth": {
      // POST /auth/app-pair/approve — rank: any-builder — POST /auth/app-pair/approve
      postAuthAppPairApprove: (args) => request("POST", "/auth/app-pair/approve", { hasBody: true }, args),
      // GET /auth/app-pair/info — rank: any-builder — GET /auth/app-pair/info
      getAuthAppPairInfo: (args) => request("GET", "/auth/app-pair/info", { hasBody: false }, args),
      // POST /auth/app-pair/poll — rank: public — POST /auth/app-pair/poll
      postAuthAppPairPoll: (args) => request("POST", "/auth/app-pair/poll", { hasBody: true }, args),
      // POST /auth/app-pair/start — rank: public — POST /auth/app-pair/start
      postAuthAppPairStart: (args) => request("POST", "/auth/app-pair/start", { hasBody: true }, args),
      // POST /auth/backchannel-logout — rank: public — POST /auth/backchannel-logout
      postAuthBackchannelLogout: (args) => request("POST", "/auth/backchannel-logout", { hasBody: true }, args),
      // POST /auth/cli-token/issue — rank: any-builder — POST /auth/cli-token/issue
      postAuthCliTokenIssue: (args) => request("POST", "/auth/cli-token/issue", { hasBody: true }, args),
      // POST /auth/device/exchange — rank: public — POST /auth/device/exchange
      postAuthDeviceExchange: (args) => request("POST", "/auth/device/exchange", { hasBody: true }, args),
      // POST /auth/device/poll — rank: public — POST /auth/device/poll
      postAuthDevicePoll: (args) => request("POST", "/auth/device/poll", { hasBody: true }, args),
      // POST /auth/device/start — rank: public — POST /auth/device/start
      postAuthDeviceStart: (args) => request("POST", "/auth/device/start", { hasBody: true }, args),
      // GET /auth/discord/callback — rank: any-builder — GET /auth/discord/callback
      getAuthDiscordCallback: (args) => request("GET", "/auth/discord/callback", { hasBody: false }, args),
      // GET /auth/discord/start — rank: any-builder — GET /auth/discord/start
      getAuthDiscordStart: (args) => request("GET", "/auth/discord/start", { hasBody: false }, args),
      // POST /auth/discord/unlink — rank: any-builder — POST /auth/discord/unlink
      postAuthDiscordUnlink: (args) => request("POST", "/auth/discord/unlink", { hasBody: true }, args),
      // POST /auth/logout — rank: any-builder — POST /auth/logout
      postAuthLogout: (args) => request("POST", "/auth/logout", { hasBody: true }, args),
      // POST /auth/revoke — rank: archon — POST /auth/revoke
      postAuthRevoke: (args) => request("POST", "/auth/revoke", { hasBody: true }, args),
      // POST /auth/revoke-all — rank: archon — POST /auth/revoke-all
      postAuthRevokeAll: (args) => request("POST", "/auth/revoke-all", { hasBody: true }, args),
      // GET /auth/web/admission-status — rank: public — GET /auth/web/admission-status
      getAuthWebAdmissionStatus: (args) => request("GET", "/auth/web/admission-status", { hasBody: false }, args),
      // GET /auth/web/callback — rank: public — GET /auth/web/callback
      getAuthWebCallback: (args) => request("GET", "/auth/web/callback", { hasBody: false }, args),
      // GET /auth/web/start — rank: public — GET /auth/web/start
      getAuthWebStart: (args) => request("GET", "/auth/web/start", { hasBody: false }, args),
    },
    "autonomy": {
      // GET /autonomy/precheck — rank: metic+archon — GET /autonomy/precheck
      getAutonomyPrecheck: (args) => request("GET", "/autonomy/precheck", { hasBody: false }, args),
    },
    "backup": {
      // GET /backup/status — rank: metic+archon — GET /backup/status
      getBackupStatus: (args) => request("GET", "/backup/status", { hasBody: false }, args),
      // POST /backup/trigger — rank: metic+archon — POST /backup/trigger
      postBackupTrigger: (args) => request("POST", "/backup/trigger", { hasBody: true }, args),
    },
    "blockers": {
      // GET /blockers — rank: public — GET /blockers
      getBlockers: (args) => request("GET", "/blockers", { hasBody: false }, args),
      // POST /blockers — rank: any-builder — POST /blockers
      postBlockers: (args) => request("POST", "/blockers", { hasBody: true }, args),
      // GET /blockers/{id} — rank: any-builder — GET /blockers/:id
      getBlockersId: (args) => request("GET", "/blockers/{id}", { hasBody: false }, args),
      // POST /blockers/{id}/link — rank: metic+archon — POST /blockers/:id/link
      postBlockersIdLink: (args) => request("POST", "/blockers/{id}/link", { hasBody: true }, args),
      // POST /blockers/{id}/resolve — rank: metic+archon — POST /blockers/:id/resolve
      postBlockersIdResolve: (args) => request("POST", "/blockers/{id}/resolve", { hasBody: true }, args),
    },
    "box": {
      // GET /box/authorized-keys — rank: any-builder — GET /box/authorized-keys
      getBoxAuthorizedKeys: (args) => request("GET", "/box/authorized-keys", { hasBody: false }, args),
      // POST /box/close — rank: any-builder — POST /box/close
      postBoxClose: (args) => request("POST", "/box/close", { hasBody: true }, args),
      // GET /box/connect — rank: public — GET /box/connect
      getBoxConnect: (args) => request("GET", "/box/connect", { hasBody: false }, args),
      // GET /box/connect.ps1 — rank: public — GET /box/connect.ps1
      getBoxConnectPs1: (args) => request("GET", "/box/connect.ps1", { hasBody: false }, args),
      // GET /box/connect.sh — rank: public — GET /box/connect.sh
      getBoxConnectSh: (args) => request("GET", "/box/connect.sh", { hasBody: false }, args),
      // POST /box/ensure — rank: any-builder — POST /box/ensure
      postBoxEnsure: (args) => request("POST", "/box/ensure", { hasBody: true }, args),
      // POST /box/heartbeat — rank: any-builder — POST /box/heartbeat
      postBoxHeartbeat: (args) => request("POST", "/box/heartbeat", { hasBody: true }, args),
      // POST /box/host-keys — rank: any-builder — POST /box/host-keys
      postBoxHostKeys: (args) => request("POST", "/box/host-keys", { hasBody: true }, args),
      // GET /box/managed-settings — rank: any-builder — GET /box/managed-settings
      getBoxManagedSettings: (args) => request("GET", "/box/managed-settings", { hasBody: false }, args),
      // GET /box/me — rank: any-builder — GET /box/me
      getBoxMe: (args) => request("GET", "/box/me", { hasBody: false }, args),
      // GET /box/scope — rank: any-builder — GET /box/scope
      getBoxScope: (args) => request("GET", "/box/scope", { hasBody: false }, args),
      // GET /box/source-access — rank: any-builder — GET /box/source-access
      getBoxSourceAccess: (args) => request("GET", "/box/source-access", { hasBody: false }, args),
      // GET /box/ssh-key — rank: any-builder — GET /box/ssh-key
      getBoxSshKey: (args) => request("GET", "/box/ssh-key", { hasBody: false }, args),
      // POST /box/ssh-key — rank: any-builder — POST /box/ssh-key
      postBoxSshKey: (args) => request("POST", "/box/ssh-key", { hasBody: true }, args),
      // DELETE /box/ssh-key/{id} — rank: any-builder — DELETE /box/ssh-key/:id
      deleteBoxSshKeyId: (args) => request("DELETE", "/box/ssh-key/{id}", { hasBody: false }, args),
      // GET /box/terminal — rank: any-builder — GET /box/terminal
      getBoxTerminal: (args) => request("GET", "/box/terminal", { hasBody: false }, args),
      // POST /box/terminal — rank: any-builder — POST /box/terminal
      postBoxTerminal: (args) => request("POST", "/box/terminal", { hasBody: true }, args),
      // POST /box/version — rank: any-builder — POST /box/version
      postBoxVersion: (args) => request("POST", "/box/version", { hasBody: true }, args),
    },
    "boxes": {
      // GET /boxes — rank: metic+archon — GET /boxes
      getBoxes: (args) => request("GET", "/boxes", { hasBody: false }, args),
      // PATCH /boxes/{builderId}/block — rank: metic+archon — PATCH /boxes/:builderId/block
      patchBoxesBuilderIdBlock: (args) => request("PATCH", "/boxes/{builderId}/block", { hasBody: true }, args),
      // POST /boxes/{builderId}/close — rank: metic+archon — POST /boxes/:builderId/close
      postBoxesBuilderIdClose: (args) => request("POST", "/boxes/{builderId}/close", { hasBody: true }, args),
      // GET /boxes/cost-ledger — rank: metic+archon — GET /boxes/cost-ledger
      getBoxesCostLedger: (args) => request("GET", "/boxes/cost-ledger", { hasBody: false }, args),
    },
    "bugAttachments": {
      // GET /bug-attachments/{name} — rank: any-builder — GET /bug-attachments/:name
      getBugAttachmentsName: (args) => request("GET", "/bug-attachments/{name}", { hasBody: false }, args),
    },
    "builders": {
      // GET /builders/{id}/active-claims — rank: metic+archon — GET /builders/:id/active-claims
      getBuildersIdActiveClaims: (args) => request("GET", "/builders/{id}/active-claims", { hasBody: false }, args),
      // PATCH /builders/{id}/budget — rank: metic+archon — PATCH /builders/:id/budget
      patchBuildersIdBudget: (args) => request("PATCH", "/builders/{id}/budget", { hasBody: true }, args),
      // GET /builders/{id}/onboarding — rank: public — GET /builders/:id/onboarding
      getBuildersIdOnboarding: (args) => request("GET", "/builders/{id}/onboarding", { hasBody: false }, args),
      // GET /builders/{id}/profile — rank: public — GET /builders/:id/profile
      getBuildersIdProfile: (args) => request("GET", "/builders/{id}/profile", { hasBody: false }, args),
      // PATCH /builders/{id}/rank — rank: archon — PATCH /builders/:id/rank
      patchBuildersIdRank: (args) => request("PATCH", "/builders/{id}/rank", { hasBody: true }, args),
      // PATCH /builders/{id}/status — rank: archon — PATCH /builders/:id/status
      patchBuildersIdStatus: (args) => request("PATCH", "/builders/{id}/status", { hasBody: true }, args),
      // GET /builders/directory — rank: any-builder — GET /builders/directory
      getBuildersDirectory: (args) => request("GET", "/builders/directory", { hasBody: false }, args),
      // GET /builders/me/pending-rank-change — rank: any-builder — GET /builders/me/pending-rank-change
      getBuildersMePendingRankChange: (args) => request("GET", "/builders/me/pending-rank-change", { hasBody: false }, args),
      // GET /builders/roster — rank: metic+archon — GET /builders/roster
      getBuildersRoster: (args) => request("GET", "/builders/roster", { hasBody: false }, args),
    },
    "claims": {
      // POST /claims — rank: any-builder — POST /claims
      postClaims: (args) => request("POST", "/claims", { hasBody: true }, args),
      // POST /claims/{id}/release-on-behalf — rank: metic+archon — POST /claims/:id/release-on-behalf
      postClaimsIdReleaseOnBehalf: (args) => request("POST", "/claims/{id}/release-on-behalf", { hasBody: true }, args),
      // POST /claims/{id}/resolve — rank: any-builder — POST /claims/:id/resolve
      postClaimsIdResolve: (args) => request("POST", "/claims/{id}/resolve", { hasBody: true }, args),
      // POST /claims/batch — rank: any-builder — POST /claims/batch
      postClaimsBatch: (args) => request("POST", "/claims/batch", { hasBody: true }, args),
      // POST /claims/batch/release — rank: any-builder — POST /claims/batch/release
      postClaimsBatchRelease: (args) => request("POST", "/claims/batch/release", { hasBody: true }, args),
      // POST /claims/batch/validate — rank: any-builder — POST /claims/batch/validate
      postClaimsBatchValidate: (args) => request("POST", "/claims/batch/validate", { hasBody: true }, args),
    },
    "cost": {
      // POST /cost — rank: any-builder — POST /cost
      postCost: (args) => request("POST", "/cost", { hasBody: true }, args),
    },
    "dependencies": {
      // DELETE /dependencies — rank: archon — DELETE /dependencies
      deleteDependencies: (args) => request("DELETE", "/dependencies", { hasBody: false }, args),
      // POST /dependencies — rank: archon — POST /dependencies
      postDependencies: (args) => request("POST", "/dependencies", { hasBody: true }, args),
    },
    "discord": {
      // GET /discord/channels/plan — rank: metic+archon — GET /discord/channels/plan
      getDiscordChannelsPlan: (args) => request("GET", "/discord/channels/plan", { hasBody: false }, args),
      // POST /discord/channels/reconcile — rank: metic+archon — POST /discord/channels/reconcile
      postDiscordChannelsReconcile: (args) => request("POST", "/discord/channels/reconcile", { hasBody: true }, args),
    },
    "doneWhen": {
      // POST /done-when/{criterionId}/satisfy — rank: metic+archon — POST /done-when/:criterionId/satisfy
      postDoneWhenCriterionIdSatisfy: (args) => request("POST", "/done-when/{criterionId}/satisfy", { hasBody: true }, args),
      // POST /done-when/{criterionId}/unsatisfy — rank: metic+archon — POST /done-when/:criterionId/unsatisfy
      postDoneWhenCriterionIdUnsatisfy: (args) => request("POST", "/done-when/{criterionId}/unsatisfy", { hasBody: true }, args),
      // GET /done-when/pending-review — rank: metic+archon — GET /done-when/pending-review
      getDoneWhenPendingReview: (args) => request("GET", "/done-when/pending-review", { hasBody: false }, args),
    },
    "gateApprovals": {
      // GET /gate-approvals — rank: metic+archon — GET /gate-approvals
      getGateApprovals: (args) => request("GET", "/gate-approvals", { hasBody: false }, args),
      // POST /gate-approvals/{pr}/approve — rank: archon — POST /gate-approvals/:pr/approve
      postGateApprovalsPrApprove: (args) => request("POST", "/gate-approvals/{pr}/approve", { hasBody: true }, args),
    },
    "github": {
      // GET /github/repos — rank: any-builder — GET /github/repos
      getGithubRepos: (args) => request("GET", "/github/repos", { hasBody: false }, args),
      // POST /github/repos — rank: any-builder — POST /github/repos
      postGithubRepos: (args) => request("POST", "/github/repos", { hasBody: true }, args),
    },
    "goals": {
      // GET /goals — rank: any-builder — GET /goals
      getGoals: (args) => request("GET", "/goals", { hasBody: false }, args),
      // POST /goals — rank: metic+archon — POST /goals
      postGoals: (args) => request("POST", "/goals", { hasBody: true }, args),
      // GET /goals/{id} — rank: any-builder — GET /goals/:id
      getGoalsId: (args) => request("GET", "/goals/{id}", { hasBody: false }, args),
      // POST /goals/{id}/archive — rank: metic+archon — POST /goals/:id/archive
      postGoalsIdArchive: (args) => request("POST", "/goals/{id}/archive", { hasBody: true }, args),
      // GET /goals/{id}/conflicts — rank: any-builder — GET /goals/:id/conflicts
      getGoalsIdConflicts: (args) => request("GET", "/goals/{id}/conflicts", { hasBody: false }, args),
      // POST /goals/{id}/conflicts/resolve — rank: any-builder — POST /goals/:id/conflicts/resolve
      postGoalsIdConflictsResolve: (args) => request("POST", "/goals/{id}/conflicts/resolve", { hasBody: true }, args),
      // POST /goals/{id}/invitations — rank: any-builder — POST /goals/:id/invitations
      postGoalsIdInvitations: (args) => request("POST", "/goals/{id}/invitations", { hasBody: true }, args),
      // POST /goals/{id}/invitations/{reqId}/respond — rank: any-builder — POST /goals/:id/invitations/:reqId/respond
      postGoalsIdInvitationsReqIdRespond: (args) => request("POST", "/goals/{id}/invitations/{reqId}/respond", { hasBody: true }, args),
      // POST /goals/{id}/join — rank: any-builder — POST /goals/:id/join
      postGoalsIdJoin: (args) => request("POST", "/goals/{id}/join", { hasBody: true }, args),
      // POST /goals/{id}/leave — rank: any-builder — POST /goals/:id/leave
      postGoalsIdLeave: (args) => request("POST", "/goals/{id}/leave", { hasBody: true }, args),
      // POST /goals/{id}/members — rank: any-builder — POST /goals/:id/members
      postGoalsIdMembers: (args) => request("POST", "/goals/{id}/members", { hasBody: true }, args),
      // PATCH /goals/{id}/members/{builderId} — rank: any-builder — PATCH /goals/:id/members/:builderId
      patchGoalsIdMembersBuilderId: (args) => request("PATCH", "/goals/{id}/members/{builderId}", { hasBody: true }, args),
      // POST /goals/{id}/reopen — rank: metic+archon — POST /goals/:id/reopen
      postGoalsIdReopen: (args) => request("POST", "/goals/{id}/reopen", { hasBody: true }, args),
      // GET /goals/{id}/requests — rank: any-builder — GET /goals/:id/requests
      getGoalsIdRequests: (args) => request("GET", "/goals/{id}/requests", { hasBody: false }, args),
      // POST /goals/{id}/requests — rank: any-builder — POST /goals/:id/requests
      postGoalsIdRequests: (args) => request("POST", "/goals/{id}/requests", { hasBody: true }, args),
      // POST /goals/{id}/requests/{reqId}/respond — rank: any-builder — POST /goals/:id/requests/:reqId/respond
      postGoalsIdRequestsReqIdRespond: (args) => request("POST", "/goals/{id}/requests/{reqId}/respond", { hasBody: true }, args),
      // POST /goals/{id}/requests/{reqId}/withdraw — rank: any-builder — POST /goals/:id/requests/:reqId/withdraw
      postGoalsIdRequestsReqIdWithdraw: (args) => request("POST", "/goals/{id}/requests/{reqId}/withdraw", { hasBody: true }, args),
      // POST /goals/{id}/scope — rank: metic+archon — POST /goals/:id/scope
      postGoalsIdScope: (args) => request("POST", "/goals/{id}/scope", { hasBody: true }, args),
      // GET /goals/{id}/suggest-criteria — rank: any-builder — GET /goals/:id/suggest-criteria
      getGoalsIdSuggestCriteria: (args) => request("GET", "/goals/{id}/suggest-criteria", { hasBody: false }, args),
      // POST /goals/{id}/tasks — rank: any-builder — POST /goals/:id/tasks
      postGoalsIdTasks: (args) => request("POST", "/goals/{id}/tasks", { hasBody: true }, args),
      // POST /goals/{id}/transfer — rank: any-builder — POST /goals/:id/transfer
      postGoalsIdTransfer: (args) => request("POST", "/goals/{id}/transfer", { hasBody: true }, args),
      // PATCH /goals/{id}/visibility — rank: any-builder — PATCH /goals/:id/visibility
      patchGoalsIdVisibility: (args) => request("PATCH", "/goals/{id}/visibility", { hasBody: true }, args),
      // GET /goals/inbox — rank: any-builder — GET /goals/inbox
      getGoalsInbox: (args) => request("GET", "/goals/inbox", { hasBody: false }, args),
      // POST /goals/reorder — rank: metic+archon — POST /goals/reorder
      postGoalsReorder: (args) => request("POST", "/goals/reorder", { hasBody: true }, args),
    },
    "governance": {
      // GET /governance/assignments — rank: archon — GET /governance/assignments
      getGovernanceAssignments: (args) => request("GET", "/governance/assignments", { hasBody: false }, args),
      // POST /governance/assignments — rank: archon — POST /governance/assignments
      postGovernanceAssignments: (args) => request("POST", "/governance/assignments", { hasBody: true }, args),
      // DELETE /governance/assignments/{builderId}/{roleKey} — rank: archon — DELETE /governance/assignments/:builderId/:roleKey
      deleteGovernanceAssignmentsBuilderIdRoleKey: (args) => request("DELETE", "/governance/assignments/{builderId}/{roleKey}", { hasBody: false }, args),
      // GET /governance/permissions — rank: archon — GET /governance/permissions
      getGovernancePermissions: (args) => request("GET", "/governance/permissions", { hasBody: false }, args),
      // GET /governance/roles — rank: archon — GET /governance/roles
      getGovernanceRoles: (args) => request("GET", "/governance/roles", { hasBody: false }, args),
      // POST /governance/roles — rank: archon — POST /governance/roles
      postGovernanceRoles: (args) => request("POST", "/governance/roles", { hasBody: true }, args),
      // DELETE /governance/roles/{roleKey}/permissions/{permissionKey} — rank: archon — DELETE /governance/roles/:roleKey/permissions/:permissionKey
      deleteGovernanceRolesRoleKeyPermissionsPermissionKey: (args) => request("DELETE", "/governance/roles/{roleKey}/permissions/{permissionKey}", { hasBody: false }, args),
      // PUT /governance/roles/{roleKey}/permissions/{permissionKey} — rank: archon — PUT /governance/roles/:roleKey/permissions/:permissionKey
      putGovernanceRolesRoleKeyPermissionsPermissionKey: (args) => request("PUT", "/governance/roles/{roleKey}/permissions/{permissionKey}", { hasBody: true }, args),
    },
    "grades": {
      // GET /grades/by-builder — rank: metic+archon — GET /grades/by-builder
      getGradesByBuilder: (args) => request("GET", "/grades/by-builder", { hasBody: false }, args),
    },
    "healthz": {
      // GET /healthz — rank: public — GET /healthz
      getHealthz: (args) => request("GET", "/healthz", { hasBody: false }, args),
    },
    "inbox": {
      // GET /inbox — rank: any-builder — GET /inbox
      getInbox: (args) => request("GET", "/inbox", { hasBody: false }, args),
      // POST /inbox — rank: any-builder — POST /inbox
      postInbox: (args) => request("POST", "/inbox", { hasBody: true }, args),
      // GET /inbox/{id} — rank: any-builder — GET /inbox/:id
      getInboxId: (args) => request("GET", "/inbox/{id}", { hasBody: false }, args),
      // PATCH /inbox/{id} — rank: metic+archon — PATCH /inbox/:id
      patchInboxId: (args) => request("PATCH", "/inbox/{id}", { hasBody: true }, args),
      // POST /inbox/{id}/ratify — rank: metic+archon — POST /inbox/:id/ratify
      postInboxIdRatify: (args) => request("POST", "/inbox/{id}/ratify", { hasBody: true }, args),
    },
    "instance": {
      // GET /instance — rank: public — GET /instance
      getInstance: (args) => request("GET", "/instance", { hasBody: false }, args),
    },
    "leaderboard": {
      // GET /leaderboard — rank: public — GET /leaderboard
      getLeaderboard: (args) => request("GET", "/leaderboard", { hasBody: false }, args),
    },
    "learnings": {
      // GET /learnings — rank: any-builder — GET /learnings
      getLearnings: (args) => request("GET", "/learnings", { hasBody: false }, args),
      // POST /learnings — rank: any-builder — POST /learnings
      postLearnings: (args) => request("POST", "/learnings", { hasBody: true }, args),
    },
    "live": {
      // GET /live — rank: any-builder — GET /live
      getLive: (args) => request("GET", "/live", { hasBody: false }, args),
    },
    "llmCache": {
      // POST /llm-cache/lookup — rank: metic+archon — POST /llm-cache/lookup
      postLlmCacheLookup: (args) => request("POST", "/llm-cache/lookup", { hasBody: true }, args),
      // POST /llm-cache/store — rank: metic+archon — POST /llm-cache/store
      postLlmCacheStore: (args) => request("POST", "/llm-cache/store", { hasBody: true }, args),
    },
    "me": {
      // GET /me — rank: any-builder — GET /me
      getMe: (args) => request("GET", "/me", { hasBody: false }, args),
      // GET /me/achievements — rank: any-builder — GET /me/achievements
      getMeAchievements: (args) => request("GET", "/me/achievements", { hasBody: false }, args),
      // POST /me/anthropic-link — rank: any-builder — POST /me/anthropic-link
      postMeAnthropicLink: (args) => request("POST", "/me/anthropic-link", { hasBody: true }, args),
      // PATCH /me/disciplines — rank: any-builder — PATCH /me/disciplines
      patchMeDisciplines: (args) => request("PATCH", "/me/disciplines", { hasBody: true }, args),
      // GET /me/display-name — rank: any-builder — GET /me/display-name
      getMeDisplayName: (args) => request("GET", "/me/display-name", { hasBody: false }, args),
      // PATCH /me/display-name — rank: any-builder — PATCH /me/display-name
      patchMeDisplayName: (args) => request("PATCH", "/me/display-name", { hasBody: true }, args),
      // GET /me/event-sound-prefs — rank: any-builder — GET /me/event-sound-prefs
      getMeEventSoundPrefs: (args) => request("GET", "/me/event-sound-prefs", { hasBody: false }, args),
      // PATCH /me/event-sound-prefs — rank: any-builder — PATCH /me/event-sound-prefs
      patchMeEventSoundPrefs: (args) => request("PATCH", "/me/event-sound-prefs", { hasBody: true }, args),
      // GET /me/interaction — rank: any-builder — GET /me/interaction
      getMeInteraction: (args) => request("GET", "/me/interaction", { hasBody: false }, args),
      // PATCH /me/interaction — rank: any-builder — PATCH /me/interaction
      patchMeInteraction: (args) => request("PATCH", "/me/interaction", { hasBody: true }, args),
      // GET /me/model-allocation — rank: any-builder — GET /me/model-allocation
      getMeModelAllocation: (args) => request("GET", "/me/model-allocation", { hasBody: false }, args),
      // PATCH /me/model-allocation — rank: any-builder — PATCH /me/model-allocation
      patchMeModelAllocation: (args) => request("PATCH", "/me/model-allocation", { hasBody: true }, args),
      // GET /me/recent-ships — rank: any-builder — GET /me/recent-ships
      getMeRecentShips: (args) => request("GET", "/me/recent-ships", { hasBody: false }, args),
      // GET /me/render — rank: any-builder — GET /me/render
      getMeRender: (args) => request("GET", "/me/render", { hasBody: false }, args),
      // PATCH /me/render — rank: any-builder — PATCH /me/render
      patchMeRender: (args) => request("PATCH", "/me/render", { hasBody: true }, args),
      // GET /me/skill-prefs — rank: any-builder — GET /me/skill-prefs
      getMeSkillPrefs: (args) => request("GET", "/me/skill-prefs", { hasBody: false }, args),
      // PATCH /me/skill-prefs — rank: any-builder — PATCH /me/skill-prefs
      patchMeSkillPrefs: (args) => request("PATCH", "/me/skill-prefs", { hasBody: true }, args),
      // GET /me/sound-prefs — rank: any-builder — GET /me/sound-prefs
      getMeSoundPrefs: (args) => request("GET", "/me/sound-prefs", { hasBody: false }, args),
      // PATCH /me/sound-prefs — rank: any-builder — PATCH /me/sound-prefs
      patchMeSoundPrefs: (args) => request("PATCH", "/me/sound-prefs", { hasBody: true }, args),
      // GET /me/wandering — rank: any-builder — GET /me/wandering
      getMeWandering: (args) => request("GET", "/me/wandering", { hasBody: false }, args),
      // PATCH /me/wandering — rank: any-builder — PATCH /me/wandering
      patchMeWandering: (args) => request("PATCH", "/me/wandering", { hasBody: true }, args),
    },
    "memory": {
      // GET /memory/bfg/builders/{builderId}/file — rank: bfg-principal — GET /memory/bfg/builders/:builderId/file
      getMemoryBfgBuildersBuilderIdFile: (args) => request("GET", "/memory/bfg/builders/{builderId}/file", { hasBody: false }, args),
      // GET /memory/bfg/builders/{builderId}/files — rank: bfg-principal — GET /memory/bfg/builders/:builderId/files
      getMemoryBfgBuildersBuilderIdFiles: (args) => request("GET", "/memory/bfg/builders/{builderId}/files", { hasBody: false }, args),
      // POST /memory/builders/{builderId}/bfg-write — rank: bfg-principal — POST /memory/builders/:builderId/bfg-write
      postMemoryBuildersBuilderIdBfgWrite: (args) => request("POST", "/memory/builders/{builderId}/bfg-write", { hasBody: true }, args),
      // GET /memory/builders/{builderId}/file — rank: metic+archon — GET /memory/builders/:builderId/file
      getMemoryBuildersBuilderIdFile: (args) => request("GET", "/memory/builders/{builderId}/file", { hasBody: false }, args),
      // GET /memory/builders/{builderId}/files — rank: metic+archon — GET /memory/builders/:builderId/files
      getMemoryBuildersBuilderIdFiles: (args) => request("GET", "/memory/builders/{builderId}/files", { hasBody: false }, args),
      // DELETE /memory/file — rank: any-builder — DELETE /memory/file
      deleteMemoryFile: (args) => request("DELETE", "/memory/file", { hasBody: true }, args),
      // GET /memory/file — rank: any-builder — GET /memory/file
      getMemoryFile: (args) => request("GET", "/memory/file", { hasBody: false }, args),
      // GET /memory/files — rank: any-builder — GET /memory/files
      getMemoryFiles: (args) => request("GET", "/memory/files", { hasBody: false }, args),
      // POST /memory/sync — rank: any-builder — POST /memory/sync
      postMemorySync: (args) => request("POST", "/memory/sync", { hasBody: true }, args),
    },
    "modules": {
      // GET /modules — rank: any-builder — GET /modules
      getModules: (args) => request("GET", "/modules", { hasBody: false }, args),
      // POST /modules/{key}/enable — rank: metic+archon — POST /modules/:key/enable
      postModulesKeyEnable: (args) => request("POST", "/modules/{key}/enable", { hasBody: true }, args),
      // POST /modules/{key}/submit — rank: metic+archon — POST /modules/:key/submit
      postModulesKeySubmit: (args) => request("POST", "/modules/{key}/submit", { hasBody: true }, args),
      // GET /modules/submissions — rank: metic+archon — GET /modules/submissions
      getModulesSubmissions: (args) => request("GET", "/modules/submissions", { hasBody: false }, args),
    },
    "myProjects": {
      // GET /my-projects — rank: any-builder — GET /my-projects
      getMyProjects: (args) => request("GET", "/my-projects", { hasBody: false }, args),
      // POST /my-projects/{clientId}/leave — rank: any-builder — POST /my-projects/:clientId/leave
      postMyProjectsClientIdLeave: (args) => request("POST", "/my-projects/{clientId}/leave", { hasBody: true }, args),
      // GET /my-projects/invites — rank: any-builder — GET /my-projects/invites
      getMyProjectsInvites: (args) => request("GET", "/my-projects/invites", { hasBody: false }, args),
      // POST /my-projects/invites/{clientId}/accept — rank: any-builder — POST /my-projects/invites/:clientId/accept
      postMyProjectsInvitesClientIdAccept: (args) => request("POST", "/my-projects/invites/{clientId}/accept", { hasBody: true }, args),
      // POST /my-projects/invites/{clientId}/decline — rank: any-builder — POST /my-projects/invites/:clientId/decline
      postMyProjectsInvitesClientIdDecline: (args) => request("POST", "/my-projects/invites/{clientId}/decline", { hasBody: true }, args),
      // POST /my-projects/join — rank: any-builder — POST /my-projects/join
      postMyProjectsJoin: (args) => request("POST", "/my-projects/join", { hasBody: true }, args),
    },
    "overrideRequests": {
      // GET /override-requests — rank: metic+archon — GET /override-requests
      getOverrideRequests: (args) => request("GET", "/override-requests", { hasBody: false }, args),
      // POST /override-requests/{id}/decide — rank: metic+archon — POST /override-requests/:id/decide
      postOverrideRequestsIdDecide: (args) => request("POST", "/override-requests/{id}/decide", { hasBody: true }, args),
    },
    "projects": {
      // GET /projects — rank: metic+archon — GET /projects
      getProjects: (args) => request("GET", "/projects", { hasBody: false }, args),
      // POST /projects — rank: metic+archon — POST /projects
      postProjects: (args) => request("POST", "/projects", { hasBody: true }, args),
      // PATCH /projects/{id}/featured — rank: metic+archon — PATCH /projects/:id/featured
      patchProjectsIdFeatured: (args) => request("PATCH", "/projects/{id}/featured", { hasBody: true }, args),
      // GET /projects/featured — rank: public — GET /projects/featured
      getProjectsFeatured: (args) => request("GET", "/projects/featured", { hasBody: false }, args),
      // POST /projects/invite — rank: metic+archon — POST /projects/invite
      postProjectsInvite: (args) => request("POST", "/projects/invite", { hasBody: true }, args),
    },
    "provisioning": {
      // GET /provisioning/fleet — rank: metic+archon — GET /provisioning/fleet
      getProvisioningFleet: (args) => request("GET", "/provisioning/fleet", { hasBody: false }, args),
      // GET /provisioning/fleet/cost-ledger — rank: metic+archon — GET /provisioning/fleet/cost-ledger
      getProvisioningFleetCostLedger: (args) => request("GET", "/provisioning/fleet/cost-ledger", { hasBody: false }, args),
      // GET /provisioning/github-app/callback — rank: public — GET /provisioning/github-app/callback
      getProvisioningGithubAppCallback: (args) => request("GET", "/provisioning/github-app/callback", { hasBody: false }, args),
      // GET /provisioning/github-app/status — rank: public — GET /provisioning/github-app/status
      getProvisioningGithubAppStatus: (args) => request("GET", "/provisioning/github-app/status", { hasBody: false }, args),
      // GET /provisioning/health — rank: public — GET /provisioning/health
      getProvisioningHealth: (args) => request("GET", "/provisioning/health", { hasBody: false }, args),
      // GET /provisioning/instances — rank: any-builder — GET /provisioning/instances
      getProvisioningInstances: (args) => request("GET", "/provisioning/instances", { hasBody: false }, args),
      // POST /provisioning/instances — rank: any-builder — POST /provisioning/instances
      postProvisioningInstances: (args) => request("POST", "/provisioning/instances", { hasBody: true }, args),
      // GET /provisioning/instances/{id} — rank: any-builder — GET /provisioning/instances/:id
      getProvisioningInstancesId: (args) => request("GET", "/provisioning/instances/{id}", { hasBody: false }, args),
      // POST /provisioning/instances/{id}/force-teardown — rank: metic+archon — POST /provisioning/instances/:id/force-teardown
      postProvisioningInstancesIdForceTeardown: (args) => request("POST", "/provisioning/instances/{id}/force-teardown", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/github-app — rank: any-builder — POST /provisioning/instances/:id/github-app
      postProvisioningInstancesIdGithubApp: (args) => request("POST", "/provisioning/instances/{id}/github-app", { hasBody: true }, args),
      // POST /provisioning/instances/{id}/teardown — rank: any-builder — POST /provisioning/instances/:id/teardown
      postProvisioningInstancesIdTeardown: (args) => request("POST", "/provisioning/instances/{id}/teardown", { hasBody: true }, args),
      // GET /provisioning/onboard-plan — rank: public — GET /provisioning/onboard-plan
      getProvisioningOnboardPlan: (args) => request("GET", "/provisioning/onboard-plan", { hasBody: false }, args),
      // GET /provisioning/tls-check — rank: public — GET /provisioning/tls-check
      getProvisioningTlsCheck: (args) => request("GET", "/provisioning/tls-check", { hasBody: false }, args),
    },
    "public": {
      // GET /public/analytics/ecosystem — rank: public — GET /public/analytics/ecosystem
      getPublicAnalyticsEcosystem: (args) => request("GET", "/public/analytics/ecosystem", { hasBody: false }, args),
      // GET /public/blockers/{id} — rank: public — GET /public/blockers/:id
      getPublicBlockersId: (args) => request("GET", "/public/blockers/{id}", { hasBody: false }, args),
      // GET /public/bounty-table — rank: public — GET /public/bounty-table
      getPublicBountyTable: (args) => request("GET", "/public/bounty-table", { hasBody: false }, args),
      // GET /public/branding — rank: public — GET /public/branding
      getPublicBranding: (args) => request("GET", "/public/branding", { hasBody: false }, args),
      // GET /public/cost-summary — rank: public — GET /public/cost-summary
      getPublicCostSummary: (args) => request("GET", "/public/cost-summary", { hasBody: false }, args),
      // GET /public/estimation-drift — rank: public — GET /public/estimation-drift
      getPublicEstimationDrift: (args) => request("GET", "/public/estimation-drift", { hasBody: false }, args),
      // GET /public/grades — rank: public — GET /public/grades
      getPublicGrades: (args) => request("GET", "/public/grades", { hasBody: false }, args),
      // GET /public/ideas/{id} — rank: public — GET /public/ideas/:id
      getPublicIdeasId: (args) => request("GET", "/public/ideas/{id}", { hasBody: false }, args),
      // GET /public/leaderboard — rank: public — GET /public/leaderboard
      getPublicLeaderboard: (args) => request("GET", "/public/leaderboard", { hasBody: false }, args),
      // GET /public/modules — rank: public — GET /public/modules
      getPublicModules: (args) => request("GET", "/public/modules", { hasBody: false }, args),
      // GET /public/progress — rank: public — GET /public/progress
      getPublicProgress: (args) => request("GET", "/public/progress", { hasBody: false }, args),
      // GET /public/recent-shipped — rank: public — GET /public/recent-shipped
      getPublicRecentShipped: (args) => request("GET", "/public/recent-shipped", { hasBody: false }, args),
      // GET /public/ref-ids — rank: public — GET /public/ref-ids
      getPublicRefIds: (args) => request("GET", "/public/ref-ids", { hasBody: false }, args),
      // GET /public/repo-health — rank: public — GET /public/repo-health
      getPublicRepoHealth: (args) => request("GET", "/public/repo-health", { hasBody: false }, args),
      // GET /public/repo-info — rank: public — GET /public/repo-info
      getPublicRepoInfo: (args) => request("GET", "/public/repo-info", { hasBody: false }, args),
      // GET /public/tasks/{id} — rank: public — GET /public/tasks/:id
      getPublicTasksId: (args) => request("GET", "/public/tasks/{id}", { hasBody: false }, args),
      // GET /public/uptime — rank: public — GET /public/uptime
      getPublicUptime: (args) => request("GET", "/public/uptime", { hasBody: false }, args),
      // GET /public/versions — rank: public — GET /public/versions
      getPublicVersions: (args) => request("GET", "/public/versions", { hasBody: false }, args),
    },
    "scouting": {
      // GET /scouting — rank: metic+archon — GET /scouting
      getScouting: (args) => request("GET", "/scouting", { hasBody: false }, args),
    },
    "search": {
      // POST /search — rank: any-builder — POST /search
      postSearch: (args) => request("POST", "/search", { hasBody: true }, args),
      // POST /search/mark — rank: any-builder — POST /search/mark
      postSearchMark: (args) => request("POST", "/search/mark", { hasBody: true }, args),
    },
    "security": {
      // GET /security/adr — rank: metic+archon — GET /security/adr
      getSecurityAdr: (args) => request("GET", "/security/adr", { hasBody: false }, args),
      // GET /security/docs — rank: metic+archon — GET /security/docs
      getSecurityDocs: (args) => request("GET", "/security/docs", { hasBody: false }, args),
      // POST /security/docs — rank: metic+archon — POST /security/docs
      postSecurityDocs: (args) => request("POST", "/security/docs", { hasBody: true }, args),
      // GET /security/docs/{slug} — rank: metic+archon — GET /security/docs/:slug
      getSecurityDocsSlug: (args) => request("GET", "/security/docs/{slug}", { hasBody: false }, args),
      // GET /security/reports — rank: metic+archon — GET /security/reports
      getSecurityReports: (args) => request("GET", "/security/reports", { hasBody: false }, args),
      // POST /security/reports — rank: metic+archon — POST /security/reports
      postSecurityReports: (args) => request("POST", "/security/reports", { hasBody: true }, args),
      // POST /security/reports/{id}/confirm — rank: metic+archon — POST /security/reports/:id/confirm
      postSecurityReportsIdConfirm: (args) => request("POST", "/security/reports/{id}/confirm", { hasBody: true }, args),
      // POST /security/reports/{id}/dispute — rank: metic+archon — POST /security/reports/:id/dispute
      postSecurityReportsIdDispute: (args) => request("POST", "/security/reports/{id}/dispute", { hasBody: true }, args),
      // POST /security/reports/{id}/fix — rank: metic+archon — POST /security/reports/:id/fix
      postSecurityReportsIdFix: (args) => request("POST", "/security/reports/{id}/fix", { hasBody: true }, args),
      // POST /security/reports/{id}/link-fix — rank: metic+archon — POST /security/reports/:id/link-fix
      postSecurityReportsIdLinkFix: (args) => request("POST", "/security/reports/{id}/link-fix", { hasBody: true }, args),
      // GET /security/scans — rank: any-builder — GET /security/scans
      getSecurityScans: (args) => request("GET", "/security/scans", { hasBody: false }, args),
      // POST /security/scans — rank: metic+archon — POST /security/scans
      postSecurityScans: (args) => request("POST", "/security/scans", { hasBody: true }, args),
    },
    "session": {
      // POST /session/optimize — rank: any-builder — POST /session/optimize
      postSessionOptimize: (args) => request("POST", "/session/optimize", { hasBody: true }, args),
    },
    "sessions": {
      // POST /sessions — rank: any-builder — POST /sessions
      postSessions: (args) => request("POST", "/sessions", { hasBody: true }, args),
      // GET /sessions/{id} — rank: any-builder — GET /sessions/:id
      getSessionsId: (args) => request("GET", "/sessions/{id}", { hasBody: false }, args),
      // GET /sessions/mine — rank: any-builder — GET /sessions/mine
      getSessionsMine: (args) => request("GET", "/sessions/mine", { hasBody: false }, args),
      // GET /sessions/search — rank: metic+archon — GET /sessions/search
      getSessionsSearch: (args) => request("GET", "/sessions/search", { hasBody: false }, args),
    },
    "sso": {
      // POST /sso/activity/rollup — rank: public — POST /sso/activity/rollup
      postSsoActivityRollup: (args) => request("POST", "/sso/activity/rollup", { hasBody: true }, args),
      // GET /sso/authorize — rank: public — GET /sso/authorize
      getSsoAuthorize: (args) => request("GET", "/sso/authorize", { hasBody: false }, args),
      // POST /sso/device/poll — rank: public — POST /sso/device/poll
      postSsoDevicePoll: (args) => request("POST", "/sso/device/poll", { hasBody: true }, args),
      // POST /sso/device/start — rank: public — POST /sso/device/start
      postSsoDeviceStart: (args) => request("POST", "/sso/device/start", { hasBody: true }, args),
      // POST /sso/membership/check-in — rank: public — POST /sso/membership/check-in
      postSsoMembershipCheckIn: (args) => request("POST", "/sso/membership/check-in", { hasBody: true }, args),
      // GET /sso/pubkey — rank: public — GET /sso/pubkey
      getSsoPubkey: (args) => request("GET", "/sso/pubkey", { hasBody: false }, args),
      // POST /sso/token — rank: public — POST /sso/token
      postSsoToken: (args) => request("POST", "/sso/token", { hasBody: true }, args),
    },
    "tasks": {
      // GET /tasks — rank: any-builder — GET /tasks
      getTasks: (args) => request("GET", "/tasks", { hasBody: false }, args),
      // POST /tasks — rank: metic+archon — POST /tasks
      postTasks: (args) => request("POST", "/tasks", { hasBody: true }, args),
      // GET /tasks/{id} — rank: any-builder — GET /tasks/:id
      getTasksId: (args) => request("GET", "/tasks/{id}", { hasBody: false }, args),
      // PATCH /tasks/{id} — rank: metic+archon — PATCH /tasks/:id
      patchTasksId: (args) => request("PATCH", "/tasks/{id}", { hasBody: true }, args),
      // POST /tasks/{id}/abandon — rank: metic+archon — POST /tasks/:id/abandon
      postTasksIdAbandon: (args) => request("POST", "/tasks/{id}/abandon", { hasBody: true }, args),
      // POST /tasks/{id}/attest-gate — rank: any-builder — POST /tasks/:id/attest-gate
      postTasksIdAttestGate: (args) => request("POST", "/tasks/{id}/attest-gate", { hasBody: true }, args),
      // POST /tasks/{id}/confirm — rank: any-builder — POST /tasks/:id/confirm
      postTasksIdConfirm: (args) => request("POST", "/tasks/{id}/confirm", { hasBody: true }, args),
      // GET /tasks/{id}/criteria — rank: any-builder — GET /tasks/:id/criteria
      getTasksIdCriteria: (args) => request("GET", "/tasks/{id}/criteria", { hasBody: false }, args),
      // POST /tasks/{id}/criteria — rank: metic+archon — POST /tasks/:id/criteria
      postTasksIdCriteria: (args) => request("POST", "/tasks/{id}/criteria", { hasBody: true }, args),
      // DELETE /tasks/{id}/criteria/{criterionId} — rank: metic+archon — DELETE /tasks/:id/criteria/:criterionId
      deleteTasksIdCriteriaCriterionId: (args) => request("DELETE", "/tasks/{id}/criteria/{criterionId}", { hasBody: false }, args),
      // POST /tasks/{id}/demote — rank: metic+archon — POST /tasks/:id/demote
      postTasksIdDemote: (args) => request("POST", "/tasks/{id}/demote", { hasBody: true }, args),
      // GET /tasks/{id}/dependencies — rank: any-builder — GET /tasks/:id/dependencies
      getTasksIdDependencies: (args) => request("GET", "/tasks/{id}/dependencies", { hasBody: false }, args),
      // POST /tasks/{id}/dependencies — rank: metic+archon — POST /tasks/:id/dependencies
      postTasksIdDependencies: (args) => request("POST", "/tasks/{id}/dependencies", { hasBody: true }, args),
      // PUT /tasks/{id}/dependencies — rank: metic+archon — PUT /tasks/:id/dependencies
      putTasksIdDependencies: (args) => request("PUT", "/tasks/{id}/dependencies", { hasBody: true }, args),
      // DELETE /tasks/{id}/dependencies/{depId} — rank: metic+archon — DELETE /tasks/:id/dependencies/:depId
      deleteTasksIdDependenciesDepId: (args) => request("DELETE", "/tasks/{id}/dependencies/{depId}", { hasBody: false }, args),
      // POST /tasks/{id}/grade — rank: any-builder — POST /tasks/:id/grade
      postTasksIdGrade: (args) => request("POST", "/tasks/{id}/grade", { hasBody: true }, args),
      // POST /tasks/{id}/override-request — rank: any-builder — POST /tasks/:id/override-request
      postTasksIdOverrideRequest: (args) => request("POST", "/tasks/{id}/override-request", { hasBody: true }, args),
      // POST /tasks/{id}/promote — rank: metic+archon — POST /tasks/:id/promote
      postTasksIdPromote: (args) => request("POST", "/tasks/{id}/promote", { hasBody: true }, args),
      // POST /tasks/{id}/publish-branch — rank: any-builder — POST /tasks/:id/publish-branch
      postTasksIdPublishBranch: (args) => request("POST", "/tasks/{id}/publish-branch", { hasBody: true }, args),
      // GET /tasks/{id}/publish-status — rank: any-builder — GET /tasks/:id/publish-status
      getTasksIdPublishStatus: (args) => request("GET", "/tasks/{id}/publish-status", { hasBody: false }, args),
      // POST /tasks/{id}/ship — rank: any-builder — POST /tasks/:id/ship
      postTasksIdShip: (args) => request("POST", "/tasks/{id}/ship", { hasBody: true }, args),
      // POST /tasks/{id}/vote — rank: metic+archon — POST /tasks/:id/vote
      postTasksIdVote: (args) => request("POST", "/tasks/{id}/vote", { hasBody: true }, args),
      // GET /tasks/claimable — rank: any-builder — GET /tasks/claimable
      getTasksClaimable: (args) => request("GET", "/tasks/claimable", { hasBody: false }, args),
      // GET /tasks/newcomer-floor — rank: any-builder — GET /tasks/newcomer-floor
      getTasksNewcomerFloor: (args) => request("GET", "/tasks/newcomer-floor", { hasBody: false }, args),
      // POST /tasks/newcomer-restock — rank: metic+archon — POST /tasks/newcomer-restock
      postTasksNewcomerRestock: (args) => request("POST", "/tasks/newcomer-restock", { hasBody: true }, args),
      // GET /tasks/peer-votes/feed — rank: any-builder — GET /tasks/peer-votes/feed
      getTasksPeerVotesFeed: (args) => request("GET", "/tasks/peer-votes/feed", { hasBody: false }, args),
      // POST /tasks/peer-votes/tally — rank: metic+archon — POST /tasks/peer-votes/tally
      postTasksPeerVotesTally: (args) => request("POST", "/tasks/peer-votes/tally", { hasBody: true }, args),
    },
    "versions": {
      // GET /versions — rank: public — GET /versions
      getVersions: (args) => request("GET", "/versions", { hasBody: false }, args),
      // POST /versions — rank: metic+archon — POST /versions
      postVersions: (args) => request("POST", "/versions", { hasBody: true }, args),
      // GET /versions/{id}/done-when — rank: public — GET /versions/:id/done-when
      getVersionsIdDoneWhen: (args) => request("GET", "/versions/{id}/done-when", { hasBody: false }, args),
      // POST /versions/{id}/done-when — rank: metic+archon — POST /versions/:id/done-when
      postVersionsIdDoneWhen: (args) => request("POST", "/versions/{id}/done-when", { hasBody: true }, args),
      // GET /versions/{id}/progress — rank: public — GET /versions/:id/progress
      getVersionsIdProgress: (args) => request("GET", "/versions/{id}/progress", { hasBody: false }, args),
      // GET /versions/close-suggestions — rank: public — GET /versions/close-suggestions
      getVersionsCloseSuggestions: (args) => request("GET", "/versions/close-suggestions", { hasBody: false }, args),
      // GET /versions/progress — rank: public — GET /versions/progress
      getVersionsProgress: (args) => request("GET", "/versions/progress", { hasBody: false }, args),
    },
  };
}


global.BongosClient = { createClient: createClient, ApiError: ApiError, API_VERSION: API_VERSION, DEFAULT_BASE_URL: DEFAULT_BASE_URL };
})(typeof globalThis !== 'undefined' ? globalThis : (typeof self !== 'undefined' ? self : this));
