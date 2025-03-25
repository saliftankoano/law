"use client";

import Image from "next/image";
import { StaggeredAnimation } from "./staggered-animation";

export function FeaturesSection() {
  return (
    <section className="px-16 py-6 bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <StaggeredAnimation
            delay={100}
            staggerDelay={200}
            direction="left"
            distance={25}
            preserveLayout={false}
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-200 rounded-md">
                <Image
                  src="/trophy-icon.svg"
                  alt="Trophy Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="text-black">
                <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
                <p className="text-gray-700">
                  Our history of successful cases demonstrates our expertise and
                  commitment to excellence
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-amber-200 rounded-md">
                <Image
                  src="/hourglass-icon.svg"
                  alt="Hourglass Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="text-black">
                <h3 className="text-xl font-bold mb-2">
                  24/7 Support Availability
                </h3>
                <p className="text-gray-700">
                  We&apos;re always here to assist, offering round-the-clock
                  support for your legal needs.
                </p>
              </div>
            </div>
          </StaggeredAnimation>
        </div>

        <div className="flex justify-end">
          <StaggeredAnimation delay={300} direction="right" distance={40}>
            <Image
              src="/lady-justice.png"
              alt="Lady Justice Statue"
              width={600}
              height={900}
              className="object-cover"
            />
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
