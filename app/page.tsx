import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { FeaturesSection } from "@/components/features-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import { AnimateOnScroll } from "@/components/animate-on-scroll";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-200">
      {/* Hero Container */}
      <div
        className="relative h-screen opacity-0 animate-fade-in hero-container"
        style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
      >
        <Header />
        <HeroSection />
      </div>

      {/* Content Section */}
      <AnimateOnScroll>
        <ContentSection />
      </AnimateOnScroll>

      {/* Features Section */}
      <AnimateOnScroll>
        <FeaturesSection />
      </AnimateOnScroll>

      {/* Blog Section */}
      <AnimateOnScroll>
        <BlogSection />
      </AnimateOnScroll>

      {/* Testimonials Section */}
      <AnimateOnScroll>
        <TestimonialsSection />
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
