/**
 * Underwriting Domain Facade
 *
 * High-level API for underwriting domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { underwritingService } from "./underwriting.service";
// TODO: Import types
// import type { ... } from "./underwriting.api-types";

/**
 * Underwriting Facade
 *
 * High-level API for underwriting operations.
 * Components should use this facade instead of services directly.
 */
export const underwritingFacade = {
  /**
   * Underwrite Building Connection
   */
  async getUnderwriting(...args: Parameters<typeof underwritingService.getUnderwriting>): Promise<any> {
    return underwritingService.getUnderwriting(...args);
  },
  /**
   * Get Underwriting Assessment
   */
  async getUnderwriting(...args: Parameters<typeof underwritingService.getUnderwriting>): Promise<any> {
    return underwritingService.getUnderwriting(...args);
  },
  /**
   * Get Building Thermal Model
   */
  async getThermalModel(...args: Parameters<typeof underwritingService.getThermalModel>): Promise<any> {
    return underwritingService.getThermalModel(...args);
  }
};
