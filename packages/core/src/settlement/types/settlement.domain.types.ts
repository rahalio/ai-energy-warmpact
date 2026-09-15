/**
 * Settlement Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/settlement.openapi.types";

// ============================================================================
// Domain Types Export - Domain-specific types only (excludes components/operations)
// ============================================================================
// This file exports domain-specific types for use in main index.ts
// components and operations are NOT exported here to avoid duplicate export errors
// Access components/operations via namespace: domain.types.components

// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type ConditionMeasurement = components["schemas"]["ConditionMeasurement"];
export type FlatRateInvoice = components["schemas"]["FlatRateInvoice"];
export type GuaranteeBreach = components["schemas"]["GuaranteeBreach"];
export type MarginReport = components["schemas"]["MarginReport"];
export type ServiceCredit = components["schemas"]["ServiceCredit"];
export type Breach = operations["listGuaranteeBreaches"]["responses"]["200"]["content"]["application/json"]["data"];
export type Invoice = operations["listFlatRateInvoices"]["responses"]["200"]["content"]["application/json"]["data"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IngestConditionMeasurementRequestInput = NonNullable<operations["ingestConditionMeasurement"]["requestBody"]>["content"]["application/json"];
export type IssueFlatRateInvoiceRequestInput = NonNullable<operations["issueFlatRateInvoice"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListGuaranteeBreachesParams = NonNullable<operations["listGuaranteeBreaches"]["parameters"]["query"]>;
export type ListFlatRateInvoicesParams = NonNullable<operations["listFlatRateInvoices"]["parameters"]["query"]>;
export type GetMarginPerConnectionReportParams = NonNullable<operations["getMarginPerConnectionReport"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type IngestConditionMeasurementResponse = operations["ingestConditionMeasurement"]["responses"]["202"]["content"]["application/json"];
export type ListGuaranteeBreachesResponse = operations["listGuaranteeBreaches"]["responses"]["200"]["content"]["application/json"];
export type ListFlatRateInvoicesResponse = operations["listFlatRateInvoices"]["responses"]["200"]["content"]["application/json"];
export type IssueFlatRateInvoiceResponse = operations["issueFlatRateInvoice"]["responses"]["201"]["content"]["application/json"];
export type GetMarginPerConnectionReportResponse = operations["getMarginPerConnectionReport"]["responses"]["200"]["content"]["application/json"];


