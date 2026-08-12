# /trace
# Purpose: Map the actual data flow to find "unwired" logic or hardcoded mocks.

- Act as a System Connectivity Auditor. 
- TRACE: Start from [UI Component/Page] -> [Next.js API Route] -> [Runtime Module / Worker Path] -> [Store / Vendor Endpoint / Morph Contract].
- RULES:
    1. Identify any "MOCK", "TODO", or "STUB" in the path.
    2. Check whether operator auth, worker auth, correlation IDs, and vendor identifiers are correctly propagated or dropped.
    3. Verify whether the final data/system boundary matches the UI's expected source of truth:
       - SQLite / Postgres store
       - vendor status endpoint
       - Morph anchor / treasury contract
- OUTPUT: A "Wiring Health Map" showing [Wired/Partial/Broken] for each hop. 
- ZERO-SLOP: Do not say "assuming it works." If you cannot find the file, mark it as [MISSING].
