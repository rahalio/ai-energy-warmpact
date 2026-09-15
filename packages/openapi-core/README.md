# @warmpact/openapi-core

OpenAPI 3.1 contracts for Warmpact. One YAML file per domain under `src/`, plus shared `common/`.

| Domain | File |
|--------|------|
| identity | `identity.yaml` |
| customers | `customers.yaml` |
| underwriting | `underwriting.yaml` |
| guarantees | `guarantees.yaml` |
| pricing | `pricing.yaml` |
| forecasting | `forecasting.yaml` |
| network | `network.yaml` |
| diagnostics | `diagnostics.yaml` |
| settlement | `settlement.yaml` |
| advisory | `advisory.yaml` |
| governance | `governance.yaml` |

```bash
pnpm lint:domains
pnpm bundle:domains
```

Bundled output (gitignored): `src/.bundled/`.
