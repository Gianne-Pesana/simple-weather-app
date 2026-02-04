"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-transparent">
      <nav className="container mx-auto flex justify-end items-center space-x-4">
        <Link href="/" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 text-lg font-medium">
          Weather
        </Link>
        <Link href="/about" className="text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200 text-lg font-medium">
          About
        </Link>
        <ThemeToggle />
      </nav>
    </header>
  );
}
