"use client";

import { useEffect, useState } from "react";
import { ArrowUp, Shield } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-[#12131a]/90 backdrop-blur-md border border-red-500/40 text-red-400 shadow-[0_0_20px_rgba(255,30,68,0.35)] hover:shadow-[0_0_30px_rgba(255,30,68,0.7)] hover:bg-red-950/80 hover:text-white hover:scale-110 active:scale-95 transition-all cursor-pointer group"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
    </button>
  );
}