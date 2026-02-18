"use client";

import { CloudDownload } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="bg-teal-700 pt-12 pb-20 px-6 text-center text-white">
      <CloudDownload size={72} strokeWidth={1.5} className="mx-auto mb-4" />
      <h1 className="text-2xl font-bold mb-2">All In One Video Saver</h1>
      <p className="text-teal-100 text-sm">Download All Videos in One Click</p>
    </div>
  );
}
