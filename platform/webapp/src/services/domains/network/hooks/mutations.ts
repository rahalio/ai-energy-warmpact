/**
 * Network Mutation Hooks
 *
 * React Query hooks for mutating network data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { networkService } from "../network.service";
// TODO: Import types
// import type { ... } from "../network.api-types";

/**
 * Hook to issue supply temperature setpoint
 *
 * Automatically invalidates network queries on success.
 */
export function useGetSetpoint() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return networkService.getSetpoint(data);
    },
    {
      invalidateQueries: [["network", "Setpoint"]],
    }
  );
}

/**
 * Hook to ingest return temperature record
 *
 * Automatically invalidates network queries on success.
 */
export function useGetReturnTemperature() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return networkService.getReturnTemperature(data);
    },
    {
      invalidateQueries: [["network", "ReturnTemperature"]],
    }
  );
}
