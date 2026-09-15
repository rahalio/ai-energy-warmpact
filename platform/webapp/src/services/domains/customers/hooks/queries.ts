/**
 * Customers Query Hooks
 *
 * React Query hooks for fetching customers data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { customersService } from "../customers.service";

/**
 * Hook to list heat customers
 *
 * Query key: ["customers", "Customer", ]
 */
export function useCustomer(params?: Record<string, any>) {
  return useTenantQuery(
    ["customers", "Customer", ],
    async (orgId: string, signal?: AbortSignal) => {
      return customersService.getCustomer(params, signal);
    }
  );
}

/**
 * Hook to list building connections
 *
 * Query key: ["customers", "Connection", ]
 */
export function useConnection(params?: Record<string, any>) {
  return useTenantQuery(
    ["customers", "Connection", ],
    async (orgId: string, signal?: AbortSignal) => {
      return customersService.getConnection(params, signal);
    }
  );
}

/**
 * Hook to get building connection
 *
 * Query key: ["customers", "Connection", connectionId]
 */
export function useConnection(connectionId: string, params?: Record<string, any>) {
  return useTenantQuery(
    ["customers", "Connection", connectionId],
    async (orgId: string, signal?: AbortSignal) => {
      return customersService.getConnection(connectionId, params, signal);
    },
    {
      enabled: !!connectionId
    }
  );
}

/**
 * Hook to list alternative-heating / switch-risk signals
 *
 * Query key: ["customers", "SwitchRiskSignal", ]
 */
export function useSwitchRiskSignal(params?: Record<string, any>) {
  return useTenantQuery(
    ["customers", "SwitchRiskSignal", ],
    async (orgId: string, signal?: AbortSignal) => {
      return customersService.getSwitchRiskSignal(params, signal);
    }
  );
}
