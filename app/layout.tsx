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
  metadataBase: new URL(process.env.WEBSITE_URL as string),

  title: {
    default: "Tujenge Tech Solutions",
    template: "%s | Tujenge Tech Solutions",
  },
  description:
    "Tujenge Tech Solutions is a technology company dedicated to creating innovative, tech-driven solutions for building a better tomorrow, today.",

  keywords: [
    "technology solutions",
    "software development",
    "tech company",
    "innovation",
  ],

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Tujenge Tech Solutions",
    title: "Tujenge Tech Solutions",
    description:
      "Tujenge Tech Solutions is a technology company dedicated to creating innovative, tech-driven solutions for building a better tomorrow, today.",
    // images: [
    //   {
    //     url: "/og-image.jpg", // Place this image in your public folder
    //     width: 1200,
    //     height: 630,
    //     alt: "Tujenge Tech Solutions Hero Image",
    //   },
    // ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tujenge Tech Solutions",
    description:
      "Tujenge Tech Solutions is a technology company dedicated to creating innovative, tech-driven solutions for building a better tomorrow, today.",
    // images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
