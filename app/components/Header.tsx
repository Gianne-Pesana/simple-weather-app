"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const pathname = usePathname(); // Get current pathname

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  useEffect(() => {
    const scrollThreshold = isSmallScreen ? 50 : 100;

    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
          setIsVisible(false);
        } else if (window.scrollY < scrollThreshold) {
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, isSmallScreen]);

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return `text-lg font-medium transition-colors duration-200 
            ${isActive ? 'text-accent-light dark:text-accent-dark' : 'text-black dark:text-white'} 
            hover:text-accent-light dark:hover:text-accent-dark`;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 p-4 md:p-6 bg-transparent transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo - Always visible and centered (or left-aligned for mobile) */}
        <Link
          href="/"
          className="flex items-center space-x-2 text-black dark:text-white hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/assets/weather_icon.svg"
            alt="AtmosG Logo"
            width={48}
            height={48}
            className="w-10 h-10 stroke-black dark:stroke-white fill-black dark:fill-white"
          />
          <span className="text-2xl font-bold">AtmosG</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/" className={getLinkClasses("/")}>
            Weather
          </Link>
          <Link href="/about" className={getLinkClasses("/about")}>
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
              className={`${getLinkClasses("/")} w-full text-center`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Weather
            </Link>
            <Link
              href="/about"
              className={`${getLinkClasses("/about")} w-full text-center`}
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
