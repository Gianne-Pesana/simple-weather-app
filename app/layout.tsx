"use client";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
// Removed BackgroundWrapper import
import Header from "./components/Header"; // Import the new Header component


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <Header /> {/* Use the new Header component */}
        {children}
      </body>
    </html>
  );
}
