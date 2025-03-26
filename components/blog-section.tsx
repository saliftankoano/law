"use client";

import Image from "next/image";
import Link from "next/link";
import { StaggeredAnimation } from "./staggered-animation";

export function BlogSection() {
  return (
    <section className="px-16 py-16 bg-[#1a2e1a]">
      <div className="max-w-6xl mx-auto">
        <StaggeredAnimation
          delay={100}
          staggerDelay={150}
          direction="up"
          distance={20}
          preserveLayout={true}
        >
          <h2 className="text-[#e8e3ce] text-4xl font-bold mb-4">Our Blog</h2>
          <p className="text-[#e8e3ce]/60 mb-8 max-w-2xl">
            Stay informed with insights from our experienced personal injury
            attorneys. Our blog covers accident prevention, legal rights,
            compensation details, and recovery tips.
          </p>

          <div className="mb-10">
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-amber-400 text-black font-medium rounded-md hover:bg-amber-500 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        </StaggeredAnimation>

        <div className="space-y-8">
          {/* Featured Blog Post */}
          <StaggeredAnimation delay={300} direction="up" distance={30}>
            <div className="rounded-lg overflow-hidden bg-black">
              <div className="relative h-[400px]">
                <Image
                  src="/blog-car-accident.jpg"
                  alt="Car Accident Scene"
                  fill
                  className="object-cover object-center"
                  // Image should show a car accident scene with emergency responders, creating urgency around personal injury cases
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="text-sm mb-2">
                    15 May 2024 • Read Time: 5 min
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    5 Critical Steps to Take After a Car Accident
                  </h3>
                  <p className="text-white/80 mb-4 max-w-2xl">
                    Learn the essential actions that can protect your health and
                    strengthen your personal injury claim after being involved
                    in an auto accident.
                  </p>
                  <Link
                    href="#"
                    className="inline-block px-4 py-2 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </StaggeredAnimation>

          {/* Regular Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StaggeredAnimation
              delay={500}
              staggerDelay={150}
              direction="up"
              distance={20}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <div className="relative h-48">
                  <Image
                    src="/blog-medical.jpg"
                    alt="Medical Chart and Stethoscope"
                    fill
                    className="object-cover object-[center_20%]"
                    // Image should show medical equipment or paperwork, symbolizing medical malpractice issues
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Proving Medical Malpractice: What You Need to Know
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    Understanding the four essential elements required to
                    establish a successful medical malpractice claim in court.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center"
                  >
                    Read Article{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggeredAnimation>
            <StaggeredAnimation
              delay={650}
              staggerDelay={150}
              direction="up"
              distance={20}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <div className="relative h-48">
                  <Image
                    src="/blog-check.jpg"
                    alt="Settlement Agreement"
                    fill
                    className="object-cover"
                    // Image should show legal documents or a settlement check, representing compensation
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Maximizing Your Personal Injury Settlement
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    Expert tips for documenting damages, negotiating with
                    insurance companies, and avoiding common mistakes that
                    reduce compensation.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center"
                  >
                    Read Article{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggeredAnimation>
            <StaggeredAnimation
              delay={800}
              staggerDelay={150}
              direction="up"
              distance={20}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow">
                <div className="relative h-48">
                  <Image
                    src="/blog-injury.jpg"
                    alt="Clock with Legal Documents"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold mb-3 text-black">
                    Understanding Statute of Limitations for Injury Claims
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-3">
                    Critical deadlines that affect your right to compensation
                    and why acting quickly after an injury is essential for your
                    case.
                  </p>
                  <Link
                    href="#"
                    className="text-amber-500 font-medium hover:text-amber-600 inline-flex items-center"
                  >
                    Read Article{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-4 h-4 ml-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </StaggeredAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
