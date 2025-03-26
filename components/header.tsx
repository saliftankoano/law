"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <header className="absolute w-full top-0 left-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-16 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <div
        className="hover:cursor-pointer text-xl sm:text-2xl font-bold text-amber-500 opacity-0 animate-fade-in"
        style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Davoli & Associates
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden z-50 text-white p-2"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Navigation */}
      <nav
        className="hidden lg:flex items-center space-x-6 xl:space-x-8"
        ref={navRef}
      >
        <Link
          href="/"
          className="text-sm xl:text-base text-white/90 hover:text-amber-500 transition-colors whitespace-nowrap"
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
          href="/about"
          className="text-sm xl:text-base text-white/90 hover:text-amber-500 transition-colors whitespace-nowrap"
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
          href="/expertise"
          className="text-sm xl:text-base text-white/90 hover:text-amber-500 transition-colors whitespace-nowrap"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "600ms",
          }}
        >
          Practice Areas
        </Link>
        <Link
          href="/blog"
          className="text-sm xl:text-base text-white/90 hover:text-amber-500 transition-colors whitespace-nowrap"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(-12px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "700ms",
          }}
        >
          Blog
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 lg:hidden">
          <nav className="flex flex-col items-center justify-center h-full space-y-8">
            <Link
              href="/"
              className="text-white/90 text-2xl hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-white/90 text-2xl hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/expertise"
              className="text-white/90 text-2xl hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Practice Areas
            </Link>
            <Link
              href="/blog"
              className="text-white/90 text-2xl hover:text-amber-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
          </nav>
        </div>
      )}

      <div
        className="hidden lg:block opacity-0 animate-fade-in"
        style={{ animationDelay: "800ms", animationFillMode: "forwards" }}
      >
        <Link
          href="/contact"
          className="px-4 xl:px-6 py-2.5 bg-amber-500 text-black text-sm xl:text-base font-medium rounded-md hover:bg-amber-600 transition-colors whitespace-nowrap"
        >
          Free Consultation
        </Link>
      </div>
    </header>
  );
}
