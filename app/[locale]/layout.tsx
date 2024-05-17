import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { Arbutus_Slab, Poppins } from "next/font/google";
import Navbar from "@/components/Navigation/Navbar";
import Footer from "@/components/Footer/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics/GoogleAnalitics";

const arbutus = Arbutus_Slab({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-arbutus",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Villa Relax",
  description:
    "Welcome to Villa Relax, your luxurious accommodation in Pula. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
  icons: {
    icon: "/assets/images/logo.png",
  },
  generator: "Next.js",
  applicationName: "Accommodation Villa Relax",
  referrer: "origin-when-cross-origin",
  keywords: ["Accommodation", "Villa Relax", "Pula", "Istria", "Croatia"],
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    type: "website",
    title: "Accommodation Villa Relax - Pula",
    description:
      "Welcome to Villa Relax, your luxurious accommodation in Pula. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    url: "https://villarelaxistra.com",
  },
  twitter: {
    card: "summary_large_image",
    // site: "@YourTwitterHandle",
    title: "Accommodation Villa Relax - Pula",
    description:
      "Welcome to Villa Relax, your luxurious accommodation in Pula. Experience breathtaking views, modern amenities, and personalized service. ⭐⭐⭐⭐⭐",
    images: [
      {
        url: "https://www.villarelaxpula.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmain.72f90314.jpg&w=3840&q=75",
        alt: "Villa Relax",
      },
    ],
  },
  authors: [
    { name: "Boost Web" },
    { name: "Boost Web", url: "https://boostweb.io" },
  ],
  creator: "Boost Web",
  publisher: "Boost Web",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <GoogleAnalytics />
      <body
        className={`${poppins.variable} font-poppins ${arbutus.variable} font-arbutus`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
