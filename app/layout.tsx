import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import type { Metadata } from "next"; // Import Metadata type
import ClientLayout from "./components/ClientLayout"; // Import the new ClientLayout

export const metadata: Metadata = {
  title: "AtmosG",
  description: "Get real-time weather updates and forecasts for any city around the globe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
