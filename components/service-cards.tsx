import Image from "next/image"

export function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=300&width=400"
          alt="Commercial Litigation"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-2">Commercial Litigation</h3>
          <p className="text-white/80 text-sm">
            Ultrices massa felis dolor imperdiet penatibus magna volutpat dis etiam condimentum feugiat habitant nunc
          </p>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <Image
          src="/placeholder.svg?height=300&width=400"
          alt="Strategic Information"
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 p-6 flex flex-col justify-end">
          <h3 className="text-xl font-bold text-white mb-2">Strategic Information</h3>
          <p className="text-white/80 text-sm">
            Eros a ex sit penatibus cras odio ullamcorper penatibus bibendum aptent lectus laboris bibendum per
          </p>
        </div>
      </div>
    </div>
  )
}

