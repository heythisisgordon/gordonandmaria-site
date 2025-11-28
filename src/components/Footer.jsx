import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm">
              © {new Date().getFullYear()} Gordon and Maria. Built with ❤️ for our family.
            </p>
          </div>
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/contact" 
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
            <Link 
              to="/kglw" 
              className="text-sm hover:text-primary transition-colors duration-200"
            >
              KGLW
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
