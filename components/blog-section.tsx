import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
  return (
    <section className="px-16 py-16 bg-stone-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">Our Blog</h2>
        <p className="text-gray-700 mb-8 max-w-2xl">
          Stay updated with key legal trends and expert insights from our attorneys. Explore articles on criminal
          defense, civil litigation, and more. Check back often for fresh updates.
        </p>

        <div className="mb-10">
          <Link
            href="#"
            className="inline-block px-6 py-3 bg-amber-400 text-black font-medium rounded-md hover:bg-amber-500 transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="space-y-8">
          {/* Featured Blog Post */}
          <div className="rounded-lg overflow-hidden bg-black">
            <div className="relative h-[400px]">
              <Image src="/placeholder.svg?height=400&width=1000" alt="Supreme Court" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <div className="text-sm mb-2">02 December 2024 • Read Time: 5 min</div>
                <h3 className="text-2xl font-bold mb-2">Supreme Court to Hear Voter ID Law Case</h3>
                <p className="text-white/80 mb-4 max-w-2xl">
                  Discover the implications of the upcoming Supreme Court review and its potential impact on voting
                  rights.
                </p>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          {/* Regular Blog Posts */}
          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Healthcare Fraud"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-500 mb-2">08 December 2024 • Read Time: 9 min</div>
                <h3 className="text-xl font-bold mb-2">
                  Department of Justice Launches Crackdown on Healthcare Fraud and Abuse
                </h3>
                <p className="text-gray-700 mb-4">
                  Learn about the DOJ's latest initiatives targeting healthcare fraud and how they aim to protect
                  patients and taxpayers.
                </p>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div className="col-span-1">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="DACA"
                  width={300}
                  height={200}
                  className="rounded-lg object-cover w-full"
                />
              </div>
              <div className="col-span-2">
                <div className="text-sm text-gray-500 mb-2">09 December 2024 • Read Time: 7 min</div>
                <h3 className="text-xl font-bold mb-2">Supreme Court to Decide on the Fate of DACA</h3>
                <p className="text-gray-700 mb-4">
                  Find out how the upcoming decision could affect millions of immigrants and the broader implications
                  for immigration policy.
                </p>
                <Link
                  href="#"
                  className="inline-block px-4 py-2 border border-gray-300 text-gray-800 font-medium rounded-md hover:bg-gray-100 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

