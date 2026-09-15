/**
 * Forecasting Query Hooks
 *
 * React Query hooks for fetching forecasting data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { forecastingService } from "../forecasting.service";

/**
 * Hook to get demand forecast
 *
 * Query key: ["forecasting", "Demand", ]
 */
export function useDemand(params?: Record<string, any>) {
  return useTenantQuery(
    ["forecasting", "Demand", ],
    async (orgId: string, signal?: AbortSignal) => {
      return forecastingService.getDemand(params, signal);
    }
  );
}
