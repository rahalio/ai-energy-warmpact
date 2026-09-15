/**
 * Guarantees Mutation Hooks
 *
 * React Query hooks for mutating guarantees data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { guaranteesService } from "../guarantees.service";
// TODO: Import types
// import type { ... } from "../guarantees.api-types";

/**
 * Hook to create condition product
 *
 * Automatically invalidates guarantees queries on success.
 */
export function useCreateConditionProduct() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return guaranteesService.createConditionProduct(data);
    },
    {
      invalidateQueries: [["guarantees", "ConditionProduct"]],
    }
  );
}

/**
 * Hook to offer condition guarantee
 *
 * Automatically invalidates guarantees queries on success.
 */
export function useGetGuarantee() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return guaranteesService.getGuarantee(data);
    },
    {
      invalidateQueries: [["guarantees", "Guarantee"]],
    }
  );
}

/**
 * Hook to release exit package
 *
 * Automatically invalidates guarantees queries on success.
 */
export function useGetExitPackage() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return guaranteesService.getExitPackage(data);
    },
    {
      invalidateQueries: [["guarantees", "ExitPackage"]],
    }
  );
}

/**
 * Hook to attempt to override a safety floor (always refused and logged)
 *
 * Automatically invalidates guarantees queries on success.
 */
export function useGetOverrideAttempt() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return guaranteesService.getOverrideAttempt(data);
    },
    {
      invalidateQueries: [["guarantees", "OverrideAttempt"]],
    }
  );
}
