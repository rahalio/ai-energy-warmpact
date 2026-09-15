/**
 * Customers Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/customers.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BuildingConnection = components["schemas"]["BuildingConnection"];
export type BuildingConnectionCreate = components["schemas"]["BuildingConnectionCreate"];
export type CustomerSegment = components["schemas"]["CustomerSegment"];
export type HeatCustomer = components["schemas"]["HeatCustomer"];
export type Substation = components["schemas"]["Substation"];
export type SwitchRiskSignal = components["schemas"]["SwitchRiskSignal"];
export type Customer = operations["listHeatCustomers"]["responses"]["200"]["content"]["application/json"]["data"];
export type Connection = operations["listBuildingConnections"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type RegisterBuildingConnectionRequestInput = NonNullable<operations["registerBuildingConnection"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListHeatCustomersParams = NonNullable<operations["listHeatCustomers"]["parameters"]["query"]>;
export type ListBuildingConnectionsParams = NonNullable<operations["listBuildingConnections"]["parameters"]["query"]>;
export type GetBuildingConnectionParams = operations["getBuildingConnection"]["parameters"]["path"];
export type ListSwitchRiskSignalsParams = NonNullable<operations["listSwitchRiskSignals"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListHeatCustomersResponse = operations["listHeatCustomers"]["responses"]["200"]["content"]["application/json"];
export type ListBuildingConnectionsResponse = operations["listBuildingConnections"]["responses"]["200"]["content"]["application/json"];
export type RegisterBuildingConnectionResponse = operations["registerBuildingConnection"]["responses"]["201"]["content"]["application/json"];
export type GetBuildingConnectionResponse = operations["getBuildingConnection"]["responses"]["200"]["content"]["application/json"];
export type ListSwitchRiskSignalsResponse = operations["listSwitchRiskSignals"]["responses"]["200"]["content"]["application/json"];


