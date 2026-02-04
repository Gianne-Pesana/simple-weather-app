"use client";

import Header from "./Header";
import ScrollToTopButton from "./ScrollToTopButton";

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <ScrollToTopButton />
    </>
  );
}
