/**
 * Pricing Query Hooks
 *
 * React Query hooks for fetching pricing data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { pricingService } from "../pricing.service";

/**
 * Hook to list price/guarantee revision triggers due
 *
 * Query key: ["pricing", "RevisionTrigger", ]
 */
export function useRevisionTrigger(params?: Record<string, any>) {
  return useTenantQuery(
    ["pricing", "RevisionTrigger", ],
    async (orgId: string, signal?: AbortSignal) => {
      return pricingService.getRevisionTrigger(params, signal);
    }
  );
}
