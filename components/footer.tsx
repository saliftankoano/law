import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#1a2e1a] text-white">
      <div className="px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Logo and Info */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Davoli & Associates
            </h2>
            <p className="text-white/80 mb-6">
              Fighting for the compensation you deserve after an accident.
            </p>
          </div>

          {/* Column 2 - Explore */}
          <div>
            <h3 className="text-lg font-bold mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Auto Accidents
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Slip and Fall
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Medical Malpractice
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Wrongful Death
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - More Pages */}
          <div>
            <h3 className="text-lg font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Our Attorneys
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Case Results
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Client Testimonials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <address className="not-italic text-white/80 mb-4">
              342 N Long Beach Rd <br />
              Rockville Centre, NY 11570
            </address>
            <p className="mb-2">
              <a
                href="mailto:info@davolilaw.com"
                className="text-white/80 hover:text-white transition-colors"
              >
                info@davolilaw.com
              </a>
            </p>
            <p className="mb-6">
              <a
                href="tel:+12125551234"
                className="text-white/80 hover:text-white transition-colors"
              >
                (212) 555-1234
              </a>
            </p>

            <h3 className="text-lg font-bold mb-4">Social</h3>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Twitter
              </Link>
              <Link
                href="#"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 px-16 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white/60 mb-4 md:mb-0">
          ©Copyright 2024 Davoli & Associates. All Rights Reserved.
        </div>
        <div>
          <Link
            href="#"
            className="text-white/60 hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
