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
          className="object-cover brightness-40"
          priority
          sizes="100vw"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl pt-20">
          <StaggeredAnimation
            delay={450}
            staggerDelay={150}
            direction="up"
            distance={20}
          >
            <h1 className="text-6xl font-bold text-white leading-tight mb-8">
              Fighting For The Compensation You Deserve
            </h1>

            <p className="text-white/90 text-xl mb-10 max-w-2xl">
              Experienced personal injury attorneys helping accident victims
              recover maximum compensation for their injuries and suffering.
            </p>

            <div>
              <Link
                href="#"
                className="inline-block px-8 py-4 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors text-lg"
              >
                Free Case Evaluation
              </Link>
            </div>
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
