import { getStatus } from "@/lib/api";
import StatusCard from "@/components/StatusCard";

/**
 * Server Component — fetches status data on the server on every request.
 * No client-side JS needed for the data fetch, which means:
 * - Works great for SSR (future SEO, fast initial paint)
 * - Easy to port the fetch logic to React Native later
 */
export default async function Home() {
  const status = await getStatus();

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <StatusCard data={status} />
    </main>
  );
}
