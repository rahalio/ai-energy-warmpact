/**
 * Underwriting Query Hooks
 *
 * React Query hooks for fetching underwriting data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { underwritingService } from "../underwriting.service";

/**
 * Hook to get underwriting assessment
 *
 * Query key: ["underwriting", "Underwriting", connectionId]
 */
export function useUnderwriting(connectionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["underwriting", "Underwriting", connectionId],
    async (orgId: string, signal?: AbortSignal) => {
      return underwritingService.getUnderwriting(connectionId, params, signal);
    },
    {
      enabled: !!connectionId
    }
  );
}

/**
 * Hook to get building thermal model
 *
 * Query key: ["underwriting", "ThermalModel", connectionId]
 */
export function useThermalModel(connectionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["underwriting", "ThermalModel", connectionId],
    async (orgId: string, signal?: AbortSignal) => {
      return underwritingService.getThermalModel(connectionId, params, signal);
    },
    {
      enabled: !!connectionId
    }
  );
}
