# Places API Progress Notes

Use this file as a running learning log across sessions.

## How to log updates
For each meaningful step, add:
- Date
- Milestone
- What was built/changed
- What was learned
- Blockers (if any)
- Next step

---

## Entries

### 2026-04-09
- **Milestone:** Planning
- **Built/Changed:** Created milestone roadmap and project-level AGENTS guidance for mentoring + continuity.
- **Learned:** Milestone framing keeps work flexible while preserving clear delivery checkpoints.
- **Blockers:** None.
- **Next step:** Start Milestone 1 (PostGIS container, DB connection, migrations, extension enablement).

### 2026-04-09
- **Milestone:** Milestone 2 (in progress)
- **Built/Changed:** Added Places scaffold (module/controller/service/entity/DTOs), enabled global `ValidationPipe`, installed validation and mapped-types deps, and applied migration creating `places` table with UUID id + PostGIS geography point + timestamps.
- **Learned:** Migrations should mirror entity intent (types/nullability/defaults), and GeoJSON point order is longitude-first (`[lng, lat]`).
- **Blockers:** None active.
- **Next step:** Integrate `TypeOrmModule.forFeature([Place])`, inject repository, and implement real CRUD persistence.

### 2026-04-09
- **Milestone:** Milestone 2 (setup hygiene)
- **Built/Changed:** Added `.env.example` for reproducible local configuration (`DB_*`, `PORT`) without committing private `.env` values.
- **Learned:** Config templates make onboarding and troubleshooting easier while keeping secret handling safer.
- **Blockers:** No git remote configured yet for push.
- **Next step:** Add remote and push, then continue repository-backed CRUD implementation.

### 2026-04-10
- **Milestone:** Milestone 2 (documentation quality)
- **Built/Changed:** Replaced default Nest starter README with project-specific docs (learning goal, milestone status, setup flow, env template, migration commands, current endpoints, troubleshooting).
- **Learned:** A focused README is part of architecture quality because it reduces onboarding errors and supports repeatable local setup.
- **Blockers:** None.
- **Next step:** Replace placeholder Places service responses with repository-backed CRUD logic.
