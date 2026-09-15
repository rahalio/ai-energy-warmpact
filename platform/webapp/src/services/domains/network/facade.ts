/**
 * Network Domain Facade
 *
 * High-level API for network domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { networkService } from "./network.service";
// TODO: Import types
// import type { ... } from "./network.api-types";

/**
 * Network Facade
 *
 * High-level API for network operations.
 * Components should use this facade instead of services directly.
 */
export const networkFacade = {
  /**
   * List Supply Temperature Setpoints
   */
  async getSetpoint(...args: Parameters<typeof networkService.getSetpoint>): Promise<any> {
    return networkService.getSetpoint(...args);
  },
  /**
   * Issue Supply Temperature Setpoint
   */
  async getSetpoint(...args: Parameters<typeof networkService.getSetpoint>): Promise<any> {
    return networkService.getSetpoint(...args);
  },
  /**
   * List Return Temperature Records
   */
  async getReturnTemperature(...args: Parameters<typeof networkService.getReturnTemperature>): Promise<any> {
    return networkService.getReturnTemperature(...args);
  },
  /**
   * Ingest Return Temperature Record
   */
  async getReturnTemperature(...args: Parameters<typeof networkService.getReturnTemperature>): Promise<any> {
    return networkService.getReturnTemperature(...args);
  },
  /**
   * List connections that bind the next supply temperature drop
   */
  async getBindingConnection(...args: Parameters<typeof networkService.getBindingConnection>): Promise<any> {
    return networkService.getBindingConnection(...args);
  }
};
