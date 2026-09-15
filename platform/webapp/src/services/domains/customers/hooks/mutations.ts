/**
 * Customers Mutation Hooks
 *
 * React Query hooks for mutating customers data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { customersService } from "../customers.service";
// TODO: Import types
// import type { ... } from "../customers.api-types";

/**
 * Hook to register building connection
 *
 * Automatically invalidates customers queries on success.
 */
export function useCreateConnection() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return customersService.createConnection(data);
    },
    {
      invalidateQueries: [["customers", "Connection"]],
    }
  );
}
