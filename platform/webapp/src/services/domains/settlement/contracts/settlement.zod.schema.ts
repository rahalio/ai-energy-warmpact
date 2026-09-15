/**
 * Settlement Domain Contracts
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
 * @see @warmpact/core/settlement for the source schemas
 */

import { settlementSchemas as coreSettlementSchemas } from "@warmpact/core/settlement";
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
} = coreSettlementSchemas;

/**
 * Export all schemas as a namespace for convenience
 */
export const settlementSchemas = coreSettlementSchemas;
