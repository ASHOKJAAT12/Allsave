"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, CloudDownload, CheckCircle } from "lucide-react";

const supportedPlatforms = [
  "Instagram (Reels, Posts, Stories)",
  "Snapchat",
  "Twitter/X (Videos, GIFs)",
  "Facebook (Watch, Videos)",
  "YouTube (Videos, Shorts)",
  "And many more...",
];

const features = [
  "Fast and easy video downloads",
  "Multiple platform support",
  "High-quality video downloads",
  "No watermarks",
  "Free to use",
  "Mobile-friendly interface",
];

export default function AboutPage() {
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
        {/* App Icon and Title */}
        <div className="text-center mb-6">
          <CloudDownload size={64} className="mx-auto mb-4 text-teal-600" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">All In One Video Saver</h1>
          <p className="text-sm text-gray-600">Version 1.0.0</p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">About</h2>
          <p className="text-gray-700 leading-relaxed">
            All In One Video Saver is your ultimate solution for downloading videos from multiple
            social media platforms. Save your favorite videos from Instagram, Snapchat, Twitter,
            Facebook, YouTube, and more with just one click!
          </p>
        </div>

        {/* Supported Platforms */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Supported Platforms</h2>
          <ul className="space-y-2">
            {supportedPlatforms.map((platform, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{platform}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Features */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Features</h2>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <CheckCircle size={20} className="text-teal-600 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 pt-4 border-t border-gray-200">
          <p>Made with ❤️ for video enthusiasts</p>
        </div>
      </div>
    </main>
  );
}
