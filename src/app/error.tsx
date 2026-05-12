"use client";

interface ErrorProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm text-center flex flex-col items-center gap-4">
        <span className="text-5xl">⚠️</span>
        <h2 className="text-lg font-semibold text-gray-800">
          Could not reach the service
        </h2>
        <p className="text-sm text-gray-500">{error.message}</p>
        <button
          onClick={reset}
          className="mt-2 px-5 py-2 bg-gray-900 text-white text-sm font-medium rounded-xl hover:bg-gray-700 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
