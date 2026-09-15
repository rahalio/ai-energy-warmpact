/**
 * Guarantees Query Hooks
 *
 * React Query hooks for fetching guarantees data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { guaranteesService } from "../guarantees.service";

/**
 * Hook to list condition products
 *
 * Query key: ["guarantees", "ConditionProduct", ]
 */
export function useConditionProduct(params?: Record<string, any>) {
  return useTenantQuery(
    ["guarantees", "ConditionProduct", ],
    async (orgId: string, signal?: AbortSignal) => {
      return guaranteesService.getConditionProduct(params, signal);
    }
  );
}

/**
 * Hook to list condition guarantees
 *
 * Query key: ["guarantees", "Guarantee", ]
 */
export function useGuarantee(params?: Record<string, any>) {
  return useTenantQuery(
    ["guarantees", "Guarantee", ],
    async (orgId: string, signal?: AbortSignal) => {
      return guaranteesService.getGuarantee(params, signal);
    }
  );
}

/**
 * Hook to get safety floors
 *
 * Query key: ["guarantees", "SafetyFloor", ]
 */
export function useSafetyFloor(params?: Record<string, any>) {
  return useTenantQuery(
    ["guarantees", "SafetyFloor", ],
    async (orgId: string, signal?: AbortSignal) => {
      return guaranteesService.getSafetyFloor(params, signal);
    }
  );
}
