/**
 * IdGeneratorService Port — Warmpact domain prefixes.
 */

import type { DomainCode } from '@warmpact/core/_shared/helpers';

export interface IdGeneratorService {
  tntId(): string;
  keyId(): string;
  idnId(): string;
  autId(): string;
  cstId(): string;
  uwrId(): string;
  grtId(): string;
  prcId(): string;
  fstId(): string;
  netId(): string;
  diaId(): string;
  stlId(): string;
  advId(): string;
  govId(): string;
  generateIdForDomain(domainCode: DomainCode): string;
}
