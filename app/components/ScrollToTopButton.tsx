"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) { // Show button if scrolled down more than 300px
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showButton) return null;

  return (
    <>
      {/* Desktop Button */}
      <button
        onClick={handleClick}
        className="hidden md:block fixed bottom-8 right-8 bg-black/50 text-white dark:bg-white/50 dark:text-black p-3 rounded-full shadow-lg hover:bg-black/70 dark:hover:bg-white/70 transition-colors duration-200 z-40"
      >
        Back to Top
      </button>

      {/* Mobile Button */}
      <button
        onClick={handleClick}
        className="md:hidden fixed bottom-8 left-1/2 -translate-x-1/2 bg-black/50 text-white dark:bg-white/50 dark:text-black p-3 rounded-full shadow-lg hover:bg-black/70 dark:hover:bg-white/70 transition-colors duration-200 z-40"
      >
        <ChevronUp size={24} />
      </button>
    </>
  );
}
