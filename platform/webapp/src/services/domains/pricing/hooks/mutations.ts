/**
 * Pricing Mutation Hooks
 *
 * React Query hooks for mutating pricing data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { pricingService } from "../pricing.service";
// TODO: Import types
// import type { ... } from "../pricing.api-types";

/**
 * Hook to build flat rate price
 *
 * Automatically invalidates pricing queries on success.
 */
export function useGetFlatRate() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return pricingService.getFlatRate(data);
    },
    {
      invalidateQueries: [["pricing", "FlatRate"]],
    }
  );
}

/**
 * Hook to check price comparability
 *
 * Automatically invalidates pricing queries on success.
 */
export function useGetComparabilityCheck() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return pricingService.getComparabilityCheck(data);
    },
    {
      invalidateQueries: [["pricing", "ComparabilityCheck"]],
    }
  );
}
