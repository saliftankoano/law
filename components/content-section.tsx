"use client";

import Image from "next/image";
import Link from "next/link";
import { ServiceCards } from "@/components/service-cards";
import { StaggeredAnimation } from "@/components/staggered-animation";

export function ContentSection() {
  return (
    <section className="px-16 py-16 bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <StaggeredAnimation
            delay={100}
            staggerDelay={150}
            direction="up"
            distance={20}
          >
            <h2 className="text-3xl font-bold text-black mb-6">
              Protecting Rights with Integrity and Expertise
            </h2>
            <p className="text-gray-700 mb-6">
              Lawvare delivers trusted legal solutions with integrity and
              excellence. We empower clients by safeguarding their rights and
              providing expert guidance.
            </p>
            <div className="mb-8">
              <Link
                href="#"
                className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </StaggeredAnimation>
          <ServiceCards />
        </div>
        <div className="relative">
          <StaggeredAnimation
            delay={300}
            staggerDelay={200}
            direction="right"
            distance={30}
          >
            <div className="aspect-[4/3] relative">
              <Image
                src="/protect.jpg"
                alt="Legal Professionals"
                fill
                className="object-cover rounded-md"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center">
                <div className="relative w-full h-full rounded-full flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full flex items-center justify-center">
                    <div className="text-[8px] text-center text-gray-700 rotate-[30deg]">
                      Partners Lawvare Your Trusted Legal
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-black">
              <StaggeredAnimation
                delay={500}
                staggerDelay={100}
                direction="up"
                distance={15}
                initialOpacity={0}
              >
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">
                      Corporate Law Specialist
                    </span>
                    <span>90%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 animate-progress-90"></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Case Management</span>
                    <span>80%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 animate-progress-80"></div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">
                      Recharge & Analytics Skill
                    </span>
                    <span>75%</span>
                  </div>
                  <div className="w-full bg-gray-200 h-1">
                    <div className="bg-black h-1 animate-progress-75"></div>
                  </div>
                </div>
              </StaggeredAnimation>
            </div>
          </StaggeredAnimation>
        </div>
      </div>
    </section>
  );
}
