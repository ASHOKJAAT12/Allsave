"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, FolderOpen, Download } from "lucide-react";

export default function GalleryPage() {
  const router = useRouter();

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

      <div className="glass-card p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <FolderOpen size={32} className="text-teal-600" />
          <h1 className="text-2xl font-bold text-gray-800">Gallery</h1>
        </div>

        {/* Empty State */}
        <div className="text-center py-12">
          <Download size={64} className="mx-auto mb-4 text-gray-400" />
          <h2 className="text-xl font-semibold text-gray-700 mb-2">No downloads yet</h2>
          <p className="text-gray-600 mb-6">
            Videos you download will appear here for quick access
          </p>
          <button
            onClick={() => router.push("/")}
            className="btn-primary"
          >
            Browse Platforms
          </button>
        </div>
      </div>
    </main>
  );
}
