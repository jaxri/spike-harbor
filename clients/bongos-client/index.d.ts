// GENERATED — TypeScript types for @bongos/client (task 1995; field-level
// request typing added in task 2050 / ADR 0118). DO NOT EDIT BY HAND.
export declare const API_VERSION: string;
export declare const DEFAULT_BASE_URL: string;

// Request-body + shared types, generated from the OpenAPI components.schemas.
export interface ApiErrorObject { code: string; message: string; details?: unknown }
export interface DeleteBoxSshKeyIdResponse { ok: boolean; deleted: unknown }
export interface DeleteDependenciesResponse { ok: boolean }
export interface DeleteGovernanceAssignmentsBuilderIdRoleKeyResponse { ok: boolean; builder_id: unknown; role_key: unknown; removed: unknown }
export interface DeleteGovernanceRolesRoleKeyPermissionsPermissionKeyResponse { ok: boolean; role_key: unknown; permission_key: unknown; removed: unknown }
export interface DeleteMemoryFileResponse { deleted: boolean; builder_id: unknown; path: unknown }
export interface DeleteTasksIdCriteriaCriterionIdResponse { ok: boolean; removed: unknown }
export interface DeleteTasksIdDependenciesDepIdResponse { ok: boolean; removed: unknown }
export interface ErrorEnvelope { error: ApiErrorObject }
export interface GetAccessRequestsResponse { requests: unknown }
export interface GetAccessRequestsStatusResponse { github_login: unknown; status: unknown; admitted: unknown }
export interface GetAchievementsResponse { achievements: unknown }
export interface GetAuditLogResponse { rows: unknown; page: unknown }
export interface GetAuthAppPairInfoResponse { pair_code: unknown; device_name: unknown; platform: unknown; status: unknown }
export interface GetAuthWebAdmissionStatusResponse { admitted: boolean }
export interface GetBackupStatusResponse { backup_dir: unknown; db_name: unknown; latest_dump: unknown; stale: unknown; age_hours: unknown; trigger_running: unknown }
export interface GetBlockersIdResponse { blocker: unknown }
export interface GetBlockersResponse { blockers: unknown; page: unknown }
export interface GetBoxMeResponse { box: unknown; open_intent: unknown; cost: unknown }
export interface GetBoxSourceAccessResponse { scope: unknown; mode: unknown; sparse_paths: unknown; repo_url: unknown; credential: unknown; configured: unknown; separate_starter_repo: unknown; expires_at: unknown; ttl_seconds: unknown; guidance: unknown }
export interface GetBoxSshKeyResponse { keys: unknown }
export interface GetBoxTerminalResponse { state: unknown; url: unknown; credential: unknown; hint: unknown; warming_up?: boolean; terminal_at?: unknown }
export interface GetBoxesResponse { boxes: unknown }
export interface GetBuildersDirectoryResponse { builders: unknown }
export interface GetBuildersIdActiveClaimsResponse { builder_id: unknown; claims: unknown; stale_hours: unknown }
export interface GetBuildersIdOnboardingResponse { builder_id: unknown; onboarding: unknown }
export interface GetBuildersIdProfileResponse { builder: unknown; shipped_count: unknown; recent_ships: unknown; achievements: unknown }
export interface GetBuildersMePendingRankChangeResponse { change: unknown; greeting?: unknown }
export interface GetBuildersRosterResponse { builders: unknown; stale_hours: unknown }
export interface GetDiscordChannelsPlanResponse { ok: boolean; guild_id: unknown; op_count: unknown; ops: unknown; warnings: unknown }
export interface GetDoneWhenPendingReviewResponse { criteria: unknown; count: unknown }
export interface GetGithubReposResponse { repos: unknown }
export interface GetGoalsIdConflictsResponse { ok: boolean; goal_id: unknown; conflicts: unknown; cross_goals_considered: unknown }
export interface GetGoalsIdRequestsResponse { requests: unknown }
export interface GetGoalsIdResponse { goal: unknown; members: unknown; criteria: unknown; dependencies: unknown }
export interface GetGoalsIdSuggestCriteriaResponse { goal_id: unknown; suggestions: unknown }
export interface GetGoalsResponse { goals: unknown }
export interface GetGovernanceAssignmentsResponse { assignments: unknown }
export interface GetGovernancePermissionsResponse { permissions: unknown; principals: unknown }
export interface GetGovernanceRolesResponse { roles: unknown }
export interface GetGradesByBuilderResponse { window_days: unknown; builders: unknown }
export interface GetHealthzResponse { ok: boolean; auth_configured: unknown }
export interface GetInboxIdResponse { idea: unknown }
export interface GetInboxResponse { ideas: unknown; open_count: unknown }
export interface GetLeaderboardResponse { leaderboard: unknown; page: unknown }
export interface GetLearningsResponse { learnings: unknown }
export interface GetMeAchievementsResponse { unlocked: unknown }
export interface GetMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface GetMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface GetMeRecentShipsResponse { ships: unknown }
export interface GetMeSkillPrefsResponse { prefs: unknown; effective: unknown; defaults: unknown; known_skills: unknown; allowed_models: unknown }
export interface GetMeSoundPrefsResponse { prefs: unknown; effective: unknown; effective_map: unknown; volume: unknown; defaults: unknown; known_sounds: unknown }
export interface GetMemoryBfgBuildersBuilderIdFileResponse { builder_id: unknown; bfg_read: boolean; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryBfgBuildersBuilderIdFilesResponse { builder_id: unknown; bfg_read: boolean; count: unknown; files: unknown }
export interface GetMemoryBuildersBuilderIdFileResponse { builder_id: unknown; forensic: boolean; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryBuildersBuilderIdFilesResponse { builder_id: unknown; forensic: boolean; count: unknown; files: unknown }
export interface GetMemoryFileResponse { builder_id: unknown; path: unknown; content: unknown; sha256: unknown; byte_len: unknown; mtime: unknown; updated_at: unknown; created_at: unknown }
export interface GetMemoryFilesResponse { builder_id: unknown; count: unknown; files: unknown }
export interface GetModulesResponse { modules: unknown; own_built: unknown; core_loaded: unknown; submit_pipeline_live: boolean }
export interface GetModulesSubmissionsResponse { submissions: unknown }
export interface GetMyProjectsInvitesResponse { invites: unknown }
export interface GetMyProjectsResponse { owned: unknown; building: unknown }
export interface GetOverrideRequestsResponse { requests: unknown }
export interface GetProjectsFeaturedResponse { projects: unknown }
export interface GetProjectsResponse { projects: unknown }
export interface GetProvisioningFleetResponse { instances: unknown }
export interface GetProvisioningGithubAppStatusResponse { ok: boolean; status: unknown; ready: unknown; terminal: unknown; domain: unknown; instance_status: unknown }
export interface GetProvisioningHealthResponse { module: unknown; ok: boolean; coreVersion: unknown }
export interface GetProvisioningInstancesIdResponse { instance: unknown; open_intent: unknown }
export interface GetProvisioningInstancesResponse { instances: unknown }
export interface GetProvisioningOnboardPlanResponse { mode: unknown; steps: unknown }
export interface GetPublicBlockersIdResponse { blocker: unknown }
export interface GetPublicBountyTableResponse { table: unknown; currency: unknown }
export interface GetPublicGradesResponse { window_days: unknown; rolling: unknown; trend: unknown; threshold: unknown; grader_version: unknown }
export interface GetPublicIdeasIdResponse { idea: unknown }
export interface GetPublicLeaderboardResponse { leaderboard: unknown; page: PageInfo }
export interface GetPublicProgressResponse { progress: unknown }
export interface GetPublicRecentShippedResponse { tasks: unknown; days: unknown; range: unknown }
export interface GetPublicRefIdsResponse { tasks: unknown; ideas: unknown; blockers: unknown }
export interface GetPublicRepoHealthResponse { window_days: unknown; latest: unknown; trend: unknown }
export interface GetPublicRepoInfoResponse { blob_base: unknown; tree_base: unknown; branch: unknown }
export interface GetPublicTasksIdResponse { task: unknown }
export interface GetPublicUptimeResponse { services: unknown }
export interface GetPublicVersionsResponse { versions: unknown; page: PageInfo }
export interface GetScoutingResponse { builders: unknown }
export interface GetSecurityDocsResponse { docs: unknown }
export interface GetSecurityDocsSlugResponse { doc: unknown }
export interface GetSecurityReportsResponse { reports: unknown; bounty_table: unknown; statuses: unknown }
export interface GetSecurityScansResponse { scans: unknown }
export interface GetSessionsIdResponse { session: unknown }
export interface GetSessionsMineResponse { sessions: unknown; count: unknown }
export interface GetSessionsSearchResponse { sessions: unknown; count: unknown; total: unknown; totals: unknown; limit: unknown; offset: unknown }
export interface GetSsoPubkeyResponse { alg: unknown; format: unknown; public_key_b64: unknown }
export interface GetTasksClaimableResponse { claimable: unknown; active_claims: unknown }
export interface GetTasksIdCriteriaResponse { criteria: unknown }
export interface GetTasksIdDependenciesResponse { dependencies: unknown; dependents: unknown }
export interface GetTasksNewcomerFloorResponse { disciplines: unknown }
export interface GetTasksPeerVotesFeedResponse { tasks: unknown; can_vote: unknown }
export interface GetTasksResponse { tasks: unknown }
export interface GetVersionsCloseSuggestionsResponse { suggestions: unknown }
export interface GetVersionsIdDoneWhenResponse { version_id: unknown; criteria: unknown; goals: unknown }
export interface GetVersionsProgressResponse { progress: unknown }
export interface GetVersionsResponse { versions: unknown; page: unknown }
export interface PageInfo { limit: number; offset: number; total?: number }
export interface PatchAccessRequestsIdRequest { status: string }
export interface PatchAccessRequestsIdResponse { ok: boolean; request: unknown }
export interface PatchBoxesBuilderIdBlockRequest { blocked: boolean; reason?: string; close_current?: boolean }
export interface PatchBoxesBuilderIdBlockResponse { ok: boolean; blocked: unknown; close_queued: unknown }
export interface PatchBuildersIdBudgetRequest { monthly_budget_usd?: unknown }
export interface PatchBuildersIdBudgetResponse { builder: unknown }
export interface PatchBuildersIdRankRequest { rank: string }
export interface PatchBuildersIdRankResponse { builder: unknown; previous_rank: unknown; direction: unknown; credit_delta: unknown; broadcast: unknown }
export interface PatchBuildersIdStatusRequest { status: "active" | "inactive"; reason?: string }
export interface PatchGoalsIdMembersBuilderIdRequest { role: string }
export interface PatchGoalsIdMembersBuilderIdResponse { ok: boolean; member: unknown; changed: boolean }
export interface PatchGoalsIdVisibilityRequest { visibility: string }
export interface PatchGoalsIdVisibilityResponse { ok: boolean; goal: unknown }
export interface PatchInboxIdRequest { status?: "open" | "promoted" | "discarded" | "merged"; kind?: string; promoted_to_task_id?: number; reviewed_at?: unknown; merged_into_idea_id?: number; triage_note?: string }
export interface PatchInboxIdResponse { idea: unknown }
export interface PatchMeDisciplinesRequest { preferred_disciplines: string[] }
export interface PatchMeDisciplinesResponse { builder: unknown; onboarding: unknown }
export interface PatchMeDisplayNameResponse { display_name: unknown; max_length: unknown }
export interface PatchMeEventSoundPrefsResponse { prefs: unknown; effective: unknown; effective_wav: unknown; events: unknown }
export interface PatchMeSkillPrefsResponse { prefs: unknown; effective: unknown; defaults: unknown; known_skills: unknown; allowed_models: unknown }
export interface PatchMeSoundPrefsResponse { prefs: unknown; effective: unknown; effective_map: unknown; volume: unknown; defaults: unknown; known_sounds: unknown }
export interface PatchProjectsIdFeaturedRequest { featured: boolean }
export interface PatchProjectsIdFeaturedResponse { project: unknown }
export interface PatchTasksIdRequest { kind?: string; discipline?: string; requires_rank?: string; module_key?: string; goal_id?: number; parent_task_id?: StringifiableId; parallel_safe?: unknown; newcomer_friendly?: boolean; xenos_claimable?: boolean; security_sensitive?: boolean; automation_tag?: string }
export interface PostAccessRequestsRequest { github_login: string; display_name?: string; note?: string }
export interface PostAccessRequestsResponse { ok: boolean; request?: unknown; already_pending?: boolean }
export interface PostAuthAppPairApproveRequest { pair_code: string }
export interface PostAuthAppPairApproveResponse { ok: boolean }
export interface PostAuthAppPairPollRequest { poll_token: string }
export interface PostAuthAppPairStartRequest { device_name?: string; platform?: string }
export interface PostAuthAppPairStartResponse { pair_code: unknown; poll_token: unknown; verify_path: unknown; verify_url: unknown; expires_in: unknown; interval: unknown }
export interface PostAuthBackchannelLogoutRequest { logout_token: string }
export interface PostAuthBackchannelLogoutResponse { ok: boolean }
export interface PostAuthCliTokenIssueResponse { ok: boolean; token: unknown; expires_at: unknown; builder_login: unknown; paste_command: unknown }
export interface PostAuthDeviceExchangeRequest { assertion: string }
export interface PostAuthDeviceExchangeResponse { token: unknown; builder: unknown }
export interface PostAuthDevicePollRequest { device_code: string }
export interface PostAuthDiscordUnlinkResponse { ok: boolean; unlinked: unknown }
export interface PostAuthLogoutResponse { ok: boolean }
export interface PostAuthRevokeAllRequest { builder_id?: StringifiableId }
export interface PostAuthRevokeAllResponse { ok: boolean; revoked: unknown }
export interface PostAuthRevokeRequest { session_id?: StringifiableId }
export interface PostAuthRevokeResponse { ok: boolean; revoked: unknown }
export interface PostBackupTriggerResponse { ok: boolean; message: unknown; started_at: unknown }
export interface PostBlockersIdLinkRequest { task_id: StringifiableId }
export interface PostBlockersIdLinkResponse { ok: boolean; blocked: unknown }
export interface PostBlockersIdResolveRequest { resolution_note?: string }
export interface PostBlockersRequest { title: string; body_md?: string; source?: string; source_ref?: string }
export interface PostBlockersResponse { skipped?: boolean; reason?: unknown; blocker?: unknown }
export interface PostBoxCloseResponse { ok: boolean; queued: unknown; action: unknown; message: unknown }
export interface PostBoxEnsureResponse { state: unknown; action: unknown; queued: boolean; intent?: unknown }
export interface PostBoxHeartbeatRequest { claude_active?: boolean }
export interface PostBoxHeartbeatResponse { ok: boolean; state: unknown }
export interface PostBoxHostKeysRequest { host_keys: string }
export interface PostBoxHostKeysResponse { ok: boolean; state: unknown; count: unknown }
export interface PostBoxSshKeyRequest { public_key: string; label?: string }
export interface PostBoxSshKeyResponse { ok: boolean; key: unknown }
export interface PostBoxTerminalRequest { url: string; credential?: string }
export interface PostBoxTerminalResponse { ok: boolean; state: unknown }
export interface PostBoxVersionRequest { sha: string; committed_at?: string }
export interface PostBoxVersionResponse { ok: boolean; state: unknown }
export interface PostBoxesBuilderIdCloseResponse { ok: boolean; queued: unknown; action: unknown; state: unknown; message: unknown }
export interface PostClaimsBatchReleaseRequest { claim_ids: unknown[]; force?: boolean }
export interface PostClaimsBatchReleaseResponse { released: unknown; failures: unknown }
export interface PostClaimsBatchRequest { task_ids: unknown[]; worktree_name?: string; bind_session?: boolean }
export interface PostClaimsBatchResponse { claims: unknown }
export interface PostClaimsBatchValidateRequest { task_ids: unknown[] }
export interface PostClaimsIdReleaseOnBehalfRequest { reason: string }
export interface PostClaimsIdResolveRequest { outcome: "shipped" | "abandoned" | "partial"; notes_md?: string; value_summary?: string; verification?: Record<string, unknown>; force?: boolean; committed_files?: string[]; sandbox_review?: Record<string, unknown> }
export interface PostClaimsRequest { task_id: StringifiableId; worktree_name?: string; head_sha?: string; bind_session?: boolean; enforce_touches?: boolean }
export interface PostClaimsResponse { claim: unknown; task: unknown; just_unlocked: unknown; overlap_warning: unknown; reward: unknown }
export interface PostCostRequest { task_id?: number; amount_usd: number; category: string; description?: string; source?: string; source_ref?: string; recorded_at?: string; fresh_input_usd?: number; cache_read_usd?: number; cache_write_usd?: number; output_usd?: number; builder_id?: number; skill_name?: string }
export interface PostCostResponse { skipped?: boolean; reason?: unknown; id?: unknown; recorded_at?: unknown }
export interface PostDependenciesResponse { ok: boolean; dependency: unknown }
export interface PostDiscordChannelsReconcileResponse { ok: boolean; applied: unknown; failed: unknown; total: unknown; warnings: unknown }
export interface PostDoneWhenCriterionIdSatisfyRequest { satisfied_by_task_id?: number }
export interface PostDoneWhenCriterionIdSatisfyResponse { criterion: unknown; goal_achieved: unknown; goal: unknown }
export interface PostDoneWhenCriterionIdUnsatisfyResponse { criterion: unknown }
export interface PostGateApprovalsPrApproveResponse { ok: boolean; pr: unknown; already_clear?: boolean; message: unknown; head_sha?: unknown; status_set?: boolean; recheck?: unknown }
export interface PostGithubReposRequest { name: string }
export interface PostGithubReposResponse { repo: unknown }
export interface PostGoalsIdArchiveResponse { ok: boolean; goal: unknown }
export interface PostGoalsIdConflictsResolveRequest { action: string; note?: string; touches?: string[]; first_task_id?: StringifiableId; then_task_id?: StringifiableId; task_id?: StringifiableId }
export interface PostGoalsIdConflictsResolveResponse { ok: boolean; action: unknown; first_task_id?: unknown; then_task_id?: unknown; dependencies?: unknown; claim?: unknown; task_id?: unknown; touches?: unknown; requires_rank?: unknown }
export interface PostGoalsIdInvitationsReqIdRespondRequest { action: string }
export interface PostGoalsIdInvitationsReqIdRespondResponse { ok: boolean; action: unknown; request: unknown; member?: unknown }
export interface PostGoalsIdInvitationsRequest { note?: string; builder_id?: StringifiableId }
export interface PostGoalsIdInvitationsResponse { ok: boolean; request: unknown }
export interface PostGoalsIdJoinResponse { ok: boolean; member: unknown }
export interface PostGoalsIdLeaveResponse { ok: boolean }
export interface PostGoalsIdMembersRequest { role?: string; builder_id?: StringifiableId }
export interface PostGoalsIdMembersResponse { ok: boolean; member: unknown }
export interface PostGoalsIdReopenResponse { ok: boolean; goal: unknown }
export interface PostGoalsIdRequestsReqIdRespondRequest { action: string }
export interface PostGoalsIdRequestsReqIdRespondResponse { ok: boolean; action: unknown; request: unknown; member?: unknown }
export interface PostGoalsIdRequestsReqIdWithdrawResponse { ok: boolean; request: unknown }
export interface PostGoalsIdRequestsRequest { note?: string }
export interface PostGoalsIdRequestsResponse { ok: boolean; request: unknown }
export interface PostGoalsIdScopeRequest { add: string[] }
export interface PostGoalsIdScopeResponse { ok: boolean; goal: unknown }
export interface PostGoalsIdTasksRequest { title: string; description?: string; touches: string[]; est_minutes?: number; priority?: number; kind?: string; discipline?: string; value_summary?: string; parent_task_id?: number }
export interface PostGoalsIdTasksResponse { ok: boolean; task: unknown; goal_id: unknown; parent_task_id: unknown; credits_reward: unknown; requires_rank: unknown }
export interface PostGoalsIdTransferRequest { builder_id?: StringifiableId }
export interface PostGoalsIdTransferResponse { ok: boolean; goal: unknown; changed: boolean }
export interface PostGoalsReorderRequest { version_id: string; ordered_ids: number[] }
export interface PostGoalsReorderResponse { ok: boolean; goals: unknown }
export interface PostGoalsRequest { version_id: string; title: string; description?: string; scope_modules?: string[]; succeeds_goal_id?: number }
export interface PostGoalsResponse { ok: boolean; goal: unknown; succeeds_goal_id: unknown }
export interface PostGovernanceAssignmentsRequest { builder_id: number; role_key: string }
export interface PostGovernanceRolesRequest { role_key: string; label: string; description?: string }
export interface PostGovernanceRolesResponse { role: unknown }
export interface PostInboxIdRatifyRequest { notes_md?: string }
export interface PostInboxRequest { title: string; body_md?: string; kind?: string; suggested_version?: string; suggested_priority?: number }
export interface PostInboxResponse { idea: unknown; open_count: unknown; kind_auto: unknown }
export interface PostLearningsRequest { title: string; body_md: string; tags?: string[]; related_files?: string[]; source?: string; source_ref?: string; task_id?: number }
export interface PostLearningsResponse { skipped?: boolean; reason?: unknown; learning?: unknown }
export interface PostLlmCacheLookupRequest { cache_key?: unknown; tokens_saved_est?: unknown }
export interface PostLlmCacheLookupResponse { hit: boolean; result: unknown }
export interface PostLlmCacheStoreRequest { spec?: unknown; result_stdout?: unknown; result_cost_usd?: unknown }
export interface PostLlmCacheStoreResponse { stored: boolean; result_cost_usd?: unknown }
export interface PostMeAnthropicLinkRequest { anthropic_email: string; anthropic_user_id: string }
export interface PostMeAnthropicLinkResponse { linked: unknown }
export interface PostMemoryBuildersBuilderIdBfgWriteRequest { kind?: string; slug?: string; title?: string; body_md?: string; rationale?: string; karma_delta?: unknown }
export interface PostMemoryBuildersBuilderIdBfgWriteResponse { ok: boolean; builder_id: unknown; path: unknown; kind: unknown; author: unknown; audit_id: unknown; karma_id: unknown; sha256: unknown; byte_len: unknown; updated_at: unknown }
export interface PostMemorySyncRequest { files?: unknown[] }
export interface PostModulesKeyEnableRequest { enabled?: unknown }
export interface PostModulesKeyEnableResponse { ok: boolean; key: unknown; enabled: unknown; note: unknown }
export interface PostModulesKeySubmitRequest { signed_by?: string }
export interface PostModulesKeySubmitResponse { ok: boolean; submission: unknown }
export interface PostMyProjectsClientIdLeaveResponse { ok: boolean; left: unknown }
export interface PostMyProjectsInvitesClientIdAcceptResponse { ok: boolean; accepted: boolean }
export interface PostMyProjectsInvitesClientIdDeclineResponse { ok: boolean; accepted: boolean }
export interface PostMyProjectsJoinRequest { origin: string }
export interface PostMyProjectsJoinResponse { ok: boolean; status: unknown; project: unknown; message: unknown }
export interface PostOverrideRequestsIdDecideRequest { decision: string; note?: string }
export interface PostProjectsInviteRequest { client_id: string; github_login: string }
export interface PostProjectsRequest { origin: string; name: string; tagline?: string; art_url?: string }
export interface PostProjectsResponse { project: unknown }
export interface PostProvisioningInstancesIdForceTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesIdGithubAppRequest { account?: string }
export interface PostProvisioningInstancesIdGithubAppResponse { state: unknown; account: unknown; post_url: unknown; personal_url: unknown; org_url: unknown; org_login: unknown; manifest: unknown; redirect_url: unknown; expires_at: unknown }
export interface PostProvisioningInstancesIdTeardownResponse { ok: boolean; queued: unknown; action: unknown; status: unknown; message: unknown }
export interface PostProvisioningInstancesRequest { slug: string; target_ref?: string; hosting_shape?: string; domain?: string; tier?: string; onboard_mode?: string }
export interface PostSearchMarkRequest { chunk_id?: StringifiableId; useful?: unknown }
export interface PostSearchRequest { expand?: unknown; q?: string; source_kind?: string; limit?: unknown }
export interface PostSearchResponse { expand?: unknown; chunk?: unknown; query?: unknown; count?: unknown; total_full_tokens?: unknown; results?: unknown }
export interface PostSecurityDocsRequest { slug: string; title: string; content_md: string }
export interface PostSecurityDocsResponse { ok: boolean; doc: unknown }
export interface PostSecurityReportsIdConfirmRequest { drachmae_awarded?: unknown }
export interface PostSecurityReportsIdConfirmResponse { report: unknown }
export interface PostSecurityReportsIdDisputeResponse { report: unknown }
export interface PostSecurityReportsIdFixResponse { report: unknown }
export interface PostSecurityReportsIdLinkFixRequest { task_id: StringifiableId }
export interface PostSecurityReportsIdLinkFixResponse { report: unknown }
export interface PostSecurityReportsRequest { target: string; severity: string; title: string; description?: string; repro_steps_md?: string }
export interface PostSecurityReportsResponse { ok: boolean; report: unknown; bounty_table: unknown }
export interface PostSecurityScansRequest { target_url: string; artifact_kind: string; resolved_sha?: string; content_hash?: string; file_count?: number; total_bytes?: number; tier: string; verdict?: string; completion: string; abort_code?: string; findings_critical?: number; findings_high?: number; findings_medium?: number; findings_low?: number; findings_summary?: unknown[]; action_taken?: string; engine_version: string }
export interface PostSecurityScansResponse { ok: boolean; scan: unknown }
export interface PostSessionOptimizeRequest { mode?: string; time_budget_min?: unknown; max_parallel?: unknown }
export interface PostSessionsRequest { session_id: string; task_ids?: number[]; total_tokens?: number; duration_seconds?: number; started_at?: string; ended_at?: string; detail?: unknown[]; metrics?: Record<string, unknown>; model_usage?: Record<string, unknown> }
export interface PostSessionsResponse { skipped?: boolean; reason?: unknown; session?: unknown; token_reward?: unknown }
export interface PostSsoActivityRollupRequest { client_id: string; client_secret: string; github_id: StringifiableId; credits?: number; tasks_shipped?: number; karma?: number; rank?: string; disciplines?: unknown }
export interface PostSsoActivityRollupResponse { ok: boolean }
export interface PostSsoDevicePollRequest { device_code: string }
export interface PostSsoDeviceStartRequest { origin: string }
export interface PostSsoMembershipCheckInRequest { client_id: string; client_secret: string; github_id: StringifiableId; github_login: string; display_name?: string; avatar_url?: string; role?: string }
export interface PostSsoMembershipCheckInResponse { ok: boolean }
export interface PostSsoTokenRequest { client_id: string; client_secret: string; code: string; redirect_uri: string }
export interface PostSsoTokenResponse { github_id: unknown; github_login: unknown; display_name: unknown; avatar_url: unknown }
export interface PostTasksIdAbandonRequest { reason?: string }
export interface PostTasksIdAttestGateRequest { head_sha: string }
export interface PostTasksIdAttestGateResponse { ok: boolean; attested: unknown; reason: unknown }
export interface PostTasksIdConfirmRequest { verified?: unknown }
export interface PostTasksIdCriteriaRequest { criterion_ids?: unknown[]; criterion_id?: StringifiableId }
export interface PostTasksIdCriteriaResponse { ok: boolean; added: unknown; criteria: unknown }
export interface PostTasksIdDemoteResponse { ok: boolean }
export interface PostTasksIdDependenciesRequest { depends_on_task_ids?: unknown[]; depends_on_task_id?: StringifiableId }
export interface PostTasksIdDependenciesResponse { ok: boolean; added: unknown; dependencies: unknown }
export interface PostTasksIdGradeRequest { subagent_output?: unknown; signals?: Record<string, unknown>; committed_files?: string[]; diff_hash?: string }
export interface PostTasksIdOverrideRequestRequest { rationale: string }
export interface PostTasksIdOverrideRequestResponse { ok: boolean; request: unknown }
export interface PostTasksIdPublishBranchRequest { branch: string; head_sha: string; bundle_b64: string; value_summary?: string }
export interface PostTasksIdPublishBranchResponse { ok: boolean; pr_url: unknown; pr_number: unknown; head_sha: unknown; auto_merge: unknown }
export interface PostTasksIdShipResponse { ok: boolean; task: unknown }
export interface PostTasksIdVoteRequest { vote: -1 | 0 | 1 }
export interface PostTasksIdVoteResponse { ok: boolean; task_id: unknown; my_vote: unknown; net_votes: unknown; total_votes: unknown }
export interface PostTasksNewcomerRestockResponse { ok: boolean; stamped: unknown; results: unknown }
export interface PostTasksRequest { version_id: string; title: string; description?: string; status?: string; touches?: string[]; est_minutes?: number; est_cost_usd?: number; manual_degree?: number; priority?: number; automation_tag?: string; credits_reward?: number; source?: string; source_ref?: string; value_summary?: string; kind?: string; discipline?: string; parallel_safe?: unknown; newcomer_friendly?: boolean; security_sensitive?: boolean; requires_rank?: string; auto_detect_touches?: boolean; criterion_ids?: unknown[]; module_key?: string; goal_id?: number }
export interface PostVersionsIdDoneWhenRequest { criterion_id: string; criterion_md: string; goal_id?: number; sort_order?: number }
export interface PostVersionsIdDoneWhenResponse { ok: boolean; criterion: unknown }
export interface PostVersionsRequest { id: string; name: string; status?: string; track?: string; done_when?: string; scope_doc_path?: string; criteria?: unknown[] }
export interface PostVersionsResponse { version: unknown; criteria: unknown }
export interface PutGovernanceRolesRoleKeyPermissionsPermissionKeyResponse { ok: boolean; role_key: unknown; permission_key: unknown; granted: unknown }
export interface PutTasksIdDependenciesRequest { depends_on_task_ids: unknown[] }
export interface PutTasksIdDependenciesResponse { ok: boolean; written: unknown; dependencies: unknown }
export type StringifiableId = number | string;

// The fallback response type: a route whose res.json({…}) shape could not be
// statically proven (a bare value, a spread, a computed key) returns this instead
// of a named <OperationId>Response interface. Assignable both ways; cast at the call site.
export type ApiResponse = any;
export declare class ApiError extends Error { status: number; code?: string; details?: unknown }
export interface ClientOptions { baseUrl?: string; token?: string; credentials?: RequestCredentials; cache?: RequestCache; fetch?: typeof fetch; throwOnError?: boolean }
export interface RequestArgs { query?: Record<string, string | number | boolean | null | undefined>; body?: unknown; headers?: Record<string, string>; cache?: RequestCache; [pathParam: string]: unknown }
// With throwOnError:false every method resolves to this instead of throwing on non-2xx.
export interface Result<T = ApiResponse> { status: number; ok: boolean; data: T }
export interface BongosClient {
  /** Generic escape hatch for a path with no generated method. */
  request(method: string, path: string, opts?: { query?: RequestArgs['query']; body?: unknown; headers?: Record<string, string>; cache?: RequestCache; hasBody?: boolean }): Promise<ApiResponse>;
  "accessRequests": {
    /** GET /access-requests — rank: archon */
    getAccessRequests(args?: RequestArgs): Promise<GetAccessRequestsResponse>;
    /** POST /access-requests — rank: public */
    postAccessRequests(args: RequestArgs & { body: PostAccessRequestsRequest }): Promise<PostAccessRequestsResponse>;
    /** PATCH /access-requests/{id} — rank: archon */
    patchAccessRequestsId(args: RequestArgs & { body: PatchAccessRequestsIdRequest }): Promise<PatchAccessRequestsIdResponse>;
    /** GET /access-requests/status — rank: public */
    getAccessRequestsStatus(args?: RequestArgs): Promise<GetAccessRequestsStatusResponse>;
  };
  "achievements": {
    /** GET /achievements — rank: any-builder */
    getAchievements(args?: RequestArgs): Promise<GetAchievementsResponse>;
  };
  "analytics": {
    /** GET /analytics/builder/{id} — rank: any-builder */
    getAnalyticsBuilderId(args?: RequestArgs): Promise<ApiResponse>;
  };
  "auditLog": {
    /** GET /audit-log — rank: metic+archon */
    getAuditLog(args?: RequestArgs): Promise<GetAuditLogResponse>;
  };
  "auth": {
    /** POST /auth/app-pair/approve — rank: any-builder */
    postAuthAppPairApprove(args: RequestArgs & { body: PostAuthAppPairApproveRequest }): Promise<PostAuthAppPairApproveResponse>;
    /** GET /auth/app-pair/info — rank: any-builder */
    getAuthAppPairInfo(args?: RequestArgs): Promise<GetAuthAppPairInfoResponse>;
    /** POST /auth/app-pair/poll — rank: public */
    postAuthAppPairPoll(args: RequestArgs & { body: PostAuthAppPairPollRequest }): Promise<ApiResponse>;
    /** POST /auth/app-pair/start — rank: public */
    postAuthAppPairStart(args?: RequestArgs & { body?: PostAuthAppPairStartRequest }): Promise<PostAuthAppPairStartResponse>;
    /** POST /auth/backchannel-logout — rank: public */
    postAuthBackchannelLogout(args: RequestArgs & { body: PostAuthBackchannelLogoutRequest }): Promise<PostAuthBackchannelLogoutResponse>;
    /** POST /auth/cli-token/issue — rank: any-builder */
    postAuthCliTokenIssue(args?: RequestArgs): Promise<PostAuthCliTokenIssueResponse>;
    /** POST /auth/device/exchange — rank: public */
    postAuthDeviceExchange(args: RequestArgs & { body: PostAuthDeviceExchangeRequest }): Promise<PostAuthDeviceExchangeResponse>;
    /** POST /auth/device/poll — rank: public */
    postAuthDevicePoll(args: RequestArgs & { body: PostAuthDevicePollRequest }): Promise<ApiResponse>;
    /** POST /auth/device/start — rank: public */
    postAuthDeviceStart(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/discord/callback — rank: any-builder */
    getAuthDiscordCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/discord/start — rank: any-builder */
    getAuthDiscordStart(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /auth/discord/unlink — rank: any-builder */
    postAuthDiscordUnlink(args?: RequestArgs): Promise<PostAuthDiscordUnlinkResponse>;
    /** POST /auth/logout — rank: any-builder */
    postAuthLogout(args?: RequestArgs): Promise<PostAuthLogoutResponse>;
    /** POST /auth/revoke — rank: archon */
    postAuthRevoke(args?: RequestArgs & { body?: PostAuthRevokeRequest }): Promise<PostAuthRevokeResponse>;
    /** POST /auth/revoke-all — rank: archon */
    postAuthRevokeAll(args?: RequestArgs & { body?: PostAuthRevokeAllRequest }): Promise<PostAuthRevokeAllResponse>;
    /** GET /auth/web/admission-status — rank: public */
    getAuthWebAdmissionStatus(args?: RequestArgs): Promise<GetAuthWebAdmissionStatusResponse>;
    /** GET /auth/web/callback — rank: public */
    getAuthWebCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /auth/web/start — rank: public */
    getAuthWebStart(args?: RequestArgs): Promise<ApiResponse>;
  };
  "autonomy": {
    /** GET /autonomy/precheck — rank: metic+archon */
    getAutonomyPrecheck(args?: RequestArgs): Promise<ApiResponse>;
  };
  "backup": {
    /** GET /backup/status — rank: metic+archon */
    getBackupStatus(args?: RequestArgs): Promise<GetBackupStatusResponse>;
    /** POST /backup/trigger — rank: metic+archon */
    postBackupTrigger(args?: RequestArgs): Promise<PostBackupTriggerResponse>;
  };
  "blockers": {
    /** GET /blockers — rank: public */
    getBlockers(args?: RequestArgs): Promise<GetBlockersResponse>;
    /** POST /blockers — rank: any-builder */
    postBlockers(args: RequestArgs & { body: PostBlockersRequest }): Promise<PostBlockersResponse>;
    /** GET /blockers/{id} — rank: any-builder */
    getBlockersId(args?: RequestArgs): Promise<GetBlockersIdResponse>;
    /** POST /blockers/{id}/link — rank: metic+archon */
    postBlockersIdLink(args: RequestArgs & { body: PostBlockersIdLinkRequest }): Promise<PostBlockersIdLinkResponse>;
    /** POST /blockers/{id}/resolve — rank: metic+archon */
    postBlockersIdResolve(args?: RequestArgs & { body?: PostBlockersIdResolveRequest }): Promise<ApiResponse>;
  };
  "box": {
    /** GET /box/authorized-keys — rank: any-builder */
    getBoxAuthorizedKeys(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /box/close — rank: any-builder */
    postBoxClose(args?: RequestArgs): Promise<PostBoxCloseResponse>;
    /** GET /box/connect — rank: public */
    getBoxConnect(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /box/connect.ps1 — rank: public */
    getBoxConnectPs1(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /box/connect.sh — rank: public */
    getBoxConnectSh(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /box/ensure — rank: any-builder */
    postBoxEnsure(args?: RequestArgs): Promise<PostBoxEnsureResponse>;
    /** POST /box/heartbeat — rank: any-builder */
    postBoxHeartbeat(args?: RequestArgs & { body?: PostBoxHeartbeatRequest }): Promise<PostBoxHeartbeatResponse>;
    /** POST /box/host-keys — rank: any-builder */
    postBoxHostKeys(args: RequestArgs & { body: PostBoxHostKeysRequest }): Promise<PostBoxHostKeysResponse>;
    /** GET /box/managed-settings — rank: any-builder */
    getBoxManagedSettings(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /box/me — rank: any-builder */
    getBoxMe(args?: RequestArgs): Promise<GetBoxMeResponse>;
    /** GET /box/scope — rank: any-builder */
    getBoxScope(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /box/source-access — rank: any-builder */
    getBoxSourceAccess(args?: RequestArgs): Promise<GetBoxSourceAccessResponse>;
    /** GET /box/ssh-key — rank: any-builder */
    getBoxSshKey(args?: RequestArgs): Promise<GetBoxSshKeyResponse>;
    /** POST /box/ssh-key — rank: any-builder */
    postBoxSshKey(args: RequestArgs & { body: PostBoxSshKeyRequest }): Promise<PostBoxSshKeyResponse>;
    /** DELETE /box/ssh-key/{id} — rank: any-builder */
    deleteBoxSshKeyId(args?: RequestArgs): Promise<DeleteBoxSshKeyIdResponse>;
    /** GET /box/terminal — rank: any-builder */
    getBoxTerminal(args?: RequestArgs): Promise<GetBoxTerminalResponse>;
    /** POST /box/terminal — rank: any-builder */
    postBoxTerminal(args: RequestArgs & { body: PostBoxTerminalRequest }): Promise<PostBoxTerminalResponse>;
    /** POST /box/version — rank: any-builder */
    postBoxVersion(args: RequestArgs & { body: PostBoxVersionRequest }): Promise<PostBoxVersionResponse>;
  };
  "boxes": {
    /** GET /boxes — rank: metic+archon */
    getBoxes(args?: RequestArgs): Promise<GetBoxesResponse>;
    /** PATCH /boxes/{builderId}/block — rank: metic+archon */
    patchBoxesBuilderIdBlock(args: RequestArgs & { body: PatchBoxesBuilderIdBlockRequest }): Promise<PatchBoxesBuilderIdBlockResponse>;
    /** POST /boxes/{builderId}/close — rank: metic+archon */
    postBoxesBuilderIdClose(args?: RequestArgs): Promise<PostBoxesBuilderIdCloseResponse>;
    /** GET /boxes/cost-ledger — rank: metic+archon */
    getBoxesCostLedger(args?: RequestArgs): Promise<ApiResponse>;
  };
  "bugAttachments": {
    /** GET /bug-attachments/{name} — rank: any-builder */
    getBugAttachmentsName(args?: RequestArgs): Promise<ApiResponse>;
  };
  "builders": {
    /** GET /builders/{id}/active-claims — rank: metic+archon */
    getBuildersIdActiveClaims(args?: RequestArgs): Promise<GetBuildersIdActiveClaimsResponse>;
    /** PATCH /builders/{id}/budget — rank: metic+archon */
    patchBuildersIdBudget(args?: RequestArgs & { body?: PatchBuildersIdBudgetRequest }): Promise<PatchBuildersIdBudgetResponse>;
    /** GET /builders/{id}/onboarding — rank: public */
    getBuildersIdOnboarding(args?: RequestArgs): Promise<GetBuildersIdOnboardingResponse>;
    /** GET /builders/{id}/profile — rank: public */
    getBuildersIdProfile(args?: RequestArgs): Promise<GetBuildersIdProfileResponse>;
    /** PATCH /builders/{id}/rank — rank: archon */
    patchBuildersIdRank(args: RequestArgs & { body: PatchBuildersIdRankRequest }): Promise<PatchBuildersIdRankResponse>;
    /** PATCH /builders/{id}/status — rank: archon */
    patchBuildersIdStatus(args: RequestArgs & { body: PatchBuildersIdStatusRequest }): Promise<ApiResponse>;
    /** GET /builders/directory — rank: any-builder */
    getBuildersDirectory(args?: RequestArgs): Promise<GetBuildersDirectoryResponse>;
    /** GET /builders/me/pending-rank-change — rank: any-builder */
    getBuildersMePendingRankChange(args?: RequestArgs): Promise<GetBuildersMePendingRankChangeResponse>;
    /** GET /builders/roster — rank: metic+archon */
    getBuildersRoster(args?: RequestArgs): Promise<GetBuildersRosterResponse>;
  };
  "claims": {
    /** POST /claims — rank: any-builder */
    postClaims(args: RequestArgs & { body: PostClaimsRequest }): Promise<PostClaimsResponse>;
    /** POST /claims/{id}/release-on-behalf — rank: metic+archon */
    postClaimsIdReleaseOnBehalf(args: RequestArgs & { body: PostClaimsIdReleaseOnBehalfRequest }): Promise<ApiResponse>;
    /** POST /claims/{id}/resolve — rank: any-builder */
    postClaimsIdResolve(args: RequestArgs & { body: PostClaimsIdResolveRequest }): Promise<ApiResponse>;
    /** POST /claims/batch — rank: any-builder */
    postClaimsBatch(args: RequestArgs & { body: PostClaimsBatchRequest }): Promise<PostClaimsBatchResponse>;
    /** POST /claims/batch/release — rank: any-builder */
    postClaimsBatchRelease(args: RequestArgs & { body: PostClaimsBatchReleaseRequest }): Promise<PostClaimsBatchReleaseResponse>;
    /** POST /claims/batch/validate — rank: any-builder */
    postClaimsBatchValidate(args: RequestArgs & { body: PostClaimsBatchValidateRequest }): Promise<ApiResponse>;
  };
  "cost": {
    /** POST /cost — rank: any-builder */
    postCost(args: RequestArgs & { body: PostCostRequest }): Promise<PostCostResponse>;
  };
  "dependencies": {
    /** DELETE /dependencies — rank: archon */
    deleteDependencies(args?: RequestArgs): Promise<DeleteDependenciesResponse>;
    /** POST /dependencies — rank: archon */
    postDependencies(args?: RequestArgs): Promise<PostDependenciesResponse>;
  };
  "discord": {
    /** GET /discord/channels/plan — rank: metic+archon */
    getDiscordChannelsPlan(args?: RequestArgs): Promise<GetDiscordChannelsPlanResponse>;
    /** POST /discord/channels/reconcile — rank: metic+archon */
    postDiscordChannelsReconcile(args?: RequestArgs): Promise<PostDiscordChannelsReconcileResponse>;
  };
  "doneWhen": {
    /** POST /done-when/{criterionId}/satisfy — rank: metic+archon */
    postDoneWhenCriterionIdSatisfy(args?: RequestArgs & { body?: PostDoneWhenCriterionIdSatisfyRequest }): Promise<PostDoneWhenCriterionIdSatisfyResponse>;
    /** POST /done-when/{criterionId}/unsatisfy — rank: metic+archon */
    postDoneWhenCriterionIdUnsatisfy(args?: RequestArgs): Promise<PostDoneWhenCriterionIdUnsatisfyResponse>;
    /** GET /done-when/pending-review — rank: metic+archon */
    getDoneWhenPendingReview(args?: RequestArgs): Promise<GetDoneWhenPendingReviewResponse>;
  };
  "gateApprovals": {
    /** GET /gate-approvals — rank: metic+archon */
    getGateApprovals(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /gate-approvals/{pr}/approve — rank: archon */
    postGateApprovalsPrApprove(args?: RequestArgs): Promise<PostGateApprovalsPrApproveResponse>;
  };
  "github": {
    /** GET /github/repos — rank: any-builder */
    getGithubRepos(args?: RequestArgs): Promise<GetGithubReposResponse>;
    /** POST /github/repos — rank: any-builder */
    postGithubRepos(args: RequestArgs & { body: PostGithubReposRequest }): Promise<PostGithubReposResponse>;
  };
  "goals": {
    /** GET /goals — rank: any-builder */
    getGoals(args?: RequestArgs): Promise<GetGoalsResponse>;
    /** POST /goals — rank: metic+archon */
    postGoals(args: RequestArgs & { body: PostGoalsRequest }): Promise<PostGoalsResponse>;
    /** GET /goals/{id} — rank: any-builder */
    getGoalsId(args?: RequestArgs): Promise<GetGoalsIdResponse>;
    /** POST /goals/{id}/archive — rank: metic+archon */
    postGoalsIdArchive(args?: RequestArgs): Promise<PostGoalsIdArchiveResponse>;
    /** GET /goals/{id}/conflicts — rank: any-builder */
    getGoalsIdConflicts(args?: RequestArgs): Promise<GetGoalsIdConflictsResponse>;
    /** POST /goals/{id}/conflicts/resolve — rank: any-builder */
    postGoalsIdConflictsResolve(args: RequestArgs & { body: PostGoalsIdConflictsResolveRequest }): Promise<PostGoalsIdConflictsResolveResponse>;
    /** POST /goals/{id}/invitations — rank: any-builder */
    postGoalsIdInvitations(args?: RequestArgs & { body?: PostGoalsIdInvitationsRequest }): Promise<PostGoalsIdInvitationsResponse>;
    /** POST /goals/{id}/invitations/{reqId}/respond — rank: any-builder */
    postGoalsIdInvitationsReqIdRespond(args: RequestArgs & { body: PostGoalsIdInvitationsReqIdRespondRequest }): Promise<PostGoalsIdInvitationsReqIdRespondResponse>;
    /** POST /goals/{id}/join — rank: any-builder */
    postGoalsIdJoin(args?: RequestArgs): Promise<PostGoalsIdJoinResponse>;
    /** POST /goals/{id}/leave — rank: any-builder */
    postGoalsIdLeave(args?: RequestArgs): Promise<PostGoalsIdLeaveResponse>;
    /** POST /goals/{id}/members — rank: any-builder */
    postGoalsIdMembers(args?: RequestArgs & { body?: PostGoalsIdMembersRequest }): Promise<PostGoalsIdMembersResponse>;
    /** PATCH /goals/{id}/members/{builderId} — rank: any-builder */
    patchGoalsIdMembersBuilderId(args: RequestArgs & { body: PatchGoalsIdMembersBuilderIdRequest }): Promise<PatchGoalsIdMembersBuilderIdResponse>;
    /** POST /goals/{id}/reopen — rank: metic+archon */
    postGoalsIdReopen(args?: RequestArgs): Promise<PostGoalsIdReopenResponse>;
    /** GET /goals/{id}/requests — rank: any-builder */
    getGoalsIdRequests(args?: RequestArgs): Promise<GetGoalsIdRequestsResponse>;
    /** POST /goals/{id}/requests — rank: any-builder */
    postGoalsIdRequests(args?: RequestArgs & { body?: PostGoalsIdRequestsRequest }): Promise<PostGoalsIdRequestsResponse>;
    /** POST /goals/{id}/requests/{reqId}/respond — rank: any-builder */
    postGoalsIdRequestsReqIdRespond(args: RequestArgs & { body: PostGoalsIdRequestsReqIdRespondRequest }): Promise<PostGoalsIdRequestsReqIdRespondResponse>;
    /** POST /goals/{id}/requests/{reqId}/withdraw — rank: any-builder */
    postGoalsIdRequestsReqIdWithdraw(args?: RequestArgs): Promise<PostGoalsIdRequestsReqIdWithdrawResponse>;
    /** POST /goals/{id}/scope — rank: metic+archon */
    postGoalsIdScope(args: RequestArgs & { body: PostGoalsIdScopeRequest }): Promise<PostGoalsIdScopeResponse>;
    /** GET /goals/{id}/suggest-criteria — rank: any-builder */
    getGoalsIdSuggestCriteria(args?: RequestArgs): Promise<GetGoalsIdSuggestCriteriaResponse>;
    /** POST /goals/{id}/tasks — rank: any-builder */
    postGoalsIdTasks(args: RequestArgs & { body: PostGoalsIdTasksRequest }): Promise<PostGoalsIdTasksResponse>;
    /** POST /goals/{id}/transfer — rank: any-builder */
    postGoalsIdTransfer(args?: RequestArgs & { body?: PostGoalsIdTransferRequest }): Promise<PostGoalsIdTransferResponse>;
    /** PATCH /goals/{id}/visibility — rank: any-builder */
    patchGoalsIdVisibility(args: RequestArgs & { body: PatchGoalsIdVisibilityRequest }): Promise<PatchGoalsIdVisibilityResponse>;
    /** GET /goals/inbox — rank: any-builder */
    getGoalsInbox(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /goals/reorder — rank: metic+archon */
    postGoalsReorder(args: RequestArgs & { body: PostGoalsReorderRequest }): Promise<PostGoalsReorderResponse>;
  };
  "governance": {
    /** GET /governance/assignments — rank: archon */
    getGovernanceAssignments(args?: RequestArgs): Promise<GetGovernanceAssignmentsResponse>;
    /** POST /governance/assignments — rank: archon */
    postGovernanceAssignments(args: RequestArgs & { body: PostGovernanceAssignmentsRequest }): Promise<ApiResponse>;
    /** DELETE /governance/assignments/{builderId}/{roleKey} — rank: archon */
    deleteGovernanceAssignmentsBuilderIdRoleKey(args?: RequestArgs): Promise<DeleteGovernanceAssignmentsBuilderIdRoleKeyResponse>;
    /** GET /governance/permissions — rank: archon */
    getGovernancePermissions(args?: RequestArgs): Promise<GetGovernancePermissionsResponse>;
    /** GET /governance/roles — rank: archon */
    getGovernanceRoles(args?: RequestArgs): Promise<GetGovernanceRolesResponse>;
    /** POST /governance/roles — rank: archon */
    postGovernanceRoles(args: RequestArgs & { body: PostGovernanceRolesRequest }): Promise<PostGovernanceRolesResponse>;
    /** DELETE /governance/roles/{roleKey}/permissions/{permissionKey} — rank: archon */
    deleteGovernanceRolesRoleKeyPermissionsPermissionKey(args?: RequestArgs): Promise<DeleteGovernanceRolesRoleKeyPermissionsPermissionKeyResponse>;
    /** PUT /governance/roles/{roleKey}/permissions/{permissionKey} — rank: archon */
    putGovernanceRolesRoleKeyPermissionsPermissionKey(args?: RequestArgs): Promise<PutGovernanceRolesRoleKeyPermissionsPermissionKeyResponse>;
  };
  "grades": {
    /** GET /grades/by-builder — rank: metic+archon */
    getGradesByBuilder(args?: RequestArgs): Promise<GetGradesByBuilderResponse>;
  };
  "healthz": {
    /** GET /healthz — rank: public */
    getHealthz(args?: RequestArgs): Promise<GetHealthzResponse>;
  };
  "inbox": {
    /** GET /inbox — rank: any-builder */
    getInbox(args?: RequestArgs): Promise<GetInboxResponse>;
    /** POST /inbox — rank: any-builder */
    postInbox(args: RequestArgs & { body: PostInboxRequest }): Promise<PostInboxResponse>;
    /** GET /inbox/{id} — rank: any-builder */
    getInboxId(args?: RequestArgs): Promise<GetInboxIdResponse>;
    /** PATCH /inbox/{id} — rank: metic+archon */
    patchInboxId(args?: RequestArgs & { body?: PatchInboxIdRequest }): Promise<PatchInboxIdResponse>;
    /** POST /inbox/{id}/ratify — rank: metic+archon */
    postInboxIdRatify(args?: RequestArgs & { body?: PostInboxIdRatifyRequest }): Promise<ApiResponse>;
  };
  "instance": {
    /** GET /instance — rank: public */
    getInstance(args?: RequestArgs): Promise<ApiResponse>;
  };
  "leaderboard": {
    /** GET /leaderboard — rank: public */
    getLeaderboard(args?: RequestArgs): Promise<GetLeaderboardResponse>;
  };
  "learnings": {
    /** GET /learnings — rank: any-builder */
    getLearnings(args?: RequestArgs): Promise<GetLearningsResponse>;
    /** POST /learnings — rank: any-builder */
    postLearnings(args: RequestArgs & { body: PostLearningsRequest }): Promise<PostLearningsResponse>;
  };
  "live": {
    /** GET /live — rank: any-builder */
    getLive(args?: RequestArgs): Promise<ApiResponse>;
  };
  "llmCache": {
    /** POST /llm-cache/lookup — rank: metic+archon */
    postLlmCacheLookup(args?: RequestArgs & { body?: PostLlmCacheLookupRequest }): Promise<PostLlmCacheLookupResponse>;
    /** POST /llm-cache/store — rank: metic+archon */
    postLlmCacheStore(args?: RequestArgs & { body?: PostLlmCacheStoreRequest }): Promise<PostLlmCacheStoreResponse>;
  };
  "me": {
    /** GET /me — rank: any-builder */
    getMe(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/achievements — rank: any-builder */
    getMeAchievements(args?: RequestArgs): Promise<GetMeAchievementsResponse>;
    /** POST /me/anthropic-link — rank: any-builder */
    postMeAnthropicLink(args: RequestArgs & { body: PostMeAnthropicLinkRequest }): Promise<PostMeAnthropicLinkResponse>;
    /** PATCH /me/disciplines — rank: any-builder */
    patchMeDisciplines(args: RequestArgs & { body: PatchMeDisciplinesRequest }): Promise<PatchMeDisciplinesResponse>;
    /** GET /me/display-name — rank: any-builder */
    getMeDisplayName(args?: RequestArgs): Promise<GetMeDisplayNameResponse>;
    /** PATCH /me/display-name — rank: any-builder */
    patchMeDisplayName(args?: RequestArgs): Promise<PatchMeDisplayNameResponse>;
    /** GET /me/event-sound-prefs — rank: any-builder */
    getMeEventSoundPrefs(args?: RequestArgs): Promise<GetMeEventSoundPrefsResponse>;
    /** PATCH /me/event-sound-prefs — rank: any-builder */
    patchMeEventSoundPrefs(args?: RequestArgs): Promise<PatchMeEventSoundPrefsResponse>;
    /** GET /me/interaction — rank: any-builder */
    getMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/interaction — rank: any-builder */
    patchMeInteraction(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/model-allocation — rank: any-builder */
    getMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/model-allocation — rank: any-builder */
    patchMeModelAllocation(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/recent-ships — rank: any-builder */
    getMeRecentShips(args?: RequestArgs): Promise<GetMeRecentShipsResponse>;
    /** GET /me/render — rank: any-builder */
    getMeRender(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/render — rank: any-builder */
    patchMeRender(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /me/skill-prefs — rank: any-builder */
    getMeSkillPrefs(args?: RequestArgs): Promise<GetMeSkillPrefsResponse>;
    /** PATCH /me/skill-prefs — rank: any-builder */
    patchMeSkillPrefs(args?: RequestArgs): Promise<PatchMeSkillPrefsResponse>;
    /** GET /me/sound-prefs — rank: any-builder */
    getMeSoundPrefs(args?: RequestArgs): Promise<GetMeSoundPrefsResponse>;
    /** PATCH /me/sound-prefs — rank: any-builder */
    patchMeSoundPrefs(args?: RequestArgs): Promise<PatchMeSoundPrefsResponse>;
    /** GET /me/wandering — rank: any-builder */
    getMeWandering(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /me/wandering — rank: any-builder */
    patchMeWandering(args?: RequestArgs): Promise<ApiResponse>;
  };
  "memory": {
    /** GET /memory/bfg/builders/{builderId}/file — rank: bfg-principal */
    getMemoryBfgBuildersBuilderIdFile(args?: RequestArgs): Promise<GetMemoryBfgBuildersBuilderIdFileResponse>;
    /** GET /memory/bfg/builders/{builderId}/files — rank: bfg-principal */
    getMemoryBfgBuildersBuilderIdFiles(args?: RequestArgs): Promise<GetMemoryBfgBuildersBuilderIdFilesResponse>;
    /** POST /memory/builders/{builderId}/bfg-write — rank: bfg-principal */
    postMemoryBuildersBuilderIdBfgWrite(args?: RequestArgs & { body?: PostMemoryBuildersBuilderIdBfgWriteRequest }): Promise<PostMemoryBuildersBuilderIdBfgWriteResponse>;
    /** GET /memory/builders/{builderId}/file — rank: metic+archon */
    getMemoryBuildersBuilderIdFile(args?: RequestArgs): Promise<GetMemoryBuildersBuilderIdFileResponse>;
    /** GET /memory/builders/{builderId}/files — rank: metic+archon */
    getMemoryBuildersBuilderIdFiles(args?: RequestArgs): Promise<GetMemoryBuildersBuilderIdFilesResponse>;
    /** DELETE /memory/file — rank: any-builder */
    deleteMemoryFile(args?: RequestArgs): Promise<DeleteMemoryFileResponse>;
    /** GET /memory/file — rank: any-builder */
    getMemoryFile(args?: RequestArgs): Promise<GetMemoryFileResponse>;
    /** GET /memory/files — rank: any-builder */
    getMemoryFiles(args?: RequestArgs): Promise<GetMemoryFilesResponse>;
    /** POST /memory/sync — rank: any-builder */
    postMemorySync(args?: RequestArgs & { body?: PostMemorySyncRequest }): Promise<ApiResponse>;
  };
  "modules": {
    /** GET /modules — rank: any-builder */
    getModules(args?: RequestArgs): Promise<GetModulesResponse>;
    /** POST /modules/{key}/enable — rank: metic+archon */
    postModulesKeyEnable(args?: RequestArgs & { body?: PostModulesKeyEnableRequest }): Promise<PostModulesKeyEnableResponse>;
    /** POST /modules/{key}/submit — rank: metic+archon */
    postModulesKeySubmit(args?: RequestArgs & { body?: PostModulesKeySubmitRequest }): Promise<PostModulesKeySubmitResponse>;
    /** GET /modules/submissions — rank: metic+archon */
    getModulesSubmissions(args?: RequestArgs): Promise<GetModulesSubmissionsResponse>;
  };
  "myProjects": {
    /** GET /my-projects — rank: any-builder */
    getMyProjects(args?: RequestArgs): Promise<GetMyProjectsResponse>;
    /** POST /my-projects/{clientId}/leave — rank: any-builder */
    postMyProjectsClientIdLeave(args?: RequestArgs): Promise<PostMyProjectsClientIdLeaveResponse>;
    /** GET /my-projects/invites — rank: any-builder */
    getMyProjectsInvites(args?: RequestArgs): Promise<GetMyProjectsInvitesResponse>;
    /** POST /my-projects/invites/{clientId}/accept — rank: any-builder */
    postMyProjectsInvitesClientIdAccept(args?: RequestArgs): Promise<PostMyProjectsInvitesClientIdAcceptResponse>;
    /** POST /my-projects/invites/{clientId}/decline — rank: any-builder */
    postMyProjectsInvitesClientIdDecline(args?: RequestArgs): Promise<PostMyProjectsInvitesClientIdDeclineResponse>;
    /** POST /my-projects/join — rank: any-builder */
    postMyProjectsJoin(args: RequestArgs & { body: PostMyProjectsJoinRequest }): Promise<PostMyProjectsJoinResponse>;
  };
  "overrideRequests": {
    /** GET /override-requests — rank: metic+archon */
    getOverrideRequests(args?: RequestArgs): Promise<GetOverrideRequestsResponse>;
    /** POST /override-requests/{id}/decide — rank: metic+archon */
    postOverrideRequestsIdDecide(args: RequestArgs & { body: PostOverrideRequestsIdDecideRequest }): Promise<ApiResponse>;
  };
  "projects": {
    /** GET /projects — rank: metic+archon */
    getProjects(args?: RequestArgs): Promise<GetProjectsResponse>;
    /** POST /projects — rank: metic+archon */
    postProjects(args: RequestArgs & { body: PostProjectsRequest }): Promise<PostProjectsResponse>;
    /** PATCH /projects/{id}/featured — rank: metic+archon */
    patchProjectsIdFeatured(args: RequestArgs & { body: PatchProjectsIdFeaturedRequest }): Promise<PatchProjectsIdFeaturedResponse>;
    /** GET /projects/featured — rank: public */
    getProjectsFeatured(args?: RequestArgs): Promise<GetProjectsFeaturedResponse>;
    /** POST /projects/invite — rank: metic+archon */
    postProjectsInvite(args: RequestArgs & { body: PostProjectsInviteRequest }): Promise<ApiResponse>;
  };
  "provisioning": {
    /** GET /provisioning/fleet — rank: metic+archon */
    getProvisioningFleet(args?: RequestArgs): Promise<GetProvisioningFleetResponse>;
    /** GET /provisioning/fleet/cost-ledger — rank: metic+archon */
    getProvisioningFleetCostLedger(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/callback — rank: public */
    getProvisioningGithubAppCallback(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /provisioning/github-app/status — rank: public */
    getProvisioningGithubAppStatus(args?: RequestArgs): Promise<GetProvisioningGithubAppStatusResponse>;
    /** GET /provisioning/health — rank: public */
    getProvisioningHealth(args?: RequestArgs): Promise<GetProvisioningHealthResponse>;
    /** GET /provisioning/instances — rank: any-builder */
    getProvisioningInstances(args?: RequestArgs): Promise<GetProvisioningInstancesResponse>;
    /** POST /provisioning/instances — rank: any-builder */
    postProvisioningInstances(args: RequestArgs & { body: PostProvisioningInstancesRequest }): Promise<ApiResponse>;
    /** GET /provisioning/instances/{id} — rank: any-builder */
    getProvisioningInstancesId(args?: RequestArgs): Promise<GetProvisioningInstancesIdResponse>;
    /** POST /provisioning/instances/{id}/force-teardown — rank: metic+archon */
    postProvisioningInstancesIdForceTeardown(args?: RequestArgs): Promise<PostProvisioningInstancesIdForceTeardownResponse>;
    /** POST /provisioning/instances/{id}/github-app — rank: any-builder */
    postProvisioningInstancesIdGithubApp(args?: RequestArgs & { body?: PostProvisioningInstancesIdGithubAppRequest }): Promise<PostProvisioningInstancesIdGithubAppResponse>;
    /** POST /provisioning/instances/{id}/teardown — rank: any-builder */
    postProvisioningInstancesIdTeardown(args?: RequestArgs): Promise<PostProvisioningInstancesIdTeardownResponse>;
    /** GET /provisioning/onboard-plan — rank: public */
    getProvisioningOnboardPlan(args?: RequestArgs): Promise<GetProvisioningOnboardPlanResponse>;
    /** GET /provisioning/tls-check — rank: public */
    getProvisioningTlsCheck(args?: RequestArgs): Promise<ApiResponse>;
  };
  "public": {
    /** GET /public/analytics/ecosystem — rank: public */
    getPublicAnalyticsEcosystem(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/blockers/{id} — rank: public */
    getPublicBlockersId(args?: RequestArgs): Promise<GetPublicBlockersIdResponse>;
    /** GET /public/bounty-table — rank: public */
    getPublicBountyTable(args?: RequestArgs): Promise<GetPublicBountyTableResponse>;
    /** GET /public/branding — rank: public */
    getPublicBranding(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/cost-summary — rank: public */
    getPublicCostSummary(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/estimation-drift — rank: public */
    getPublicEstimationDrift(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/grades — rank: public */
    getPublicGrades(args?: RequestArgs): Promise<GetPublicGradesResponse>;
    /** GET /public/ideas/{id} — rank: public */
    getPublicIdeasId(args?: RequestArgs): Promise<GetPublicIdeasIdResponse>;
    /** GET /public/leaderboard — rank: public */
    getPublicLeaderboard(args?: RequestArgs): Promise<GetPublicLeaderboardResponse>;
    /** GET /public/modules — rank: public */
    getPublicModules(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /public/progress — rank: public */
    getPublicProgress(args?: RequestArgs): Promise<GetPublicProgressResponse>;
    /** GET /public/recent-shipped — rank: public */
    getPublicRecentShipped(args?: RequestArgs): Promise<GetPublicRecentShippedResponse>;
    /** GET /public/ref-ids — rank: public */
    getPublicRefIds(args?: RequestArgs): Promise<GetPublicRefIdsResponse>;
    /** GET /public/repo-health — rank: public */
    getPublicRepoHealth(args?: RequestArgs): Promise<GetPublicRepoHealthResponse>;
    /** GET /public/repo-info — rank: public */
    getPublicRepoInfo(args?: RequestArgs): Promise<GetPublicRepoInfoResponse>;
    /** GET /public/tasks/{id} — rank: public */
    getPublicTasksId(args?: RequestArgs): Promise<GetPublicTasksIdResponse>;
    /** GET /public/uptime — rank: public */
    getPublicUptime(args?: RequestArgs): Promise<GetPublicUptimeResponse>;
    /** GET /public/versions — rank: public */
    getPublicVersions(args?: RequestArgs): Promise<GetPublicVersionsResponse>;
  };
  "scouting": {
    /** GET /scouting — rank: metic+archon */
    getScouting(args?: RequestArgs): Promise<GetScoutingResponse>;
  };
  "search": {
    /** POST /search — rank: any-builder */
    postSearch(args?: RequestArgs & { body?: PostSearchRequest }): Promise<PostSearchResponse>;
    /** POST /search/mark — rank: any-builder */
    postSearchMark(args?: RequestArgs & { body?: PostSearchMarkRequest }): Promise<ApiResponse>;
  };
  "security": {
    /** GET /security/adr — rank: metic+archon */
    getSecurityAdr(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /security/docs — rank: metic+archon */
    getSecurityDocs(args?: RequestArgs): Promise<GetSecurityDocsResponse>;
    /** POST /security/docs — rank: metic+archon */
    postSecurityDocs(args: RequestArgs & { body: PostSecurityDocsRequest }): Promise<PostSecurityDocsResponse>;
    /** GET /security/docs/{slug} — rank: metic+archon */
    getSecurityDocsSlug(args?: RequestArgs): Promise<GetSecurityDocsSlugResponse>;
    /** GET /security/reports — rank: metic+archon */
    getSecurityReports(args?: RequestArgs): Promise<GetSecurityReportsResponse>;
    /** POST /security/reports — rank: metic+archon */
    postSecurityReports(args: RequestArgs & { body: PostSecurityReportsRequest }): Promise<PostSecurityReportsResponse>;
    /** POST /security/reports/{id}/confirm — rank: metic+archon */
    postSecurityReportsIdConfirm(args?: RequestArgs & { body?: PostSecurityReportsIdConfirmRequest }): Promise<PostSecurityReportsIdConfirmResponse>;
    /** POST /security/reports/{id}/dispute — rank: metic+archon */
    postSecurityReportsIdDispute(args?: RequestArgs): Promise<PostSecurityReportsIdDisputeResponse>;
    /** POST /security/reports/{id}/fix — rank: metic+archon */
    postSecurityReportsIdFix(args?: RequestArgs): Promise<PostSecurityReportsIdFixResponse>;
    /** POST /security/reports/{id}/link-fix — rank: metic+archon */
    postSecurityReportsIdLinkFix(args: RequestArgs & { body: PostSecurityReportsIdLinkFixRequest }): Promise<PostSecurityReportsIdLinkFixResponse>;
    /** GET /security/scans — rank: any-builder */
    getSecurityScans(args?: RequestArgs): Promise<GetSecurityScansResponse>;
    /** POST /security/scans — rank: metic+archon */
    postSecurityScans(args: RequestArgs & { body: PostSecurityScansRequest }): Promise<PostSecurityScansResponse>;
  };
  "session": {
    /** POST /session/optimize — rank: any-builder */
    postSessionOptimize(args?: RequestArgs & { body?: PostSessionOptimizeRequest }): Promise<ApiResponse>;
  };
  "sessions": {
    /** POST /sessions — rank: any-builder */
    postSessions(args: RequestArgs & { body: PostSessionsRequest }): Promise<PostSessionsResponse>;
    /** GET /sessions/{id} — rank: any-builder */
    getSessionsId(args?: RequestArgs): Promise<GetSessionsIdResponse>;
    /** GET /sessions/mine — rank: any-builder */
    getSessionsMine(args?: RequestArgs): Promise<GetSessionsMineResponse>;
    /** GET /sessions/search — rank: metic+archon */
    getSessionsSearch(args?: RequestArgs): Promise<GetSessionsSearchResponse>;
  };
  "sso": {
    /** POST /sso/activity/rollup — rank: public */
    postSsoActivityRollup(args: RequestArgs & { body: PostSsoActivityRollupRequest }): Promise<PostSsoActivityRollupResponse>;
    /** GET /sso/authorize — rank: public */
    getSsoAuthorize(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /sso/device/poll — rank: public */
    postSsoDevicePoll(args: RequestArgs & { body: PostSsoDevicePollRequest }): Promise<ApiResponse>;
    /** POST /sso/device/start — rank: public */
    postSsoDeviceStart(args: RequestArgs & { body: PostSsoDeviceStartRequest }): Promise<ApiResponse>;
    /** POST /sso/membership/check-in — rank: public */
    postSsoMembershipCheckIn(args: RequestArgs & { body: PostSsoMembershipCheckInRequest }): Promise<PostSsoMembershipCheckInResponse>;
    /** GET /sso/pubkey — rank: public */
    getSsoPubkey(args?: RequestArgs): Promise<GetSsoPubkeyResponse>;
    /** POST /sso/token — rank: public */
    postSsoToken(args: RequestArgs & { body: PostSsoTokenRequest }): Promise<PostSsoTokenResponse>;
  };
  "tasks": {
    /** GET /tasks — rank: any-builder */
    getTasks(args?: RequestArgs): Promise<GetTasksResponse>;
    /** POST /tasks — rank: metic+archon */
    postTasks(args: RequestArgs & { body: PostTasksRequest }): Promise<ApiResponse>;
    /** GET /tasks/{id} — rank: any-builder */
    getTasksId(args?: RequestArgs): Promise<ApiResponse>;
    /** PATCH /tasks/{id} — rank: metic+archon */
    patchTasksId(args?: RequestArgs & { body?: PatchTasksIdRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/abandon — rank: metic+archon */
    postTasksIdAbandon(args?: RequestArgs & { body?: PostTasksIdAbandonRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/attest-gate — rank: any-builder */
    postTasksIdAttestGate(args: RequestArgs & { body: PostTasksIdAttestGateRequest }): Promise<PostTasksIdAttestGateResponse>;
    /** POST /tasks/{id}/confirm — rank: any-builder */
    postTasksIdConfirm(args?: RequestArgs & { body?: PostTasksIdConfirmRequest }): Promise<ApiResponse>;
    /** GET /tasks/{id}/criteria — rank: any-builder */
    getTasksIdCriteria(args?: RequestArgs): Promise<GetTasksIdCriteriaResponse>;
    /** POST /tasks/{id}/criteria — rank: metic+archon */
    postTasksIdCriteria(args?: RequestArgs & { body?: PostTasksIdCriteriaRequest }): Promise<PostTasksIdCriteriaResponse>;
    /** DELETE /tasks/{id}/criteria/{criterionId} — rank: metic+archon */
    deleteTasksIdCriteriaCriterionId(args?: RequestArgs): Promise<DeleteTasksIdCriteriaCriterionIdResponse>;
    /** POST /tasks/{id}/demote — rank: metic+archon */
    postTasksIdDemote(args?: RequestArgs): Promise<PostTasksIdDemoteResponse>;
    /** GET /tasks/{id}/dependencies — rank: any-builder */
    getTasksIdDependencies(args?: RequestArgs): Promise<GetTasksIdDependenciesResponse>;
    /** POST /tasks/{id}/dependencies — rank: metic+archon */
    postTasksIdDependencies(args?: RequestArgs & { body?: PostTasksIdDependenciesRequest }): Promise<PostTasksIdDependenciesResponse>;
    /** PUT /tasks/{id}/dependencies — rank: metic+archon */
    putTasksIdDependencies(args: RequestArgs & { body: PutTasksIdDependenciesRequest }): Promise<PutTasksIdDependenciesResponse>;
    /** DELETE /tasks/{id}/dependencies/{depId} — rank: metic+archon */
    deleteTasksIdDependenciesDepId(args?: RequestArgs): Promise<DeleteTasksIdDependenciesDepIdResponse>;
    /** POST /tasks/{id}/grade — rank: any-builder */
    postTasksIdGrade(args?: RequestArgs & { body?: PostTasksIdGradeRequest }): Promise<ApiResponse>;
    /** POST /tasks/{id}/override-request — rank: any-builder */
    postTasksIdOverrideRequest(args: RequestArgs & { body: PostTasksIdOverrideRequestRequest }): Promise<PostTasksIdOverrideRequestResponse>;
    /** POST /tasks/{id}/promote — rank: metic+archon */
    postTasksIdPromote(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /tasks/{id}/publish-branch — rank: any-builder */
    postTasksIdPublishBranch(args: RequestArgs & { body: PostTasksIdPublishBranchRequest }): Promise<PostTasksIdPublishBranchResponse>;
    /** GET /tasks/{id}/publish-status — rank: any-builder */
    getTasksIdPublishStatus(args?: RequestArgs): Promise<ApiResponse>;
    /** POST /tasks/{id}/ship — rank: any-builder */
    postTasksIdShip(args?: RequestArgs): Promise<PostTasksIdShipResponse>;
    /** POST /tasks/{id}/vote — rank: metic+archon */
    postTasksIdVote(args: RequestArgs & { body: PostTasksIdVoteRequest }): Promise<PostTasksIdVoteResponse>;
    /** GET /tasks/claimable — rank: any-builder */
    getTasksClaimable(args?: RequestArgs): Promise<GetTasksClaimableResponse>;
    /** GET /tasks/newcomer-floor — rank: any-builder */
    getTasksNewcomerFloor(args?: RequestArgs): Promise<GetTasksNewcomerFloorResponse>;
    /** POST /tasks/newcomer-restock — rank: metic+archon */
    postTasksNewcomerRestock(args?: RequestArgs): Promise<PostTasksNewcomerRestockResponse>;
    /** GET /tasks/peer-votes/feed — rank: any-builder */
    getTasksPeerVotesFeed(args?: RequestArgs): Promise<GetTasksPeerVotesFeedResponse>;
    /** POST /tasks/peer-votes/tally — rank: metic+archon */
    postTasksPeerVotesTally(args?: RequestArgs): Promise<ApiResponse>;
  };
  "versions": {
    /** GET /versions — rank: public */
    getVersions(args?: RequestArgs): Promise<GetVersionsResponse>;
    /** POST /versions — rank: metic+archon */
    postVersions(args: RequestArgs & { body: PostVersionsRequest }): Promise<PostVersionsResponse>;
    /** GET /versions/{id}/done-when — rank: public */
    getVersionsIdDoneWhen(args?: RequestArgs): Promise<GetVersionsIdDoneWhenResponse>;
    /** POST /versions/{id}/done-when — rank: metic+archon */
    postVersionsIdDoneWhen(args: RequestArgs & { body: PostVersionsIdDoneWhenRequest }): Promise<PostVersionsIdDoneWhenResponse>;
    /** GET /versions/{id}/progress — rank: public */
    getVersionsIdProgress(args?: RequestArgs): Promise<ApiResponse>;
    /** GET /versions/close-suggestions — rank: public */
    getVersionsCloseSuggestions(args?: RequestArgs): Promise<GetVersionsCloseSuggestionsResponse>;
    /** GET /versions/progress — rank: public */
    getVersionsProgress(args?: RequestArgs): Promise<GetVersionsProgressResponse>;
  };
}
export declare function createClient(opts?: ClientOptions): BongosClient;
export default createClient;
