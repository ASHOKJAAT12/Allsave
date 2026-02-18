"use client";

import { useParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { platforms } from "@/lib/platforms";
import DownloadForm from "@/components/DownloadForm";

export default function DownloadPage() {
  const params = useParams();
  const router = useRouter();
  const platformId = params.platform as string;

  const platform = platforms.find((p) => p.id === platformId);

  if (!platform) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="glass-card p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Platform Not Found</h1>
          <p className="text-gray-600 mb-4">The requested platform does not exist.</p>
          <button
            onClick={() => router.push("/")}
            className="btn-primary"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen p-4">
      {/* Back Button Header */}
      <div className="mb-6">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 text-white hover:text-teal-100 transition-colors"
        >
          <ArrowLeft size={24} />
          <span className="font-semibold">Back</span>
        </button>
      </div>

      <DownloadForm platform={platform} />
    </main>
  );
}
