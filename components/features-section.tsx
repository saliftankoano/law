import Image from "next/image";

export function FeaturesSection() {
  return (
    <section className="px-16 py-12 bg-stone-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-200 rounded-md">
              <Image
                src="/trophy-icon.svg"
                alt="Trophy Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Proven Track Record</h3>
              <p className="text-gray-700">
                Our history of successful cases demonstrates our expertise and
                commitment to excellence
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-200 rounded-md">
              <Image
                src="/hourglass-icon.svg"
                alt="Hourglass Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">
                24/7 Support Availability
              </h3>
              <p className="text-gray-700">
                We&apos;re always here to assist, offering round-the-clock
                support for your legal needs.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Image
            src="/lady-justice.png"
            alt="Lady Justice Statue"
            width={300}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
