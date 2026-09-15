/**
 * Diagnostics Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/diagnostics.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type FaultFinding = components["schemas"]["FaultFinding"];
export type FaultType = components["schemas"]["FaultType"];
export type WorkOrder = components["schemas"]["WorkOrder"];
export type WorkOrderCreate = components["schemas"]["WorkOrderCreate"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type DispatchWorkOrderRequestInput = NonNullable<operations["dispatchWorkOrder"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListFaultFindingsParams = NonNullable<operations["listFaultFindings"]["parameters"]["query"]>;
export type DispatchWorkOrderParams = operations["dispatchWorkOrder"]["parameters"]["path"];


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListFaultFindingsResponse = operations["listFaultFindings"]["responses"]["200"]["content"]["application/json"];
export type DispatchWorkOrderResponse = operations["dispatchWorkOrder"]["responses"]["201"]["content"]["application/json"];


