/**
 * Settlement Mutation Hooks
 *
 * React Query hooks for mutating settlement data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { settlementService } from "../settlement.service";
// TODO: Import types
// import type { ... } from "../settlement.api-types";

/**
 * Hook to ingest condition measurement
 *
 * Automatically invalidates settlement queries on success.
 */
export function useGetConditionMeasurement() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return settlementService.getConditionMeasurement(data);
    },
    {
      invalidateQueries: [["settlement", "ConditionMeasurement"]],
    }
  );
}

/**
 * Hook to issue flat rate invoice
 *
 * Automatically invalidates settlement queries on success.
 */
export function useGetInvoice() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return settlementService.getInvoice(data);
    },
    {
      invalidateQueries: [["settlement", "Invoice"]],
    }
  );
}
