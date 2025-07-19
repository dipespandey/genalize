import { useState } from 'react'
import { Menu, X } from 'lucide-react'
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-bold">
              <span className="text-indigo-600">Genalize</span>
            </a>
          </div>
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#clients"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Clients
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              About
            </a>
            {/* <a
              href="#process"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Process
            </a> */}
            {/* <a
              href="#projects"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Projects
            </a> */}
            <a
              href="#contact"
              className="text-gray-700 hover:text-indigo-600 transition-colors font-medium"
            >
              Contact
            </a>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b border-gray-100">
            <a
              href="#services"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#clients"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#process"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </a>
            <a
              href="#projects"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
