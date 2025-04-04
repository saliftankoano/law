"use client";

import Image from "next/image";
import { StaggeredAnimation } from "./staggered-animation";

export function FeaturesSection() {
  return (
    <section className="px-4 sm:px-8 md:pl-[9.4rem] py-8 sm:py-12 bg-[#e8e3ce]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6 sm:space-y-8">
          <StaggeredAnimation
            delay={100}
            staggerDelay={200}
            direction="left"
            distance={25}
            preserveLayout={false}
          >
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-amber-200 rounded-md shrink-0">
                <Image
                  src="/trophy-icon.svg"
                  alt="Trophy Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="text-black">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  Millions Recovered
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  Our attorneys have successfully recovered millions of dollars
                  in compensation for injured clients across countless cases.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4">
              <div className="p-3 bg-amber-200 rounded-md shrink-0">
                <Image
                  src="/hourglass-icon.svg"
                  alt="Hourglass Icon"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <div className="text-black">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  No Fee Unless We Win
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  We work on a contingency fee basis – you pay nothing unless we
                  secure compensation for your injuries.
                </p>
              </div>
            </div>
          </StaggeredAnimation>
        </div>

        <div className="flex justify-end">
          <StaggeredAnimation delay={300} direction="right" distance={40}>
            <Image
              src="/lady-justice.png"
              alt="Attorney With Client"
              width={600}
              height={900}
              className="object-cover"
              // Image should show a compassionate attorney helping an injured client, possibly reviewing documents together
            />
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
