/**
 * Diagnostics Mutation Hooks
 *
 * React Query hooks for mutating diagnostics data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { diagnosticsService } from "../diagnostics.service";
// TODO: Import types
// import type { ... } from "../diagnostics.api-types";

/**
 * Hook to dispatch work order
 *
 * Automatically invalidates diagnostics queries on success.
 */
export function useGetWorkOrder() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return diagnosticsService.getWorkOrder(data);
    },
    {
      invalidateQueries: [["diagnostics", "WorkOrder"]],
    }
  );
}
