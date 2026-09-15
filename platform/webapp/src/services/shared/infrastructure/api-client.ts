/**
 * Warmpact API client — normalizes codegen org-prefixed URLs to /v0|/v1 paths.
 */

const API_KEY_STORAGE = "warmpact.apiKey";
const TOKEN_STORAGE = "warmpact.accessToken";

export function getApiKey(): string {
  return localStorage.getItem(API_KEY_STORAGE) || "warmpact_demo_local_dev_key";
}

export function setApiKey(key: string) {
  localStorage.setItem(API_KEY_STORAGE, key);
}

export function getAccessToken(): string | null {
  return localStorage.getItem(TOKEN_STORAGE);
}

export function setAccessToken(token: string | null) {
  if (token) localStorage.setItem(TOKEN_STORAGE, token);
  else localStorage.removeItem(TOKEN_STORAGE);
}

function normalizeUrl(url: string): string {
  // /orgs/{id}//v1/foo -> /v1/foo ; /orgs/{id}/v0/... -> /v0/...
  const m = url.match(/\/orgs\/[^/]+\/+((?:v0|v1)\/.*)/);
  if (m) return "/" + m[1].replace(/^\/+/, "");
  return url.replace(/([^:]\/)\/+/g, "$1");
}

export type ApiResponse<T> = { data: T; meta?: Record<string, unknown> };

async function request<T>(
  method: string,
  url: string,
  options?: { body?: unknown; signal?: AbortSignal; headers?: Record<string, string> }
): Promise<ApiResponse<T>> {
  const path = normalizeUrl(url);
  const headers: Record<string, string> = {
    Accept: "application/json",
    "X-API-Key": getApiKey(),
    ...(options?.headers || {}),
  };
  const token = getAccessToken();
  if (token) headers.Authorization = `Bearer ${token}`;
  if (options?.body !== undefined) headers["Content-Type"] = "application/json";

  const res = await fetch(path, {
    method,
    headers,
    body: options?.body !== undefined ? JSON.stringify(options.body) : undefined,
    signal: options?.signal,
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`${method} ${path} failed: ${res.status} ${text}`);
  }

  if (res.status === 204) return { data: undefined as T };
  const json = await res.json();
  if (json && typeof json === "object" && "data" in json) {
    return json as ApiResponse<T>;
  }
  return { data: json as T };
}

export const apiClient = {
  get: <T>(url: string, options?: { signal?: AbortSignal; headers?: Record<string, string> }) =>
    request<T>("GET", url, options),
  post: <T>(url: string, options?: { body?: unknown; signal?: AbortSignal; headers?: Record<string, string> }) =>
    request<T>("POST", url, options),
  put: <T>(url: string, options?: { body?: unknown; signal?: AbortSignal; headers?: Record<string, string> }) =>
    request<T>("PUT", url, options),
  patch: <T>(url: string, options?: { body?: unknown; signal?: AbortSignal; headers?: Record<string, string> }) =>
    request<T>("PATCH", url, options),
  delete: <T>(url: string, options?: { signal?: AbortSignal; headers?: Record<string, string> }) =>
    request<T>("DELETE", url, options),
};
