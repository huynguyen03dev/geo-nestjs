# Places API Learning Roadmap (NestJS + PostGIS)

This roadmap is milestone-based (not day-based) so progress can stay practical and flexible.

## Milestone 1 — Project foundation
**Outcome:** App runs with NestJS + PostgreSQL/PostGIS + migrations.

### Build
- Run PostgreSQL + PostGIS in Docker
- Connect NestJS to DB
- Configure migrations
- Enable `postgis` extension

### Done when
- Project can start from scratch and run migrations successfully.

---

## Milestone 2 — Core Places CRUD
**Outcome:** Clean, validated Place resource.

### Build
- Place model/entity: `name`, `category`, `address`, `location`, timestamps
- DTO validation and global validation pipe
- Endpoints: create/list/get/update/delete place

### Done when
- CRUD works end-to-end with clear validation and error handling.

---

## Milestone 3 — Nearby radius search
**Outcome:** First real geospatial feature.

### Build
- Endpoint: nearby places by `lat`, `lng`, `radius`
- Use `ST_DWithin` with meter-based radius

### Done when
- Nearby results are correct against known sample points.

---

## Milestone 4 — Nearest ranking
**Outcome:** Distance-based ordering and distance output.

### Build
- Endpoint: nearest places by `lat`, `lng`, `limit`
- Use `ST_Distance` and order by ascending distance
- Return computed distance in response

### Done when
- Output is consistently sorted nearest → farthest.

---

## Milestone 5 — Performance and scale
**Outcome:** Geospatial queries stay fast with larger data.

### Build
- Seed realistic dataset (hundreds/thousands of places)
- Add GIST index for spatial column
- Inspect query plans (`EXPLAIN ANALYZE`)

### Done when
- Index usage is visible and query performance improves measurably.

---

## Milestone 6 — Reliability and portfolio quality
**Outcome:** Project is robust and shareable.

### Build
- Integration tests for CRUD + geo endpoints
- Swagger/OpenAPI docs with examples
- Logging and consistent error shape
- Deploy + migration runbook

### Done when
- A new user can clone, run, test, and use the API from README/docs.

---

## Learning loop for every feature
1. Implement endpoint/service
2. Run equivalent raw SQL manually
3. Add an integration test
4. Measure/inspect behavior (and performance for query features)
5. Write short learning notes

This loop optimizes both product progress and understanding.
