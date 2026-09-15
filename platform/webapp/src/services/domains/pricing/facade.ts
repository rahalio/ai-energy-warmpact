/**
 * Pricing Domain Facade
 *
 * High-level API for pricing domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { pricingService } from "./pricing.service";
// TODO: Import types
// import type { ... } from "./pricing.api-types";

/**
 * Pricing Facade
 *
 * High-level API for pricing operations.
 * Components should use this facade instead of services directly.
 */
export const pricingFacade = {
  /**
   * Build Flat Rate Price
   */
  async getFlatRate(...args: Parameters<typeof pricingService.getFlatRate>): Promise<any> {
    return pricingService.getFlatRate(...args);
  },
  /**
   * Check Price Comparability
   */
  async getComparabilityCheck(...args: Parameters<typeof pricingService.getComparabilityCheck>): Promise<any> {
    return pricingService.getComparabilityCheck(...args);
  },
  /**
   * List price/guarantee revision triggers due
   */
  async getRevisionTrigger(...args: Parameters<typeof pricingService.getRevisionTrigger>): Promise<any> {
    return pricingService.getRevisionTrigger(...args);
  }
};
