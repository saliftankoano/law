import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Image from "next/image";
import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-stone-200">
      {/* Header */}
      <div className="relative">
        <Header />
      </div>

      {/* Hero Section */}
      <div className="relative bg-[#1a2e1a] text-white">
        <div className="absolute inset-0">
          <Image
            src="/blog-hero.jpg"
            alt="Legal Blog"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-16 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Legal Insights & Resources
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Expert analysis and guidance on personal injury law, legal rights,
              and case studies.
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-6xl mx-auto px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <AnimateOnScroll>
            <div className="lg:col-span-2 bg-white rounded-lg overflow-hidden shadow-sm h-[500px] flex flex-col">
              <div className="relative h-[250px]">
                <Image
                  src="/blog-car-accident.jpg"
                  alt="Car Accident Scene"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-600 mb-2">
                  15 May 2024 • Read Time: 5 min
                </div>
                <h2 className="text-2xl font-bold text-[#1a2e1a] mb-3">
                  5 Critical Steps to Take After a Car Accident
                </h2>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Learn the essential actions that can protect your health and
                  strengthen your personal injury claim after being involved in
                  an auto accident.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/blog/car-accident-steps"
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
            </div>
          </AnimateOnScroll>

          {/* Regular Posts */}
          <AnimateOnScroll>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[500px] flex flex-col">
              <div className="relative h-[250px]">
                <Image
                  src="/blog-medical.jpg"
                  alt="Medical Chart and Stethoscope"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-600 mb-2">
                  12 May 2024 • Read Time: 4 min
                </div>
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">
                  Proving Medical Malpractice: What You Need to Know
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Understanding the four essential elements required to
                  establish a successful medical malpractice claim in court.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/blog/medical-malpractice"
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
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[500px] flex flex-col">
              <div className="relative h-[250px]">
                <Image
                  src="/blog-check.jpg"
                  alt="Settlement Agreement"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-600 mb-2">
                  10 May 2024 • Read Time: 6 min
                </div>
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">
                  Maximizing Your Personal Injury Settlement
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Expert tips for documenting damages, negotiating with
                  insurance companies, and avoiding common mistakes that reduce
                  compensation.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/blog/maximizing-settlement"
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
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll>
            <div className="bg-white rounded-lg overflow-hidden shadow-sm h-[500px] flex flex-col">
              <div className="relative h-[250px]">
                <Image
                  src="/blog-injury.jpg"
                  alt="Clock with Legal Documents"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="text-sm text-gray-600 mb-2">
                  8 May 2024 • Read Time: 4 min
                </div>
                <h3 className="text-xl font-bold text-[#1a2e1a] mb-3">
                  Understanding Statute of Limitations for Injury Claims
                </h3>
                <p className="text-gray-700 mb-4 line-clamp-3">
                  Critical deadlines that affect your right to compensation and
                  why acting quickly after an injury is essential for your case.
                </p>
                <div className="mt-auto">
                  <Link
                    href="/blog/statute-limitations"
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
            </div>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
