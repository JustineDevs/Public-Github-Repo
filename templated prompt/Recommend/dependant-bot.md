You are performing a full Dependabot findings review and remediation plan for this repository.

Goal:
Review ALL current Dependabot vulnerability findings, determine real impact on this codebase, design the safest fix strategy, and produce an implementation-grade remediation plan.

Core mindset:
Do not treat all Dependabot alerts as equal.
Do not blindly bump packages.
Do not assume “transitive” means “safe to ignore.”
Do not assume “direct” means “easy to upgrade.”
Trace actual runtime impact, exploitability, blast radius, compatibility risk, and safest remediation path.

Your job:
1. Review every open Dependabot alert.
2. Group related findings by package family, manifest, and runtime surface.
3. Determine whether each finding is:
   - directly exploitable
   - indirectly reachable
   - dev-only
   - build-time only
   - runtime-critical
   - likely dismissible with justification
4. Produce a concrete fix plan.
5. Recommend exact remediation order.
6. Flag breaking-change risk and rollout risk.
7. Define validation steps after each fix.

Repository context to inspect:
- monorepo with mixed lockfiles/manifests
- pnpm workspace/root lockfile paths
- app-specific package manifests
- service-specific package-lock files
- frontend app(s)
- backend/service runtime(s)
- agent/runtime services
- deployment-related services
- shared packages

Dependabot review goals:
- identify all open alerts
- map each alert to actual usage in repo
- distinguish direct dependencies vs transitive dependencies
- identify duplicates caused by the same vulnerable package appearing in multiple manifests
- determine whether one upgrade can collapse multiple alerts
- find vulnerable packages that are only pulled in by stale lockfiles or unused subprojects
- determine whether lockfile fragmentation is increasing security noise
- recommend fixes, dismissals, consolidations, or architectural cleanup

Required inspection workflow:

STEP 1 — Enumerate findings
- List every open Dependabot alert.
- Capture:
  - alert id
  - package
  - severity
  - manifest
  - direct vs transitive
  - advisory title
  - ecosystem
- De-duplicate repeated alerts by package/advisory where possible, but preserve per-manifest exposure.

STEP 2 — Group by remediation unit
Group findings into fix buckets such as:
- same package across multiple manifests
- same root cause across pnpm lock and package-lock files
- same runtime family (frontend, backend, agent runtime, deploy service)
- same framework family (Next.js, Undici, routing libs, glob libs, SSR libs)

STEP 3 — Map to real code usage
For each vulnerable package:
- locate which workspace/app/service imports or depends on it
- determine whether it is direct or transitive
- search for actual runtime usage
- identify whether exposed attack surface exists in production
- identify whether the vulnerable behavior is actually reachable by untrusted input

STEP 4 — Assess exploitability
For each finding, determine:
- Is this package used in production runtime?
- Is the vulnerable path reachable from user-controlled input?
- Is it server-side, client-side, SSR, build-time, CLI-only, or test-only?
- Does the repo expose the relevant feature?
- Is the issue high-likelihood, low-likelihood, or theoretical in this repo?

STEP 5 — Design the fix strategy
For each fix bucket, determine:
- exact package(s) to upgrade
- minimum safe target version
- whether root manifest change is enough
- whether lockfile regeneration is required
- whether subproject package-lock files should be removed, regenerated, or aligned
- whether framework upgrade is needed
- whether workaround/mitigation is needed before version upgrade
- whether the finding should be dismissed with explicit reasoning

STEP 6 — Validate upgrade safety
For every proposed fix:
- identify breaking-change risk
- identify config changes required
- identify code changes required
- identify migration/testing needs
- identify downstream packages that may also need alignment
- define rollback path

STEP 7 — Produce final remediation output
Output a clear fix plan, prioritized by risk and ease.

Required analysis dimensions:

A. Security truth
For each alert, answer:
- real risk in this repo
- reachable or not
- internet-facing or internal only
- prod vs dev exposure
- server vs client exposure
- exploit preconditions
- why it matters here

