"use client";

import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import BackgroundWrapper from "./components/BackgroundWrapper"; // Import BackgroundWrapper
import Header from "./components/Header"; // Import the new Header component


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <BackgroundWrapper condition={null}> {/* Wrap children with BackgroundWrapper, pass null or default condition */}
          <Header /> {/* Use the new Header component */}
          <div className="pt-24"> {/* Added padding-top to account for fixed header */}
            {children}
          </div>
        </BackgroundWrapper>
      </body>
    </html>
  );
}
