/**
 * Advisory Domain Contracts
 *
 * Re-exports Zod schemas from @warmpact/core for runtime validation.
 * This avoids duplication and ensures alignment with the API contract.
 *
 * Architecture:
 * - Single source of truth: @warmpact/core
 * - No code duplication or drift
 * - Runtime validation of API responses
 * - Used in services to validate responses
 *
 * @see @warmpact/core/advisory for the source schemas
 */

import { advisorySchemas as coreAdvisorySchemas } from "@warmpact/core/advisory";
import type { z } from "zod";

/**
 * Re-export schemas from core
 * These are the same schemas used by the api-server, ensuring perfect alignment
 */
export const {
  // TODO: Add specific schema exports based on OpenAPI spec
  // ResponseMeta,
  // PageInfo,
  // etc.
} = coreAdvisorySchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const advisorySchemas = coreAdvisorySchemas;
