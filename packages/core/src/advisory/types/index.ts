/**
 * Advisory Domain Types
 *
 * Auto-generated from OpenAPI spec
 * Generator: types-generator v2.0.0
 *
 * This file re-exports types from generated OpenAPI types and adds
 * convenient type aliases for handlers (response types, etc.)
 *
 * ⚠️ DO NOT EDIT MANUALLY - this file is auto-generated
 */

import type { components, operations } from "../openapi/advisory.openapi.types";

// ============================================================================
// Re-export all generated types
// ============================================================================
// Note: components and operations are exported here but should be accessed via namespace
// in main index.ts to avoid duplicate export errors (e.g., blockchain.types.components)

export type { components, operations };


// ============================================================================
// Convenient Type Aliases for Schemas
// ============================================================================

export type BenchmarkCohort = components["schemas"]["BenchmarkCohort"];
export type ConditionReport = components["schemas"]["ConditionReport"];
export type RemediationProposal = components["schemas"]["RemediationProposal"];
export type RemediationProposalCreate = components["schemas"]["RemediationProposalCreate"];


// ============================================================================
// Operation Input Types (Request Bodies)
// ============================================================================

// These types represent the input data for create/update operations

export type IssueRemediationProposalRequestInput = NonNullable<operations["issueRemediationProposal"]["requestBody"]>["content"]["application/json"];


// ============================================================================
// Operation Parameter Types (Query/Path Parameters)
// ============================================================================

// These types represent parameters for operations without request bodies.
// Aligned with get_input_schema_or_type_name for consistent naming across generators.

export type ListRemediationProposalsParams = NonNullable<operations["listRemediationProposals"]["parameters"]["query"]>;
export type GetBenchmarkCohortParams = NonNullable<operations["getBenchmarkCohort"]["parameters"]["query"]>;
export type GetPlainLanguageConditionReportParams = NonNullable<operations["getPlainLanguageConditionReport"]["parameters"]["query"]>;


// ============================================================================
// Operation Response Types
// ============================================================================

// These types are used by handlers for type-safe response envelopes

export type ListRemediationProposalsResponse = operations["listRemediationProposals"]["responses"]["200"]["content"]["application/json"];
export type IssueRemediationProposalResponse = operations["issueRemediationProposal"]["responses"]["201"]["content"]["application/json"];
export type GetBenchmarkCohortResponse = operations["getBenchmarkCohort"]["responses"]["200"]["content"]["application/json"];
export type GetPlainLanguageConditionReportResponse = operations["getPlainLanguageConditionReport"]["responses"]["200"]["content"]["application/json"];


