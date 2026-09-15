/**
 * Governance Domain Facade
 *
 * High-level API for governance domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { governanceService } from "./governance.service";
// TODO: Import types
// import type { ... } from "./governance.api-types";

/**
 * Governance Facade
 *
 * High-level API for governance operations.
 * Components should use this facade instead of services directly.
 */
export const governanceFacade = {
  /**
   * List Carbon Intensity Records
   */
  async getCarbonIntensity(...args: Parameters<typeof governanceService.getCarbonIntensity>): Promise<any> {
    return governanceService.getCarbonIntensity(...args);
  },
  /**
   * List Governance Events
   */
  async getEvent(...args: Parameters<typeof governanceService.getEvent>): Promise<any> {
    return governanceService.getEvent(...args);
  }
};
