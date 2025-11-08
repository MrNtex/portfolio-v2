import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Artur Niemiec - Portfolio",
  description: "My work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-mono`}
      >
        <main className="flex-1 flex flex-col px-6 md:px-0">
          {children}
        </main>
        <footer className="flex items-center justify-end pr-4 py-4 bg-black">
        <p className="text-sm text-right text-zinc-400">
          © 2025 💚 Artur Niemiec.
        </p>
      </footer>
      </body>
    </html>
  );
}
