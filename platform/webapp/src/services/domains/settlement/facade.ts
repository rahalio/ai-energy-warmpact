/**
 * Settlement Domain Facade
 *
 * High-level API for settlement domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { settlementService } from "./settlement.service";
// TODO: Import types
// import type { ... } from "./settlement.api-types";

/**
 * Settlement Facade
 *
 * High-level API for settlement operations.
 * Components should use this facade instead of services directly.
 */
export const settlementFacade = {
  /**
   * Ingest Condition Measurement
   */
  async getConditionMeasurement(...args: Parameters<typeof settlementService.getConditionMeasurement>): Promise<any> {
    return settlementService.getConditionMeasurement(...args);
  },
  /**
   * List Guarantee Breaches
   */
  async getBreach(...args: Parameters<typeof settlementService.getBreach>): Promise<any> {
    return settlementService.getBreach(...args);
  },
  /**
   * List Flat Rate Invoices
   */
  async getInvoice(...args: Parameters<typeof settlementService.getInvoice>): Promise<any> {
    return settlementService.getInvoice(...args);
  },
  /**
   * Issue Flat Rate Invoice
   */
  async getInvoice(...args: Parameters<typeof settlementService.getInvoice>): Promise<any> {
    return settlementService.getInvoice(...args);
  },
  /**
   * Get Margin Per Connection Report
   */
  async getMarginReport(...args: Parameters<typeof settlementService.getMarginReport>): Promise<any> {
    return settlementService.getMarginReport(...args);
  }
};
