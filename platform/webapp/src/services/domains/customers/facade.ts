/**
 * Customers Domain Facade
 *
 * High-level API for customers domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { customersService } from "./customers.service";
// TODO: Import types
// import type { ... } from "./customers.api-types";

/**
 * Customers Facade
 *
 * High-level API for customers operations.
 * Components should use this facade instead of services directly.
 */
export const customersFacade = {
  /**
   * List Heat Customers
   */
  async getCustomer(...args: Parameters<typeof customersService.getCustomer>): Promise<any> {
    return customersService.getCustomer(...args);
  },
  /**
   * List Building Connections
   */
  async getConnection(...args: Parameters<typeof customersService.getConnection>): Promise<any> {
    return customersService.getConnection(...args);
  },
  /**
   * Register Building Connection
   */
  async createConnection(...args: Parameters<typeof customersService.createConnection>): Promise<any> {
    return customersService.createConnection(...args);
  },
  /**
   * Get Building Connection
   */
  async getConnection(...args: Parameters<typeof customersService.getConnection>): Promise<any> {
    return customersService.getConnection(...args);
  },
  /**
   * List alternative-heating / switch-risk signals
   */
  async getSwitchRiskSignal(...args: Parameters<typeof customersService.getSwitchRiskSignal>): Promise<any> {
    return customersService.getSwitchRiskSignal(...args);
  }
};
