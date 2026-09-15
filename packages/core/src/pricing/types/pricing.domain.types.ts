/**
 * Pricing Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/pricing.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type FlatRatePrice = components["schemas"]["FlatRatePrice"];
export type PriceComponent = components["schemas"]["PriceComponent"];
export type RevisionTrigger = components["schemas"]["RevisionTrigger"];
export type TariffComparabilityCheck = components["schemas"]["TariffComparabilityCheck"];
export type FlatRatePriceRequest = components["schemas"]["FlatRatePriceRequest"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type BuildFlatRatePriceRequestInput = NonNullable<operations["buildFlatRatePrice"]["requestBody"]>["content"]["application/json"];
export type CheckPriceComparabilityRequestInput = NonNullable<operations["checkPriceComparability"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRevisionTriggersParams = NonNullable<operations["listRevisionTriggers"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type BuildFlatRatePriceResponse = operations["buildFlatRatePrice"]["responses"]["200"]["content"]["application/json"];
export type CheckPriceComparabilityResponse = operations["checkPriceComparability"]["responses"]["200"]["content"]["application/json"];
export type ListRevisionTriggersResponse = operations["listRevisionTriggers"]["responses"]["200"]["content"]["application/json"];


