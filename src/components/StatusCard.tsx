import type { StatusResponse } from "@/types/status";

interface StatItemProps {
  label: string;
  value: string;
  icon: string;
}

function StatItem({ label, value, icon }: StatItemProps) {
  return (
    <div className="flex flex-col gap-1 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider mt-1">
        {label}
      </span>
      <span className="text-base font-semibold text-gray-800 break-words">
        {value}
      </span>
    </div>
  );
}

interface StatusCardProps {
  data: StatusResponse;
}

export default function StatusCard({ data }: StatusCardProps) {
  const isUp = data.status === "UP";

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-10 flex flex-col gap-6">

      {/* Header */}
      <div className="text-center flex flex-col items-center gap-2">
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
          maila-maili
        </h1>
        <p className="text-sm text-gray-500">Service Status</p>

        {/* Status badge */}
        <div
          className={`mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${
            isUp
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              isUp ? "bg-green-500 animate-pulse" : "bg-red-500"
            }`}
          />
          {data.status}
        </div>
      </div>

      {/* Stats grid — 2 cols on all screen sizes, clean on mobile */}
      <div className="grid grid-cols-2 gap-3">
        <StatItem icon="⏱️" label="Uptime" value={data.uptime} />
        <StatItem icon="🌍" label="Environment" value={data.environment} />
      </div>

      {/* Fun fact — full width */}
      <div className="p-4 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">💡</span>
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Fun Fact
          </span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{data.funFact}</p>
      </div>

      {/* Footer */}
      <p className="text-center text-xs text-gray-400">
        Data refreshes on every page load
      </p>
    </div>
  );
}
