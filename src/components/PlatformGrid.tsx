"use client";

import { platforms } from "@/lib/platforms";
import PlatformCard from "./PlatformCard";

export default function PlatformGrid() {
  return (
    <div className="glass-card mx-4 -mt-12 relative z-10 p-6">
      <div className="grid grid-cols-3 gap-2">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </div>
    </div>
  );
}
