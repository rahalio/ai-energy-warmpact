/**
 * Advisory Query Hooks
 *
 * React Query hooks for fetching advisory data
 */

import { useTenantQuery } from "@/services/shared/infrastructure";
import { advisoryService } from "../advisory.service";

/**
 * Hook to list remediation proposals
 *
 * Query key: ["advisory", "RemediationProposal", ]
 */
export function useRemediationProposal(params?: Record<string, any>) {
  return useTenantQuery(
    ["advisory", "RemediationProposal", ],
    async (orgId: string, signal?: AbortSignal) => {
      return advisoryService.getRemediationProposal(params, signal);
    }
  );
}

/**
 * Hook to get benchmark cohort
 *
 * Query key: ["advisory", "Benchmark", ]
 */
export function useBenchmark(params?: Record<string, any>) {
  return useTenantQuery(
    ["advisory", "Benchmark", ],
    async (orgId: string, signal?: AbortSignal) => {
      return advisoryService.getBenchmark(params, signal);
    }
  );
}

/**
 * Hook to get plain language condition report
 *
 * Query key: ["advisory", "ConditionReport", ]
 */
export function useConditionReport(params?: Record<string, any>) {
  return useTenantQuery(
    ["advisory", "ConditionReport", ],
    async (orgId: string, signal?: AbortSignal) => {
      return advisoryService.getConditionReport(params, signal);
    }
  );
}
