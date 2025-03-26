import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a2e1a] text-white">
      <div className="px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1 - Logo and Info */}
          <div className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Davoli & Associates
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Fighting for the compensation you deserve after an accident.
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Practice Areas</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Auto Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Slip and Fall
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Medical Malpractice
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Wrongful Death
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - More Pages */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">About Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Case Results
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-base sm:text-lg font-bold">Contact</h3>
            <address className="not-italic text-sm sm:text-base text-white/80">
              342 N Long Beach Rd <br />
              Rockville Centre, NY 11570
            </address>
            <div className="space-y-2">
              <p>
                <a
                  href="mailto:info@davolilaw.com"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  info@davolilaw.com
                </a>
              </p>
              <p>
                <a
                  href="tel:+12125551234"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  (212) 555-1234
                </a>
              </p>
            </div>

            <div className="pt-4">
              <h3 className="text-base sm:text-lg font-bold mb-3">Social</h3>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Facebook
                </Link>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-sm sm:text-base text-white/80 hover:text-white transition-colors"
                >
                  Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-4 sm:px-8 md:px-16 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-sm sm:text-base text-white/60 text-center sm:text-left">
            ©Copyright 2024 Davoli & Associates. All Rights Reserved.
          </div>
          <div>
            <Link
              href="#"
              className="text-sm sm:text-base text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
