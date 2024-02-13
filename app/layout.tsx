import type { Metadata } from "next";
import { Inter, Merienda } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });
const merienda = Merienda({
  subsets: ["latin"],
  variable: '--font-merienda',
});

export async function generateMetadata({ params }: { params: { slug: string } }) {
  return {
    title: "Roses - Send a rose to your loved ones",
  description: "Send a lovely rose to your loved ones for free.",
    openGraph: {
      images: [process.env.WEBSITE_URL + '/og']
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${merienda.variable} bg-[#efcfe3]`}>
        <main className="h-[100dvh] flex items-center justify-center overflow-hidden relative">{children}</main>
      </body>
      <Toaster />
    </html>
  );
}
