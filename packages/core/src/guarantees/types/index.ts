/**
 * Guarantees Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/guarantees.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ConditionGuarantee = components["schemas"]["ConditionGuarantee"];
export type ConditionGuaranteeCreate = components["schemas"]["ConditionGuaranteeCreate"];
export type ConditionProduct = components["schemas"]["ConditionProduct"];
export type ConditionProductCreate = components["schemas"]["ConditionProductCreate"];
export type ExitPackage = components["schemas"]["ExitPackage"];
export type SafetyFloor = components["schemas"]["SafetyFloor"];
export type SafetyFloorOverrideAttempt = components["schemas"]["SafetyFloorOverrideAttempt"];
export type Guarantee = operations["listConditionGuarantees"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type CreateConditionProductRequestInput = NonNullable<operations["createConditionProduct"]["requestBody"]>["content"]["application/json"];
export type OfferConditionGuaranteeRequestInput = NonNullable<operations["offerConditionGuarantee"]["requestBody"]>["content"]["application/json"];
export type ReleaseExitPackageRequestInput = NonNullable<operations["releaseExitPackage"]["requestBody"]>["content"]["application/json"];
export type AttemptSafetyFloorOverrideRequestInput = NonNullable<operations["attemptSafetyFloorOverride"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListConditionGuaranteesParams = NonNullable<operations["listConditionGuarantees"]["parameters"]["query"]>;
export type ReleaseExitPackageParams = operations["releaseExitPackage"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListConditionProductsResponse = operations["listConditionProducts"]["responses"]["200"]["content"]["application/json"];
export type CreateConditionProductResponse = operations["createConditionProduct"]["responses"]["201"]["content"]["application/json"];
export type ListConditionGuaranteesResponse = operations["listConditionGuarantees"]["responses"]["200"]["content"]["application/json"];
export type OfferConditionGuaranteeResponse = operations["offerConditionGuarantee"]["responses"]["201"]["content"]["application/json"];
export type ReleaseExitPackageResponse = operations["releaseExitPackage"]["responses"]["201"]["content"]["application/json"];
export type GetSafetyFloorsResponse = operations["getSafetyFloors"]["responses"]["200"]["content"]["application/json"];
export type AttemptSafetyFloorOverrideResponse = operations["attemptSafetyFloorOverride"]["responses"]["200"]["content"]["application/json"];


