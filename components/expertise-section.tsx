"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { StaggeredAnimation } from "./staggered-animation";

export function ExpertiseSection() {
  const [isVisible, setIsVisible] = useState(false);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentContainer = cardsRef.current;

    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, []);

  return (
    <section className="px-16 py-16 bg-[#1a2e1a] text-white">
      <StaggeredAnimation
        delay={100}
        staggerDelay={200}
        direction="up"
        distance={20}
        preserveLayout={true}
      >
        <h2 className="text-4xl font-bold mb-6">Practice Areas</h2>
        <p className="max-w-2xl mb-8">
          At Davoli & Associates, we focus exclusively on personal injury cases,
          allowing us to provide specialized representation for victims of
          negligence and misconduct.
        </p>

        <div className="flex justify-start mb-12">
          <Link
            href="#"
            className="px-6 py-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            View All Practice Areas
          </Link>
        </div>
      </StaggeredAnimation>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <div
          className="bg-[#243824] p-6 rounded-md"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isVisible ? "300ms" : "0ms",
          }}
        >
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image
              src="/car-accident.svg"
              alt="Car Accident Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-bold mb-3">Auto Accidents</h3>
          <p className="text-white/80 mb-6 text-sm">
            Comprehensive representation for victims of car, truck, motorcycle,
            and rideshare accidents, fighting for full compensation.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div
          className="bg-[#243824] p-6 rounded-md"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isVisible ? "450ms" : "0ms",
          }}
        >
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image
              src="/healthcare-icon.svg"
              alt="Medical Malpractice Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-bold mb-3">Medical Malpractice</h3>
          <p className="text-white/80 mb-6 text-sm">
            Holding healthcare professionals accountable for errors,
            misdiagnosis, surgical mistakes, and improper treatment.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div
          className="bg-[#243824] p-6 rounded-md"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isVisible ? "600ms" : "0ms",
          }}
        >
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image
              src="/slip-and-fall.svg"
              alt="Slip and Fall Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-bold mb-3">Premises Liability</h3>
          <p className="text-white/80 mb-6 text-sm">
            Representing clients injured due to unsafe property conditions,
            including slip and falls, inadequate security, and hazardous
            environments.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div
          className="bg-[#243824] p-6 rounded-md"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "none" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: isVisible ? "750ms" : "0ms",
          }}
        >
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image
              src="/tombstone.svg"
              alt="Wrongful Death Icon"
              width={24}
              height={24}
              className="w-6 h-6"
            />
          </div>
          <h3 className="text-xl font-bold mb-3">Wrongful Death</h3>
          <p className="text-white/80 mb-6 text-sm">
            Compassionate support for families who have lost loved ones due to
            negligence, seeking justice and financial security for survivors.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
