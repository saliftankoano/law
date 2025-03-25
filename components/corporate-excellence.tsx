import Image from "next/image"

export function CorporateExcellence() {
  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=400&width=1200"
          alt="Corporate Background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      <div className="relative z-10 px-16 py-32 flex items-center justify-center">
        <h2 className="text-5xl font-bold text-white text-center">Corporate Excellence</h2>
      </div>
    </section>
  )
}

