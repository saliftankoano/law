import Image from "next/image";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/cta-team.jpg"
          alt="Legal Team"
          fill
          className="object-cover brightness-50 object-[center_20%]"
          priority
        />
      </div>

      <div className="relative z-10 px-16 py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">
            Decent Legal Support, Your Free Consultation Now!
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Let&apos;s make it happen together. Contact us today
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            Get in Touch Today
          </Link>
        </div>
      </div>
    </section>
  );
}
