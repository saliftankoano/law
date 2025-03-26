"use client";

import Image from "next/image";
import Link from "next/link";
import { StaggeredAnimation } from "./staggered-animation";

export function CTASection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/cta-team.jpg"
          alt="Personal Injury Attorneys"
          fill
          className="object-cover brightness-50 object-[center_20%]"
          priority
        />
      </div>

      <div className="relative z-10 px-16 py-24">
        <StaggeredAnimation
          delay={100}
          staggerDelay={150}
          direction="left"
          distance={30}
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-white leading-tight mb-4">
              Injured? Don&apos;t Face It Alone. Get Your Free Case Evaluation
              Today!
            </h2>
            <p className="text-white/90 text-lg mb-8">
              Time is critical in personal injury cases. Contact Davoli &
              Associates now for a no-obligation consultation and learn how we
              can help you receive the compensation you deserve.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </StaggeredAnimation>
      </div>
    </section>
  );
}
