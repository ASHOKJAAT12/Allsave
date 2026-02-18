"use client";

import Link from "next/link";
import { Platform } from "@/types";
import React from "react";

const platformIcons: Record<string, React.ReactElement> = {
  instagram: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9333EA" />
          <stop offset="50%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#FB923C" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="32" height="32" rx="8" fill="url(#instagramGradient)" />
      <circle cx="24" cy="24" r="7" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="33" cy="15" r="2" fill="white" />
    </svg>
  ),
  snapchat: <span className="text-5xl">👻</span>,
  twitter: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#1DA1F2" />
      <path
        d="M36 16.5c-1 .5-2 .8-3 1 1-.6 1.8-1.5 2-2.6-1 .6-2 1-3.1 1.2-1-1-2.3-1.6-3.9-1.6-3 0-5.4 2.4-5.4 5.4 0 .4 0 .8.1 1.2-4.5-.2-8.5-2.4-11.1-5.6-.5.8-.7 1.7-.7 2.7 0 1.9 1 3.5 2.4 4.5-.8 0-1.6-.2-2.3-.6v.1c0 2.6 1.8 4.8 4.3 5.3-.5.1-.9.2-1.4.2-.3 0-.7 0-1-.1.7 2.1 2.7 3.6 5 3.6-1.8 1.4-4.1 2.2-6.6 2.2-.4 0-.9 0-1.3-.1 2.4 1.5 5.2 2.4 8.2 2.4 9.8 0 15.2-8.1 15.2-15.2v-.7c1.1-.8 2-1.7 2.7-2.8z"
        fill="white"
      />
    </svg>
  ),
  facebook: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="24" cy="24" r="20" fill="#1877F2" />
      <path
        d="M28 25.5h-3v10.5h-4V25.5h-2v-3.5h2v-2c0-3 1.5-4.5 4.5-4.5h3v3.5h-2c-1 0-1.5.5-1.5 1.5v1.5h3.5l-.5 3.5z"
        fill="white"
      />
    </svg>
  ),
  youtube: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <rect x="6" y="12" width="36" height="24" rx="4" fill="#FF0000" />
      <path d="M19 18v12l10-6-10-6z" fill="white" />
    </svg>
  ),
  other: (
    <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
      <circle cx="12" cy="24" r="3" fill="#666666" />
      <circle cx="24" cy="24" r="3" fill="#666666" />
      <circle cx="36" cy="24" r="3" fill="#666666" />
    </svg>
  ),
};

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <Link
      href={`/download/${platform.id}`}
      className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-teal-50 transition-colors duration-200"
    >
      <div className="mb-2">
        {platformIcons[platform.id] || <span className="text-4xl">{platform.icon}</span>}
      </div>
      <span className="text-sm font-medium text-gray-700">{platform.name}</span>
    </Link>
  );
}
