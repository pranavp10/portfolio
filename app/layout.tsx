import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type {} from "next";
import NavBar from "@/components/navbar";
import { IconsSprite } from "../components/icon/iconsSprite";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title:
    "Pranav P - Experienced Frontend Developer | JavaScript, React, and UI/UX Specialist with 4 Years of Expertise",
  description:
    "Passionate and results-driven Frontend Developer with four years of experience specializing in JavaScript, React, and UI/UX design. Explore my portfolio for innovative projects and a user-friendly approach to development.",
  keywords: [
    "Frontend Developer",
    "JavaScript",
    "React",
    "UI/UX",
    "Web Development",
    "Portfolio",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Pranav P - Frontend Developer",
    description:
      "Experienced Frontend Developer specializing in JavaScript, React, and UI/UX design. Explore my portfolio for innovative projects and a user-friendly approach to development.",
    url: process.env.PUBLIC_URL,
    type: "website",
    images: "/og-image.png",
    siteName: "Pranav P - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ThatsPranav",
    creator: "@ThatsPranav",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`text-primary-white bg-primary-black ${inter.className}`}
      >
        <div className="px-4 py-2">
          <NavBar />
          {children}
          <IconsSprite />
        </div>
      </body>
    </html>
  );
}
