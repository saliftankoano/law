import Image from "next/image"
import Link from "next/link"

export function ExpertiseSection() {
  return (
    <section className="px-16 py-16 bg-[#1a2e1a] text-white">
      <h2 className="text-4xl font-bold mb-6">Our Expertise</h2>
      <p className="max-w-2xl mb-8">
        Discover a diverse range of legal services designed to protect your interests. From family matters to corporate
        solutions, we've got you covered.
      </p>

      <div className="flex justify-start mb-12">
        <Link href="#" className="px-6 py-2 border border-white/30 rounded-md hover:bg-white/10 transition-colors">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-[#243824] p-6 rounded-md">
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image src="/chart-icon.svg" alt="Business Icon" width={24} height={24} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Business Law</h3>
          <p className="text-white/80 mb-6 text-sm">
            Providing tailored legal solutions for businesses of all sizes. Navigate contracts, compliance, and disputes
            with confidence.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-[#243824] p-6 rounded-md">
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image src="/healthcare-icon.svg" alt="Healthcare Icon" width={24} height={24} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Healthcare Law</h3>
          <p className="text-white/80 mb-6 text-sm">
            Specialized support for healthcare professionals and facilities. Ensure compliance and resolve medical-legal
            challenges effectively.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-[#243824] p-6 rounded-md">
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image src="/corporate-icon.svg" alt="Corporate Icon" width={24} height={24} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Corporate Law</h3>
          <p className="text-white/80 mb-6 text-sm">
            Comprehensive legal services for corporate operations and growth. Stay compliant and protect your
            organization's interests.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>

        <div className="bg-[#243824] p-6 rounded-md">
          <div className="p-3 bg-amber-400 rounded-md w-fit mb-4">
            <Image src="/family-icon.svg" alt="Family Icon" width={24} height={24} className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3">Family Law</h3>
          <p className="text-white/80 mb-6 text-sm">
            Empathetic guidance for family legal issues like custody and divorce. Achieve resolutions that prioritize
            harmony and fairness.
          </p>
          <Link
            href="#"
            className="inline-block px-6 py-2 border border-white/30 text-white font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>

      <div className="flex justify-center mt-12 gap-2">
        <div className="w-6 h-2 bg-amber-500 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>
    </section>
  )
}

