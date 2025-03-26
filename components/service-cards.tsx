"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";

export function ServiceCards() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

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

    const currentContainer = containerRef.current;

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
    <div
      ref={containerRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8"
    >
      <div
        className="relative overflow-hidden rounded-lg h-[280px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(15px)",
          transition:
            "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: isVisible ? "400ms" : "0ms",
        }}
      >
        <Image
          src="/litigate.jpg"
          alt="Auto Accidents"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 p-5 flex flex-col justify-end">
          <h3 className="text-lg font-bold text-white mb-2">Auto Accidents</h3>
          <p className="text-white/80 text-sm line-clamp-2">
            We fight aggressively for victims of car, truck, and motorcycle
            accidents to secure the compensation needed for recovery.
          </p>
        </div>
      </div>

      <div
        className="relative overflow-hidden rounded-lg h-[280px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "none" : "translateY(15px)",
          transition:
            "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)",
          transitionDelay: isVisible ? "550ms" : "0ms",
        }}
      >
        <Image
          src="/justice-table.jpg"
          alt="Slip and Fall Accidents"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 p-5 flex flex-col justify-end">
          <h3 className="text-lg font-bold text-white mb-2">
            Slip and Fall Accidents
          </h3>
          <p className="text-white/80 text-sm line-clamp-2">
            When property owners neglect safety, we help injured victims prove
            negligence and recover damages for their injuries.
          </p>
        </div>
      </div>
    </div>
  );
}
