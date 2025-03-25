"use client";

import Image from "next/image";
import Link from "next/link";
import { StaggeredAnimation } from "./staggered-animation";

export function BlogSection() {
  return (
    <section className="px-16 py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <StaggeredAnimation
          delay={100}
          staggerDelay={150}
          direction="up"
          distance={20}
          preserveLayout={true}
        >
          <h2 className="text-black text-4xl font-bold mb-4">Our Blog</h2>
          <p className="text-gray-700 mb-8 max-w-2xl">
            Stay updated with key legal trends and expert insights from our
            attorneys. Explore articles on criminal defense, civil litigation,
            and more. Check back often for fresh updates.
          </p>

          <div className="mb-10">
            <Link
              href="#"
              className="inline-block px-6 py-3 bg-amber-400 text-black font-medium rounded-md hover:bg-amber-500 transition-colors"
            >
              View All
            </Link>
          </div>
        </StaggeredAnimation>

        <div className="space-y-8">
          {/* Featured Blog Post */}
          <StaggeredAnimation delay={300} direction="up" distance={30}>
            <div className="rounded-lg overflow-hidden bg-black">
              <div className="relative h-[400px]">
                <Image
                  src="/blog-gavel.jpg"
                  alt="Supreme Court"
                  fill
                  className="object-cover object-bottom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <div className="text-sm mb-2">
                    02 December 2024 • Read Time: 5 min
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    Supreme Court to Hear Voter ID Law Case
                  </h3>
                  <p className="text-white/80 mb-4 max-w-2xl">
                    Discover the implications of the upcoming Supreme Court
                    review and its potential impact on voting rights.
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
          <div className="border-t border-gray-200 pt-8">
            <StaggeredAnimation
              delay={400}
              direction="right"
              distance={20}
              preserveLayout={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="col-span-1">
                  <Image
                    src="/litigate.jpg"
                    alt="Healthcare Fraud"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="text-black col-span-2">
                  <div className="text-sm text-gray-500 mb-2">
                    08 December 2024 • Read Time: 9 min
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Department of Justice Launches Crackdown on Healthcare Fraud
                    and Abuse
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Learn about the DOJ&apos;s latest initiatives targeting
                    healthcare fraud and how they aim to protect patients and
                    taxpayers.
                  </p>
                  <Link
                    href="#"
                    className="inline-block px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </StaggeredAnimation>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <StaggeredAnimation
              delay={500}
              direction="left"
              distance={20}
              preserveLayout={true}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                <div className="col-span-1">
                  <Image
                    src="/blog-daca.jpg"
                    alt="DACA"
                    width={300}
                    height={200}
                    className="rounded-lg object-cover w-full"
                  />
                </div>
                <div className="text-black col-span-2">
                  <div className="text-sm text-gray-500 mb-2">
                    09 December 2024 • Read Time: 7 min
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    Supreme Court to Decide on the Fate of DACA
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Find out how the upcoming decision could affect millions of
                    immigrants and the broader implications for immigration
                    policy.
                  </p>
                  <Link
                    href="#"
                    className="inline-block px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
                  >
                    Read More
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
