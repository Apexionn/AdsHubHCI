import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo from "@/assets/adshub-logo.png";

export default function Footer() {
  return (
    <footer className="bg-[var(--base)] border-t py-8 px-4 sm:px-6 lg:px-8 mt-10">
      <div className="max-w-[80%] mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* Logo and Tagline Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <div className="h-10 sm:h-12 flex-shrink-0">
                <img
                  src={logo}
                  alt="AdsHub Logo"
                  className="h-full w-auto object-contain"
                />
              </div>
              <div className="ml-3">
                <h1 className="text-lg sm:text-xl font-bold leading-tight">
                  AdsHub
                </h1>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Semua Bisa Diiklankan.
                </p>
              </div>
            </div>
          </div>

          {/* Categories and Links Section - Two column on small screens, single column on larger */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Categories Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-base sm:text-lg">Kategori</h3>
              <nav className="flex flex-col space-y-2 gap-1">
                {[
                  "Lifestyle",
                  "Lowongan Pekerjaan",
                  "Otomotif",
                  "Elektronik",
                  "Layanan Jasa",
                  "Properti",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            {/* Links Column */}
            <div className="flex flex-col space-y-4">
              <h3 className="font-bold text-base sm:text-lg">Tautan</h3>
              <nav className="flex flex-col space-y-2 gap-1">
                {[
                  "Tentang Kami",
                  "Syarat & Ketentuan",
                  "Kebijakan Privasi",
                  "FAQ",
                ].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="text-sm text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col space-y-4">
            <h3 className="font-bold text-base sm:text-lg">Butuh Bantuan?</h3>
            <a
              href="mailto:support@adshub.id"
              className="text-sm text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
            >
              support@adshub.id
            </a>

            <div className="space-y-3">
              {/* Livechat Item */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">Livechat</span>
              </div>

              {/* Location Item */}
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-lime-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-sm">Tangerang, Alam Sutera</span>
              </div>
            </div>

            {/* Support Box */}
            <div className="bg-gray-200 text-slate-700 p-3 rounded-md text-xs mt-1">
              <p>Tim support kami siap membantu 24/7.</p>
              <p>Jangan ragu untuk menghubungi kami!</p>
            </div>
          </div>
        </div>

        {/* Copyright and Social Media */}
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-[var(--secondary-textbase)] mb-4 sm:mb-0">
            © 2025 AdsHub. All rights reserved.
          </div>
          <div className="flex space-x-5">
            <a
              href="#"
              className="text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
              aria-label="Instagram"
            >
              <BsInstagram size={18} />
            </a>
            <a
              href="#"
              className="text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
              aria-label="Facebook"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="text-[var(--secondary-textbase)] hover:text-lime-500 transition duration-150"
              aria-label="Instagram"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
