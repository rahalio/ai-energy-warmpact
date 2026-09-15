const ORG_KEY = "warmpact.orgId";

export function getEffectiveOrgId(): string {
  return localStorage.getItem(ORG_KEY) || "tnt_demo";
}

export function setEffectiveOrgId(orgId: string) {
  localStorage.setItem(ORG_KEY, orgId);
}
