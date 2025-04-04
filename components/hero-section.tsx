"use client";

import Image from "next/image";
import Link from "next/link";
import { StaggeredAnimation } from "./staggered-animation";

export function HeroSection() {
  return (
    <section className="h-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 w-full h-full opacity-0 animate-fade-in"
        style={{ animationDelay: "250ms", animationFillMode: "forwards" }}
      >
        <Image
          src="/hero.jpg"
          alt="Personal Injury Attorneys"
          fill
          className="object-cover object-[center_70%] brightness-40"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <StaggeredAnimation
            delay={450}
            staggerDelay={150}
            direction="up"
            distance={20}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Fighting For The Compensation You Deserve
            </h1>

            <p className="text-white/90 text-base sm:text-lg md:text-xl mb-6 sm:mb-10 max-w-2xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              Experienced personal injury attorneys helping accident victims
              recover maximum compensation for their injuries and suffering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors text-base sm:text-lg text-center"
              >
                Free Case Evaluation
              </Link>
              <Link
                href="/about"
                className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors text-base sm:text-lg text-center"
              >
                Learn More
              </Link>
            </div>
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
