/**
 * Governance Query Hooks
 *
 * React Query hooks for fetching governance data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { governanceService } from "../governance.service";

/**
 * Hook to list carbon intensity records
 *
 * Query key: ["governance", "CarbonIntensity", ]
 */
export function useCarbonIntensity(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "CarbonIntensity", ],
    async (orgId: string, signal?: AbortSignal) => {
      return governanceService.getCarbonIntensity(params, signal);
    }
  );
}

/**
 * Hook to list governance events
 *
 * Query key: ["governance", "Event", ]
 */
export function useEvent(params?: Record<string, any>) {
  return useTenantQuery(
    ["governance", "Event", ],
    async (orgId: string, signal?: AbortSignal) => {
      return governanceService.getEvent(params, signal);
    }
  );
}
