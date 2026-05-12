/**
 * Mirrors the StatusResponse data class from the BE.
 * Keep in sync with:
 *   com.lamamili.mailamaili.model.StatusResponse
 */
export interface StatusResponse {
  status: string;
  uptime: string;
  environment: string;
  funFact: string;
}
