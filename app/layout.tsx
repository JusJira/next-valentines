import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const merienda = Merienda({
  subsets: ["latin"],
  variable: '--font-merienda',
});

export const metadata: Metadata = {
  title: "Roses - Send a rose to your loved ones",
  description: "Send a lovely rose to your loved ones for free.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${merienda.variable}`}>
        <main className="min-h-screen bg-[#efcfe3] flex items-center justify-center">{children}</main>
      </body>
      <Toaster />
    </html>
  );
}
