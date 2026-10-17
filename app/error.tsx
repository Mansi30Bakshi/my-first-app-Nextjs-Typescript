"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center border border-slate-200">
        
        <div className="text-5xl mb-4">⚠️</div>
        
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Oops! Kuch galat ho gaya
        </h2>
        
        <p className="text-slate-600 mb-6 text-sm">
          {error.message || "Please try again later."}
        </p>
        
        <button
          onClick={() => reset()}
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition"
        >
          Try Again
        </button>
        
      </div>
    </div>
  );
}