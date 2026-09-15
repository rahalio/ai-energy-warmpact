/**
 * Forecasting Domain Facade
 *
 * High-level API for forecasting domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { forecastingService } from "./forecasting.service";
// TODO: Import types
// import type { ... } from "./forecasting.api-types";

/**
 * Forecasting Facade
 *
 * High-level API for forecasting operations.
 * Components should use this facade instead of services directly.
 */
export const forecastingFacade = {
  /**
   * Get Demand Forecast
   */
  async getDemand(...args: Parameters<typeof forecastingService.getDemand>): Promise<any> {
    return forecastingService.getDemand(...args);
  }
};
