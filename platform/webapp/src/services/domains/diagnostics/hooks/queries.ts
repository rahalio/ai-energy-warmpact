/**
 * Diagnostics Query Hooks
 *
 * React Query hooks for fetching diagnostics data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { diagnosticsService } from "../diagnostics.service";

/**
 * Hook to list fault findings
 *
 * Query key: ["diagnostics", "FaultFinding", ]
 */
export function useFaultFinding(params?: Record<string, any>) {
  return useTenantQuery(
    ["diagnostics", "FaultFinding", ],
    async (orgId: string, signal?: AbortSignal) => {
      return diagnosticsService.getFaultFinding(params, signal);
    }
  );
}
