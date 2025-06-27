import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Research', href: '/research' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Team', href: '/resume' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-tech-200 shadow-lg">
      <nav className="container mx-auto px-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              to="/" 
              className="flex items-center space-x-3 group"
              aria-label="Human-Centered Systems LLC - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-engineering-500 to-accent-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-display font-bold text-engineering-900 group-hover:text-engineering-600 transition-colors duration-200">
                  Human-Centered Systems
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-engineering-500 focus:ring-offset-2 ${
                  isActive(item.href)
                    ? 'bg-engineering-100 text-engineering-900 shadow-sm'
                    : 'text-tech-600 hover:text-engineering-900 hover:bg-tech-50'
                }`}
                aria-current={isActive(item.href) ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/info-session"
              className="ml-4 btn btn-primary btn-sm px-6 py-2 text-sm font-semibold rounded-full hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-engineering-500 focus:ring-offset-2"
              aria-label="Join Vibe Coding 101 class"
            >
              <span>Vibe Coding 101</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-tech-600 hover:text-engineering-900 hover:bg-tech-50 focus:outline-none focus:ring-2 focus:ring-engineering-500"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-tech-200 bg-white">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-engineering-500 ${
                    isActive(item.href)
                      ? 'bg-engineering-100 text-engineering-900'
                      : 'text-tech-600 hover:text-engineering-900 hover:bg-tech-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/info-session"
                className="block mx-4 mt-4 btn btn-primary text-center rounded-full font-semibold focus:outline-none focus:ring-2 focus:ring-engineering-500"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Vibe Coding 101
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
