/**
 * Advisory Mutation Hooks
 *
 * React Query hooks for mutating advisory data
 */

import { useTenantMutation } from "@/services/shared/infrastructure";
import { advisoryService } from "../advisory.service";
// TODO: Import types
// import type { ... } from "../advisory.api-types";

/**
 * Hook to issue remediation proposal
 *
 * Automatically invalidates advisory queries on success.
 */
export function useGetRemediationProposal() {
  return useTenantMutation(
    async (orgId: string, data: any) => {
      return advisoryService.getRemediationProposal(data);
    },
    {
      invalidateQueries: [["advisory", "RemediationProposal"]],
    }
  );
}
