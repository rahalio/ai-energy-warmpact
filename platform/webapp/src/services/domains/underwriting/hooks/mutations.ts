/**
 * Underwriting Mutation Hooks
 *
 * React Query hooks for mutating underwriting data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { underwritingService } from "../underwriting.service";
// TODO: Import types
// import type { ... } from "../underwriting.api-types";

/**
 * Hook to underwrite building connection
 *
 * Automatically invalidates underwriting queries on success.
 */
export function useGetUnderwriting() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return underwritingService.getUnderwriting(data);
    },
    {
      invalidateQueries: [["underwriting", "Underwriting"]],
    }
  );
}
