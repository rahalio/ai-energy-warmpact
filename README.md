# Warmpact

Condition-as-a-service platform for district heating — OpenAPI-first DDD monorepo (`@warmpact/*`).

Product specs: [PRODUCT.md](./PRODUCT.md) · [WEBAPP.md](./WEBAPP.md) · [USER_STORIES.md](./USER_STORIES.md)

## Layout

```
packages/openapi-core  →  packages/core  →  platform/services  →  platform/adapters  →  platform/api-server
         ↑ OpenAPI source of truth                              ports↑        impl↑              HTTP↑
platform/webapp        →  generated clients + product UI
```

## Prerequisites: local `.codegen`

The `zero-codegen` tool lives under `.codegen/` and **must never be committed or pushed**.

If `.codegen` is missing after clone:

```bash
rsync -a --exclude '__pycache__' \
  /path/to/zero-apps-codegen-scaffold/.codegen/ \
  ./.codegen/
```

Then run `pnpm codegen:paths`.

## Quick start

```bash
pnpm install
pnpm lint:openapi && pnpm bundle:openapi
pnpm codegen:paths
pnpm build
pnpm dev:api
# Health: curl http://127.0.0.1:4000/health
# Demo key: X-API-Key: warmpact_demo_local_dev_key
```

Optional webapp:

```bash
pnpm --filter @warmpact/webapp dev
```

Optional Dynamo Local: see [docs/DYNAMO-LOCAL.md](./docs/DYNAMO-LOCAL.md).

## Codegen rules

1. **New domain** → full multi-layer generate once (Mode A).
2. **YAML edit on existing domain** → regenerate **core only**, handwrite below (Mode B).
3. Keep envelopes (`{ data, meta }`), nested DI, and identity middleware intact.
4. Never commit `.codegen/`.

See `.cursor/skills/` and [docs/CODEGEN.md](./docs/CODEGEN.md).
