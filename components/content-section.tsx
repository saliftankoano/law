"use client";

import Link from "next/link";
import Image from "next/image";
import { StaggeredAnimation } from "@/components/staggered-animation";

export function ContentSection() {
  return (
    <section className="px-16 py-16 bg-[#e8e3ce]">
      <div className="max-w-6xl mx-auto mb-12">
        <StaggeredAnimation
          delay={100}
          staggerDelay={150}
          direction="up"
          distance={20}
        >
          <h2 className="text-3xl font-bold text-black mb-6 text-center">
            Advocating For Injury Victims With Compassion And Determination
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
            Davoli & Associates fights tirelessly for personal injury victims.
            Our experienced attorneys have recovered millions in compensation
            for our clients, providing personalized attention to every case.
          </p>
        </StaggeredAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="relative">
          <StaggeredAnimation
            delay={300}
            staggerDelay={200}
            direction="right"
            distance={30}
          >
            <div className="aspect-[4/3] relative rounded-md overflow-hidden shadow-lg">
              <Image
                src="/protect.jpg"
                alt="Attorney Consulting with Client"
                fill
                className="object-cover hover:scale-105 transition-all duration-300"
              />
            </div>
          </StaggeredAnimation>
        </div>

        <div>
          <StaggeredAnimation
            delay={500}
            staggerDelay={100}
            direction="up"
            distance={15}
            initialOpacity={0}
          >
            <h3 className="text-2xl font-bold mb-6">Our Success Metrics</h3>
            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Car Accident</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-white h-1">
                <div className="bg-black h-1 animate-progress-90"></div>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Premises Liability</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white h-1">
                <div className="bg-black h-1 animate-progress-80"></div>
              </div>
            </div>

            <div className="mb-8">
              <div className="flex justify-between mb-1">
                <span className="font-medium">Medical Malpractice</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-white h-1">
                <div className="bg-black h-1 animate-progress-75"></div>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/expertise"
                className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
              >
                Explore Our Practice Areas
              </Link>
            </div>
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
