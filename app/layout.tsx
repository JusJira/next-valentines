import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });
const merienda = Merienda({
  subsets: ["latin"],
  variable: "--font-merienda",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${merienda.variable} bg-[#efcfe3]`}>
        <main className="h-[100dvh] flex items-center justify-center overflow-hidden relative">
          {children}
          <Analytics />
        </main>
      </body>
      <Toaster />
    </html>
  );
}
