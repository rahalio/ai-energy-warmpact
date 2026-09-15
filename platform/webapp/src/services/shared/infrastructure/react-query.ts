/**
 * React Query helpers used by generated domain hooks.
 */

import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from "@tanstack/react-query";
import { getEffectiveOrgId } from "./tenant-state";

export function useTenantQuery<T>(
  queryKey: unknown[],
  queryFn: (orgId: string, signal?: AbortSignal) => Promise<T>,
  options?: Omit<UseQueryOptions<T, Error, T, unknown[]>, "queryKey" | "queryFn">
) {
  const orgId = getEffectiveOrgId();
  return useQuery({
    queryKey: [...queryKey, orgId],
    queryFn: ({ signal }) => queryFn(orgId, signal),
    enabled: Boolean(orgId) && (options?.enabled ?? true),
    ...options,
  });
}

export function useTenantMutation<TData = unknown, TVariables = void>(
  mutationFn: (variables: TVariables, orgId: string) => Promise<TData>,
  options?: UseMutationOptions<TData, Error, TVariables>
) {
  const orgId = getEffectiveOrgId();
  return useMutation({
    mutationFn: (variables: TVariables) => mutationFn(variables, orgId),
    ...options,
  });
}
