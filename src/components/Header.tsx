import { Menu, X, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import logo from '../assets/AS-Logo.png';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              <img src={logo} alt="Adeylink Solutions Logo" className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="/#home" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="/#features" className="text-gray-700 hover:text-blue-600">
              Features
            </a>
            <a href="/#pricing" className="text-gray-700 hover:text-blue-600">
              Pricing
            </a>
            <a href="/#contact" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
            <a href="https://adeylinksolutions.com.ng/portal" className="flex items-center gap-2 border-2 border-blue-600 bg-transparent hover:bg-blue-700 hover:text-white text-blue-700 px-4 py-1.5 rounded-md transition duration-200">
              <LogIn size={20} />
              <span>Login</span>
            </a>
            <a href="https://adeylinksolutions.com.ng/portal/register.php" className="flex items-center gap-2 border-2 border-blue-600 bg-blue-600 text-white px-4 py-1.5 rounded-md hover:bg-blue-700 transition duration-200">
              <UserPlus size={20} />
              <span>Register</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <a
                href="/#home"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Home
              </a>
              <a
                href="/#features"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="/#pricing"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Pricing
              </a>
              <a
                href="/#contact"
                className="block px-3 py-2 text-gray-700 hover:bg-gray-50"
              >
                Contact
              </a>
              <a href="https://adeylinksolutions.com.ng/portal" className="w-full flex items-center gap-2 px-3 py-2 text-gray-700 hover:bg-gray-50">
                <LogIn size={20} />
                <span>Login</span>
              </a>
              <a href="https://adeylinksolutions.com.ng/portal/register.php" className="w-fit flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                <UserPlus size={20} />
                <span>Register</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
