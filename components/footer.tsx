import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1a2e1a] text-white">
      <div className="px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Lawvare</h2>
            <p className="text-white/80 mb-6">
              Your trusted legal partner, resolving complex matters with expertise and care.
            </p>
            <Link
              href="#"
              className="inline-block px-6 py-2 bg-amber-500 text-black font-medium rounded-md hover:bg-amber-600 transition-colors"
            >
              Buy Now
            </Link>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6">Explore</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Cases
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - More Page */}
          <div>
            <h3 className="text-lg font-bold mb-6">More Page</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Lawyers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  License
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white/80 hover:text-white transition-colors">
                  Style guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <address className="not-italic text-white/80 mb-4">
              Queens, NY,
              <br />
              United States
            </address>
            <p className="mb-2">
              <a href="mailto:hello@lawvara.com" className="text-white/80 hover:text-white transition-colors">
                hello@lawvara.com
              </a>
            </p>
            <p className="mb-6">
              <a href="tel:+16465987983" className="text-white/80 hover:text-white transition-colors">
                +1 646-598-7983
              </a>
            </p>

            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Facebook
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                LinkedIn
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Twitter
              </Link>
              <Link href="#" className="text-white/80 hover:text-white transition-colors">
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-16 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white/60 mb-4 md:mb-0">©Copyright 2024</div>
        <div>
          <Link href="#" className="text-white/60 hover:text-white transition-colors">
            Term & Conditions
          </Link>
        </div>
      </div>
    </footer>
  )
}

