import { Header } from "@/components/header";
import { ExpertiseSection } from "@/components/expertise-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";
import Image from "next/image";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-stone-200">
      {/* Header */}
      <div className="relative">
        <Header />
      </div>

      {/* Enhanced Page Title */}
      <div className="h-[80vh] relative bg-[#1a2e1a] text-white">
        <div className="absolute inset-0">
          <Image
            src="/courtroom.jpg"
            alt="Courtroom Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-6xl mx-auto px-16 py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Our Practice Areas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              At Davoli & Associates, we specialize in a comprehensive range of
              personal injury cases, providing expert legal representation for
              victims of negligence and misconduct.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-amber-500"></div>
              <p className="text-lg text-white/80">
                Decades of Experience • Proven Track Record • Personalized
                Attention
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Section */}
      <AnimateOnScroll>
        <ExpertiseSection />
      </AnimateOnScroll>

      {/* CTA Section */}
      <AnimateOnScroll>
        <CTASection />
      </AnimateOnScroll>

      {/* Footer */}
      <Footer />
    </main>
  );
}
