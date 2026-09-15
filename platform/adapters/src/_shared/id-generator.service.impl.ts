/**
 * ID Generator Service Implementation — Warmpact prefixes.
 */

import type { DomainCode } from '@warmpact/core/_shared/helpers';
import { DOMAIN_PREFIX_MAP, isValidDomainId } from '@warmpact/core';
import { ulid } from 'ulid';
import type { IdGeneratorService } from '@warmpact/services/_shared';

export function generateIdWithPrefix(prefix: string): string {
  if (!prefix || prefix.length !== 3 || !/^[a-z]{3}$/.test(prefix)) {
    throw new Error(
      `Invalid domain prefix: "${prefix}". Must be exactly 3 lowercase letters.`
    );
  }
  const id = `${prefix}_${ulid().toLowerCase()}`;
  if (!isValidDomainId(id)) {
    throw new Error(`Generated ID "${id}" failed validation.`);
  }
  return id;
}

export class DefaultIdGeneratorService implements IdGeneratorService {
  tntId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.tenant);
  }
  keyId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.apiKey);
  }
  idnId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.identity);
  }
  autId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.auth);
  }
  cstId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.customers);
  }
  uwrId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.underwriting);
  }
  grtId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.guarantees);
  }
  prcId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.pricing);
  }
  fstId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.forecasting);
  }
  netId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.network);
  }
  diaId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.diagnostics);
  }
  stlId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.settlement);
  }
  advId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.advisory);
  }
  govId(): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP.governance);
  }
  generateIdForDomain(domainCode: DomainCode): string {
    return generateIdWithPrefix(DOMAIN_PREFIX_MAP[domainCode]);
  }
}

let idGeneratorService: DefaultIdGeneratorService | null = null;

export function getIdGeneratorService(): DefaultIdGeneratorService {
  if (!idGeneratorService) {
    idGeneratorService = new DefaultIdGeneratorService();
  }
  return idGeneratorService;
}
