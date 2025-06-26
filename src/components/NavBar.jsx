import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold">
          Human-Centered Systems
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <nav
          className={`${isOpen ? 'block' : 'hidden'} sm:block`}
          aria-label="Main navigation"
        >
          <ul className="sm:flex space-y-2 sm:space-y-0 sm:space-x-6">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/research" className="hover:underline">
                Research
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:underline">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/resume" className="hover:underline">
                Resume
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
