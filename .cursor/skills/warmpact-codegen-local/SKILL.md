---
name: warmpact-codegen-local
description: >-
  Warmpact local codegen hygiene: .codegen is never committed; obtain from
  zero-apps-codegen-scaffold; package scope is @warmpact.
---

# Warmpact codegen (local tool)

- **Package scope:** `@warmpact/*`
- **`.codegen/`:** gitignored; never commit or push. Copy from `zero-apps-codegen-scaffold` when missing, then `pnpm codegen:paths`.
- **Modes:** Mode A = full generate for a new domain; Mode B = core-only after YAML edits, handwrite below.
- See also: `ddd-codegen`, `ddd-platform`, `ddd-identity`, and `.cursor/rules/codegen-gitignore.mdc`.