B. Dependency truth
For each alert, answer:
- direct dependency or transitive
- which package pulls it in
- which manifest owns it
- can it be fixed at root
- is the alert duplicated across multiple lockfiles

C. Architectural truth
Investigate:
- why multiple lockfile systems exist
- whether package-lock files inside services are intentional
- whether they are stale or drifted from workspace strategy
- whether duplicate package managers are causing unnecessary vuln surface
- whether consolidating dependency management would reduce exposure and maintenance cost

D. Remediation truth
For each alert/fix bucket:
- fix now
- fix with grouped upgrade
- mitigate then upgrade
- dismiss with reason
- defer with risk acceptance

Special attention:
- Do not only patch the lockfile; verify owning package constraints.
- Do not ignore transitive issues without proving non-reachability.
- If the same vulnerable package appears in multiple manifests, propose one coordinated remediation plan.
- If stale lockfiles or abandoned services are causing alerts, flag cleanup as a security fix.
- If a framework upgrade affects routing, SSR, image handling, CSRF, or middleware behavior, call out regression risk explicitly.

Required outputs:

1. Executive summary
- total open findings reviewed
- top risk clusters
- highest priority fix buckets
- whether repo is safe to release as-is

2. Findings inventory
For each alert include:
- alert id
- package
- severity
- advisory title
- manifest
- direct/transitive
- runtime surface
- reachable? yes/no/unclear
- recommendation

3. Fix buckets
Group related findings into upgrade units, for example:
- Next.js bucket
- Undici bucket
- path-to-regexp bucket
- picomatch/brace-expansion glob bucket
- services/agent-runtime SSR/UI bucket
- stale lockfile cleanup bucket

4. Priority plan
Order fixes by:
- criticality
- exploitability
- blast radius
- ease of remediation
- regression risk

5. Exact remediation recommendations
For each bucket provide:
- packages to bump
- manifests to update
- lockfiles to regenerate
- related tests to run
- compatibility concerns
- fallback plan
- whether can be done in one PR or should be split

6. Validation checklist
After every fix bucket, verify:
- install succeeds
- lockfile is consistent
- build passes
- typecheck passes
- lint passes
- unit/integration tests pass
- SSR/build/runtime startup passes
- key user flows pass
- no new peer dependency breakage
- no auth/middleware/routing regressions
- no deployment/runtime regression

7. Dismissal recommendations
For any alert recommended for dismissal, provide:
- exact justification
- evidence that package/path is not reachable or not shipped
- whether dismissal is temporary or permanent
- what would change that assessment

8. Repo hygiene recommendations
Call out:
- lockfile consolidation opportunities
- stale dependency cleanup
- unused packages
- package manager drift
- abandoned subprojects
- duplicate dependency trees
- missing automation for security updates

9. Final verdict
Answer directly:
- What should be fixed immediately?
- What can be grouped safely?
- What should be dismissed?
- What architectural cleanup would reduce future Dependabot noise?
- Is this repo safe to release before remediation?

Scoring model:
For each finding assign:
- Severity score: GitHub severity
- Reachability score: reachable / partially reachable / unclear / not reachable
- Runtime score: prod / internal / dev / build-only / test-only
- Remediation effort: low / medium / high
- Regression risk: low / medium / high
- Final priority: P0 / P1 / P2 / P3

Hard rules:
- If a package is used in an internet-facing server path, prioritize it higher.
- If a package affects routing, request parsing, SSR, middleware, or WebSocket handling, treat it as high-risk unless proven otherwise.
- If a framework vulnerability is in a direct dependency, do not hand-wave it away.
- If multiple alerts stem from one outdated dependency chain, prefer a coordinated fix.
- If stale lockfiles are creating alerts, flag them for cleanup.
- If a proposed upgrade risks breaking production, require staged validation and rollback notes.

Tone:
Be strict, technical, and evidence-driven.
Do not just say “upgrade dependencies.”
Produce a real triage-and-fix plan a senior engineer could execute.
