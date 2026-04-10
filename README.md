# geo-nestjs

Hands-on learning project to build a **Places API** with **NestJS + PostgreSQL/PostGIS**.

## Learning goal

Learn backend API architecture and geospatial SQL together by shipping milestone-based features.

## Milestone status

- [x] Milestone 1: DB foundation (Docker PostGIS + migrations + extension enablement)
- [~] Milestone 2: Places CRUD scaffold + places table migration
- [ ] Milestone 3: Radius search (`ST_DWithin`)
- [ ] Milestone 4: Nearest search (`ST_Distance` + ordering)
- [ ] Milestone 5: Spatial index + performance checks
- [ ] Milestone 6: Tests, docs, deployment polish

## Stack

- NestJS
- PostgreSQL 18 + PostGIS
- TypeORM
- class-validator / class-transformer

## Prerequisites

- Node.js 20+
- pnpm
- Docker + Docker Compose

## Quick start

```bash
# 1) Start database
docker compose up -d

# 2) Install dependencies
pnpm install

# 3) Run migrations
pnpm migration:run

# 4) Start app
pnpm start:dev
```

API base URL: `http://localhost:3000`

## Environment variables

Copy `.env.example` to `.env`:

```env
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASSWORD=postgres
DB_NAME=placesapi
PORT=3000
```

## Useful commands

```bash
pnpm build
pnpm start:dev

pnpm migration:create src/database/migrations/<Name>
pnpm migration:run
pnpm migration:revert
pnpm migration:show
```

## API (current scaffold)

- `POST /places`
- `GET /places`
- `GET /places/:id`
- `PATCH /places/:id`
- `DELETE /places/:id`

## Project docs

- Milestone roadmap: `docs/placesapi-milestone-roadmap.md`
- Progress notes: `docs/placesapi-progress-notes.md`

## Troubleshooting

- Host port `5432` conflict: this project maps DB to host port `5433`.
- Migration errors: verify datasource path in `src/database/data-source.ts`.
