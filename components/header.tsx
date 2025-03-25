"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true); // Auto trigger on mount since this is header
  }, []);

  return (
    <header className="absolute w-full top-0 left-0 z-50 flex items-center justify-between px-16 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <div
        className="text-2xl font-bold text-amber-500 opacity-0 animate-fade-in"
        style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
      >
        Lawvare
      </div>

      <nav className="flex items-center space-x-8" ref={navRef}>
        <Link
          href="#"
          className="text-white/90 hover:text-amber-500 transition-colors"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "400ms",
          }}
        >
          Home
        </Link>
        <Link
          href="#"
          className="text-white/90 hover:text-amber-500 transition-colors"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "500ms",
          }}
        >
          About Us
        </Link>
        <Link
          href="#"
          className="text-white/90 hover:text-amber-500 transition-colors"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "600ms",
          }}
        >
          Case
        </Link>
        <div
          className="relative group"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "700ms",
          }}
        >
          <button className="flex items-center text-white/90 hover:text-amber-500 transition-colors">
            Page <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
      </nav>

      <div
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
      >
        <Link
          href="#"
          className="px-6 py-2.5 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </header>
  );
}
