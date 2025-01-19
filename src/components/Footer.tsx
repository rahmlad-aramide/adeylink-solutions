import { Mail, MapPin, PhoneCall } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-12 gap-8">
            <div className="col-span-3">
              <h3 className="text-xl font-bold mb-4">Adeylink Solutions</h3>
              <p className="text-gray-400">
                Your trusted partner for affordable airtime and data solutions.
              </p>
            </div>
            
            <div className="col-span-4">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="whitespace-normal">support@adeylinksolutions.com.ng</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall size={16} />
                  <span>+234 800 ADEYLINK</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Iwo, Osun State, Nigeria</span>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:pl-5">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-3">
              <h3 className="text-xl font-bold mb-4">Developer</h3>
              <p className="text-gray-400 mb-2">Site designed by <a target="_blank" href="https://abdrahman-oladimeji.web.app" className="underline underline-offset-2">Dev. Rahmlad</a></p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <PhoneCall size={16} />
                  <a href="tel:+2349023600083" className="hover:underline underline-offset-2">+234 902 360 0083</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Adeylink Solutions. Developed by {" "}
              <a target="_blank" href="https://wa.me/2349023600083" className="text-blue-600 underline underline-offset-2">Dev. Rahmlad</a>
            </p>
          </div>
        </div>
      </footer>
    )
}