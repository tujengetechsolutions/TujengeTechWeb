import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WhatsappIcon from "@/components/layout/WhatsappIcon";
import { Toaster } from "sonner";
import Navbar from '@/components/ui/Navbar'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default:'TujengeTech | Building Tomorrow Today',
    template: '%s | TujenegeTech'
  },
  description: "Tujenege tech solutions",
};

export default function RootLayout({children,}:{children: React.ReactNode;}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main>
         {children}
        </main>
 
        <Toaster position="top-right" richColors />
        
        <WhatsappIcon />
      </body>
    </html>
  );
}
