/** Identity wrapper used by generated domain services. */
export function makeService<T extends object>(service: T, _opts?: unknown): T {
  return service;
}
