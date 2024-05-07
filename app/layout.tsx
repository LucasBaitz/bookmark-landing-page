import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const rubik = Rubik({ subsets: ["latin-ext"], weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Bookmark",
  description:
    "Frontend Mentor's Bookmark Landing Page Challenge Developed Using Next.js",
  creator: "Lucas Baitz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
