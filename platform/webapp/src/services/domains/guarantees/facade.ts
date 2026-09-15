/**
 * Guarantees Domain Facade
 *
 * High-level API for guarantees domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { guaranteesService } from "./guarantees.service";
// TODO: Import types
// import type { ... } from "./guarantees.api-types";

/**
 * Guarantees Facade
 *
 * High-level API for guarantees operations.
 * Components should use this facade instead of services directly.
 */
export const guaranteesFacade = {
  /**
   * List Condition Products
   */
  async getConditionProduct(...args: Parameters<typeof guaranteesService.getConditionProduct>): Promise<any> {
    return guaranteesService.getConditionProduct(...args);
  },
  /**
   * Create Condition Product
   */
  async createConditionProduct(...args: Parameters<typeof guaranteesService.createConditionProduct>): Promise<any> {
    return guaranteesService.createConditionProduct(...args);
  },
  /**
   * List Condition Guarantees
   */
  async getGuarantee(...args: Parameters<typeof guaranteesService.getGuarantee>): Promise<any> {
    return guaranteesService.getGuarantee(...args);
  },
  /**
   * Offer Condition Guarantee
   */
  async getGuarantee(...args: Parameters<typeof guaranteesService.getGuarantee>): Promise<any> {
    return guaranteesService.getGuarantee(...args);
  },
  /**
   * Release Exit Package
   */
  async getExitPackage(...args: Parameters<typeof guaranteesService.getExitPackage>): Promise<any> {
    return guaranteesService.getExitPackage(...args);
  },
  /**
   * Get Safety Floors
   */
  async getSafetyFloor(...args: Parameters<typeof guaranteesService.getSafetyFloor>): Promise<any> {
    return guaranteesService.getSafetyFloor(...args);
  },
  /**
   * Attempt to override a safety floor (always refused and logged)
   */
  async getOverrideAttempt(...args: Parameters<typeof guaranteesService.getOverrideAttempt>): Promise<any> {
    return guaranteesService.getOverrideAttempt(...args);
  }
};
