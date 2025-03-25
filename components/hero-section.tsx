import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Legal Team"
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 px-16 pt-20 pb-40">
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold text-white leading-tight mb-6">
            Your Trusted Legal Partners for Every Step of the Way
          </h1>
          <p className="text-white/90 text-lg mb-8">
            Offering tailored legal solutions to meet your unique needs, with professionalism and care at every step.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}

