/**
 * Network Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/network.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BindingConnectionConstraint = components["schemas"]["BindingConnectionConstraint"];
export type ReturnTemperatureRecord = components["schemas"]["ReturnTemperatureRecord"];
export type SupplyTemperatureSetpoint = components["schemas"]["SupplyTemperatureSetpoint"];
export type SupplyTemperatureSetpointCreate = components["schemas"]["SupplyTemperatureSetpointCreate"];
export type Setpoint = operations["listSupplyTemperatureSetpoints"]["responses"]["200"]["content"]["application/json"]["data"];
export type ReturnTemperature = operations["listReturnTemperatureRecords"]["responses"]["200"]["content"]["application/json"]["data"];
export type BindingConnection = operations["listBindingConnectionConstraints"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IssueSupplyTemperatureSetpointRequestInput = NonNullable<operations["issueSupplyTemperatureSetpoint"]["requestBody"]>["content"]["application/json"];
export type IngestReturnTemperatureRecordRequestInput = NonNullable<operations["ingestReturnTemperatureRecord"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListSupplyTemperatureSetpointsParams = NonNullable<operations["listSupplyTemperatureSetpoints"]["parameters"]["query"]>;
export type ListReturnTemperatureRecordsParams = NonNullable<operations["listReturnTemperatureRecords"]["parameters"]["query"]>;
export type ListBindingConnectionConstraintsParams = NonNullable<operations["listBindingConnectionConstraints"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListSupplyTemperatureSetpointsResponse = operations["listSupplyTemperatureSetpoints"]["responses"]["200"]["content"]["application/json"];
export type IssueSupplyTemperatureSetpointResponse = operations["issueSupplyTemperatureSetpoint"]["responses"]["201"]["content"]["application/json"];
export type ListReturnTemperatureRecordsResponse = operations["listReturnTemperatureRecords"]["responses"]["200"]["content"]["application/json"];
export type IngestReturnTemperatureRecordResponse = operations["ingestReturnTemperatureRecord"]["responses"]["202"]["content"]["application/json"];
export type ListBindingConnectionConstraintsResponse = operations["listBindingConnectionConstraints"]["responses"]["200"]["content"]["application/json"];


