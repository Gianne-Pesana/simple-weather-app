"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image"; // Import Image for SVG
import { useState } from "react"; // Import useState
import { Menu, X } from "lucide-react"; // Import icons for hamburger menu

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-transparent">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo - Always visible and centered (or left-aligned for mobile) */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-black dark:text-white hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(false)} // Close menu on logo click
        >
          <Image
            src="/assets/weather_icon.svg" // Using weather-icon.svg as placeholder
            alt="AtmosG Logo"
            width={48}
            height={48}
            className="w-10 h-10 stroke-black dark:stroke-white fill-black dark:fill-white"
          />
          <span className="text-2xl font-bold">AtmosG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
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

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black dark:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full right-0 mr-4 w-max max-w-sm bg-white/20 dark:bg-black/20 backdrop-blur-md rounded-xl shadow-lg py-4 px-6">
          <div className="container mx-auto flex flex-col items-center space-y-6">
            <Link
              href="/"
              className="text-black dark:text-white text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300 w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Weather
            </Link>
            <Link
              href="/about"
              className="text-black dark:text-white text-lg font-medium hover:text-gray-700 dark:hover:text-gray-300 w-full text-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="mt-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
