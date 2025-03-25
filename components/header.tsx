"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { StaggeredAnimation } from "./staggered-animation";

export function Header() {
  return (
    <header className="absolute w-full top-0 left-0 z-50 flex items-center justify-between px-16 py-6 bg-gradient-to-b from-black/50 to-transparent">
      <div
        className="text-2xl font-bold text-amber-500 opacity-0 animate-fade-in"
        style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
      >
        Lawvare
      </div>

      <nav className="flex items-center space-x-8">
        <StaggeredAnimation
          delay={400}
          staggerDelay={100}
          direction="down"
          distance={12}
          initialOpacity={0}
        >
          <Link
            href="#"
            className="text-white/90 hover:text-amber-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-amber-500 transition-colors"
          >
            About Us
          </Link>
          <Link
            href="#"
            className="text-white/90 hover:text-amber-500 transition-colors"
          >
            Case
          </Link>
          <div className="relative group">
            <button className="flex items-center text-white/90 hover:text-amber-500 transition-colors">
              Page <ChevronDown className="ml-1 w-4 h-4" />
            </button>
          </div>
        </StaggeredAnimation>
      </nav>

      <div
        className="opacity-0 animate-fade-in"
        style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
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
