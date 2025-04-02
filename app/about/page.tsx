import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Image from "next/image";

export default function AboutPage() {
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
            src="/about-cover.jpg"
            alt="Law Office"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-16 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              About Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Dedicated to Justice, Committed to Excellence
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Attorney Profile */}
          <AnimateOnScroll>
            <div className="relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Henry W. Davoli, Jr."
                fill
                className="object-cover"
              />
            </div>
          </AnimateOnScroll>

          {/* Attorney Story */}
          <AnimateOnScroll>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-[#1a2e1a]">
                Henry W. Davoli, Jr.
              </h2>
              <p className="text-lg text-gray-700">
                With over 15 years of experience in personal injury law, Henry
                W. Davoli, Jr. has established himself as one of the most
                respected attorneys in the field. His journey in law began with
                a deep-seated desire to help those who had been wronged and
                needed a strong voice to advocate for their rights.
              </p>
              <p className="text-lg text-gray-700">
                After graduating with honors from University and from Hofstra
                University School of Law, Henry quickly made his mark in the
                legal community. His commitment to excellence and unwavering
                dedication to his clients has resulted in numerous successful
                verdicts and settlements, earning him recognition from both
                peers and clients alike.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-[#1a2e1a] mb-4">
                  Key Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Recipient of the &quot;Excellence in Legal Advocacy&quot;
                      Award
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>Member of the American Association for Justice</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Successfully handled over 1,000 personal injury cases
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-2">•</span>
                    <span>
                      Regular speaker at legal conferences and seminars
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Firm Values */}
        <AnimateOnScroll>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a2e1a] mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700">
                To provide exceptional legal representation while maintaining
                the highest standards of integrity and professionalism.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a2e1a] mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700">
                To be the leading personal injury law firm, known for our
                commitment to justice and client success.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-[#1a2e1a] mb-4">
                Our Values
              </h3>
              <p className="text-gray-700">
                Integrity, Excellence, Compassion, and Dedication to our
                clients&apos; best interests.
              </p>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
