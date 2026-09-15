/**
 * Settlement Query Hooks
 *
 * React Query hooks for fetching settlement data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { settlementService } from "../settlement.service";

/**
 * Hook to list guarantee breaches
 *
 * Query key: ["settlement", "Breach", ]
 */
export function useBreach(params?: Record<string, any>) {
  return useTenantQuery(
    ["settlement", "Breach", ],
    async (orgId: string, signal?: AbortSignal) => {
      return settlementService.getBreach(params, signal);
    }
  );
}

/**
 * Hook to list flat rate invoices
 *
 * Query key: ["settlement", "Invoice", ]
 */
export function useInvoice(params?: Record<string, any>) {
  return useTenantQuery(
    ["settlement", "Invoice", ],
    async (orgId: string, signal?: AbortSignal) => {
      return settlementService.getInvoice(params, signal);
    }
  );
}

/**
 * Hook to get margin per connection report
 *
 * Query key: ["settlement", "MarginReport", ]
 */
export function useMarginReport(params?: Record<string, any>) {
  return useTenantQuery(
    ["settlement", "MarginReport", ],
    async (orgId: string, signal?: AbortSignal) => {
      return settlementService.getMarginReport(params, signal);
    }
  );
}
