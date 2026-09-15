/**
 * Network Query Hooks
 *
 * React Query hooks for fetching network data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { networkService } from "../network.service";

/**
 * Hook to list supply temperature setpoints
 *
 * Query key: ["network", "Setpoint", ]
 */
export function useSetpoint(params?: Record<string, any>) {
  return useTenantQuery(
    ["network", "Setpoint", ],
    async (orgId: string, signal?: AbortSignal) => {
      return networkService.getSetpoint(params, signal);
    }
  );
}

/**
 * Hook to list return temperature records
 *
 * Query key: ["network", "ReturnTemperature", ]
 */
export function useReturnTemperature(params?: Record<string, any>) {
  return useTenantQuery(
    ["network", "ReturnTemperature", ],
    async (orgId: string, signal?: AbortSignal) => {
      return networkService.getReturnTemperature(params, signal);
    }
  );
}

/**
 * Hook to list connections that bind the next supply temperature drop
 *
 * Query key: ["network", "BindingConnection", ]
 */
export function useBindingConnection(params?: Record<string, any>) {
  return useTenantQuery(
    ["network", "BindingConnection", ],
    async (orgId: string, signal?: AbortSignal) => {
      return networkService.getBindingConnection(params, signal);
    }
  );
}
