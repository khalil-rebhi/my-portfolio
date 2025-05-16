"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 bg-primary cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-secondary-glow hover:text-tertiary transition-all md:p-4 md:bottom-8 md:right-8"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="w-4 h-4 md:w-5 md:h-5" />
      </button>
    )
  );
}
