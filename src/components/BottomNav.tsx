"use client";

import Link from "next/link";
import { Image, Info, Share2, Star } from "lucide-react";

const navItems = [
  {
    label: "Gallery",
    href: "/gallery",
    icon: Image,
    color: "text-teal-600",
  },
  {
    label: "About Us",
    href: "/about",
    icon: Info,
    color: "text-purple-500",
  },
  {
    label: "Share App",
    href: "#share",
    icon: Share2,
    color: "text-blue-500",
    action: "share",
  },
  {
    label: "Rate App",
    href: "#rate",
    icon: Star,
    color: "text-yellow-500",
    action: "rate",
  },
];

export default function BottomNav() {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "All In One Video Saver",
          text: "Download videos from Instagram, Snapchat, Twitter, Facebook, YouTube, and more!",
          url: window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported on this device");
    }
  };

  const handleRate = () => {
    alert("Thank you for your interest! Rating feature coming soon.");
  };

  const handleClick = (action?: string) => {
    if (action === "share") {
      handleShare();
    } else if (action === "rate") {
      handleRate();
    }
  };

  return (
    <div className="glass-card mx-4 mt-8 p-4">
      <div className="flex justify-around items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          if (item.action) {
            return (
              <button
                key={item.label}
                onClick={() => handleClick(item.action)}
                className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
              >
                <Icon size={24} className={item.color} />
                <span className="text-xs text-gray-600">{item.label}</span>
              </button>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Icon size={24} className={item.color} />
              <span className="text-xs text-gray-600">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
