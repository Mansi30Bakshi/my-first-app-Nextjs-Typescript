import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mansi's App",
  description: "Learning Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav className="flex items-center justify-center gap-6 py-4 bg-slate-700 text-white">
          <Link href="/" className="hover:text-blue-400">Home</Link>
          <Link href="/About" className="hover:text-blue-400">About</Link>
          <Link href="/Contact" className="hover:text-blue-400">Contact</Link>
        </nav>
        {children}</body>
    </html>
  );
}
