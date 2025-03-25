import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ContentSection } from "@/components/content-section";
import { FeaturesSection } from "@/components/features-section";
import { BlogSection } from "@/components/blog-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-200">
      {/* Hero Container */}
      <div className="relative h-screen">
        <Header />
        <HeroSection />
      </div>

      {/* Content Section */}
      <ContentSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Blog Section */}
      <BlogSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Our Expertise Section */}
      <ExpertiseSection />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
