import { Header } from "@/components/header";
import { ExpertiseSection } from "@/components/expertise-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function ExpertisePage() {
  return (
    <main className="min-h-screen bg-stone-200">
      {/* Header */}
      <div className="relative">
        <Header />
      </div>

      {/* Page Title */}
      <div className="bg-[#1a2e1a] text-white py-20 px-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Practice Areas
          </h1>
          <p className="text-xl max-w-2xl">
            At Davoli & Associates, we specialize in a range of personal injury
            cases, providing expert legal representation for victims of
            negligence and misconduct.
          </p>
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
