"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image"; // Import Image for SVG

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-transparent">
      <nav className="relative container mx-auto flex justify-center items-center">
        {/* Left placeholder (kept empty or for future use) */}
        <div className="absolute left-0 flex items-center">
          {/* Optional: put something here later */}
        </div>

        {/* Centered Logo */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
        >
          <Image
            src="/assets/weather_icon.svg"
            alt="AtmosG Logo"
            width={48}
            height={48}
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold">AtmosG</span>
        </Link>

        {/* Right Navigation */}
        <div className="absolute right-0 flex items-center space-x-4">
          <Link
            href="/"
            className="text-black dark:text-white text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300"
          >
            Weather
          </Link>
          <Link
            href="/about"
            className="text-black dark:text-white text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300"
          >
            About
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
