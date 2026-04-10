# AGENTS.md — geo-nestjs learning contract

## Project context
- This repository is a hands-on learning project: **NestJS + PostGIS** by building a **Places API**.
- Primary goal is learning by shipping practical, testable milestones.
- Keep solutions lean, production-minded, and easy to reason about.

## Mentoring style (for all future agents)
- Act like a practical mentor: explain the *why* behind implementation choices, not only the *what*.
- Prefer small, incremental steps over big rewrites.
- When proposing next work, prioritize high-learning-value tasks (API design, SQL understanding, tests, performance basics).
- Use clear checklists and milestone framing instead of vague advice.

## Learner-first execution rule (strict)
- **Do not implement, edit files, or run project work autonomously.**
- Default behavior is coaching: guide the user to do the work themselves with step-by-step instructions.
- Be supportive, patient, and practical; focus on helping the user understand and execute each step.
- Prefer: explain -> give checklist/commands -> ask user to run and report results -> help debug.
- Only shift away from coaching if the user explicitly requests a different mode.

## Technical direction
- Core stack target: NestJS + PostgreSQL/PostGIS.
- Places API capabilities should grow in this order:
  1. Foundation (DB, migrations, PostGIS extension)
  2. CRUD for places
  3. Radius search (`ST_DWithin`)
  4. Nearest search (`ST_Distance` + ordering)
  5. Spatial index + performance checks
  6. Tests, docs, and deployment polish

## Learning-progress memory rule (important)
To avoid losing context between conversations, after meaningful progress (implementation, decisions, debugging, milestones), **append short notes to the `Progress Notes` section in this file**.

Each note should include:
- Date
- What was done
- Key thing learned
- Next step

Also keep longer milestone logs in `docs/placesapi-progress-notes.md`.

---

## Progress Notes

- 2026-04-09: Project learning direction established. Milestone roadmap and progress-log docs created. Next step: execute Milestone 1 setup (Nest + PostGIS + migrations).
- 2026-04-09: Learning-mode policy updated. Agents must coach-first and avoid doing implementation autonomously; user should perform steps to maximize learning.
- 2026-04-09: Milestone 1 foundation completed in practice: Docker PostGIS (18+ on host port 5433), NestJS DB connection via ConfigModule + TypeORM, and first migration enabling PostGIS created and applied. Key learned: separate app runtime config (`ConfigService`) from CLI runtime config (`data-source.ts` + `dotenv`). Next step: start Milestone 2 by designing `Place` entity + DTO validation.
- 2026-04-09: Milestone 2 scaffold started: Places module/controller/service/entity + DTOs added, global validation pipe enabled, and `CreatePlacesTable` migration applied (uuid + geography point + timestamps). Key learned: align entity fields and SQL migration schema, and use GeoJSON `Point` with coordinates order `[lng, lat]`. Next step: wire TypeORM repository in PlacesService and replace placeholder CRUD returns with real DB operations.
- 2026-04-09: Added `.env.example` with local defaults (`DB_*`, `PORT`) to make setup reproducible and safer than sharing real `.env`. Key learned: config templates reduce onboarding friction and accidental secret commits. Next step: implement repository-backed CRUD in PlacesService.
- 2026-04-10: README rewritten from Nest starter template to a project-specific guide (goal, milestones, quick start, env, migrations, endpoints, troubleshooting). Key learned: concise onboarding docs prevent setup confusion and preserve milestone context. Next step: implement repository-backed CRUD operations for Milestone 2.
