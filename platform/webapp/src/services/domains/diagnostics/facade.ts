/**
 * Diagnostics Domain Facade
 *
 * High-level API for diagnostics domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { diagnosticsService } from "./diagnostics.service";
// TODO: Import types
// import type { ... } from "./diagnostics.api-types";

/**
 * Diagnostics Facade
 *
 * High-level API for diagnostics operations.
 * Components should use this facade instead of services directly.
 */
export const diagnosticsFacade = {
  /**
   * List Fault Findings
   */
  async getFaultFinding(...args: Parameters<typeof diagnosticsService.getFaultFinding>): Promise<any> {
    return diagnosticsService.getFaultFinding(...args);
  },
  /**
   * Dispatch Work Order
   */
  async getWorkOrder(...args: Parameters<typeof diagnosticsService.getWorkOrder>): Promise<any> {
    return diagnosticsService.getWorkOrder(...args);
  }
};
