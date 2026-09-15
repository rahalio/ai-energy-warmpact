/**
 * Advisory Domain Facade
 *
 * High-level API for advisory domain operations.
 * Provides simplified interface for components.
 *
 * Architecture:
 * - Facade pattern for domain operations
 * - Components should use facades, not services directly
 * - Hides complexity of domain orchestration
 */

import { advisoryService } from "./advisory.service";
// TODO: Import types
// import type { ... } from "./advisory.api-types";

/**
 * Advisory Facade
 *
 * High-level API for advisory operations.
 * Components should use this facade instead of services directly.
 */
export const advisoryFacade = {
  /**
   * List Remediation Proposals
   */
  async getRemediationProposal(...args: Parameters<typeof advisoryService.getRemediationProposal>): Promise<any> {
    return advisoryService.getRemediationProposal(...args);
  },
  /**
   * Issue Remediation Proposal
   */
  async getRemediationProposal(...args: Parameters<typeof advisoryService.getRemediationProposal>): Promise<any> {
    return advisoryService.getRemediationProposal(...args);
  },
  /**
   * Get Benchmark Cohort
   */
  async getBenchmark(...args: Parameters<typeof advisoryService.getBenchmark>): Promise<any> {
    return advisoryService.getBenchmark(...args);
  },
  /**
   * Get Plain Language Condition Report
   */
  async getConditionReport(...args: Parameters<typeof advisoryService.getConditionReport>): Promise<any> {
    return advisoryService.getConditionReport(...args);
  }
};
