import { Platform } from "@/types";

export const platforms: Platform[] = [
  {
    id: "instagram",
    name: "Instagram",
    icon: "📷",
    color: "#E1306C",
    bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400",
    placeholder: "https://www.instagram.com/reel/...",
  },
  {
    id: "snapchat",
    name: "SnapChat",
    icon: "👻",
    color: "#FFFC00",
    bgColor: "bg-yellow-400",
    placeholder: "https://www.snapchat.com/...",
  },
  {
    id: "twitter",
    name: "Twitter",
    icon: "🐦",
    color: "#1DA1F2",
    bgColor: "bg-blue-400",
    placeholder: "https://twitter.com/.../status/...",
  },
  {
    id: "facebook",
    name: "Facebook",
    icon: "📘",
    color: "#1877F2",
    bgColor: "bg-blue-600",
    placeholder: "https://www.facebook.com/watch/...",
  },
  {
    id: "youtube",
    name: "Youtube",
    icon: "▶️",
    color: "#FF0000",
    bgColor: "bg-red-600",
    placeholder: "https://www.youtube.com/watch?v=...",
  },
  {
    id: "other",
    name: "Other",
    icon: "⋯",
    color: "#666666",
    bgColor: "bg-gray-500",
    placeholder: "Paste any video URL...",
  },
];
