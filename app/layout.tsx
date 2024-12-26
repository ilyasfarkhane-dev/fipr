"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Heder";
import Footer from "@/app/components/Footer";
import { usePathname } from "next/navigation";
import fav from '@/app/favicon.ico'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const showHeader = pathname !== "/sign-in" && pathname !== "/sign-up";

  return (
    <html lang="en">
      <head>
        <link rel="icon" href={fav.src} type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${
          showHeader ? "pt-[4.5rem]" : ""
        }`}
      >
        {showHeader && <Header />}
        {children}
        {showHeader && <Footer />}
      </body>
    </html>
  );
}
