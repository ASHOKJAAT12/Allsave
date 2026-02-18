import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "All In One Video Saver - Download Videos from Any Platform",
  description: "Download videos from Instagram, Snapchat, Twitter, Facebook, YouTube, and more in one click.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans bg-teal-700 min-h-screen antialiased">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </body>
    </html>
  );
}
