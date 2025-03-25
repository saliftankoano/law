import Image from "next/image";

export function TestimonialsSection() {
  return (
    <section className="px-16 py-16 bg-stone-100">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-black text-4xl font-bold mb-10">
          What Our Clients Say
        </h2>

        <div className="relative">
          <div className="text-black text-8xl absolute -left-12 top-0">
            &quot;
          </div>

          <div className="flex justify-center mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 text-amber-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>

          <p className="text-black text-xl mb-8">
            The team made a difficult divorce process much easier. They provided
            clear guidance and fought for a fair custody arrangement. I&apos;m
            grateful for their support and professionalism.
          </p>

          <div className="flex items-center justify-center mb-8">
            <div className="mr-4">
              <Image
                src="/testimonial-stacy.jpg"
                alt="Gwen Stacy"
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
            <div className="text-left">
              <p className="text-black font-bold">Gwen Stacy</p>
              <p className="text-gray-600 text-sm">New York, USA</p>
            </div>
          </div>

          <div className="text-black text-8xl absolute -right-12 bottom-20">
            &quot;
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          <div className="w-6 h-2 bg-amber-500 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
