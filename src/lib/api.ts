import type { StatusResponse } from "@/types/status";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8080";

/**
 * Fetches the current service status from the maila-maili backend.
 * Called as a Next.js Server Component fetch — results are not cached
 * so every page load returns fresh data.
 */
export async function getStatus(): Promise<StatusResponse> {
  const res = await fetch(`${API_BASE_URL}/api/status`, {
    cache: "no-store", // Always fetch fresh — status data changes every request
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch status: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<StatusResponse>;
}
