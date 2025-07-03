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
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div 
            tabIndex={0} 
            role="button" 
            className="btn btn-ghost lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          {isMenuOpen && (
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href}
                    className={isActive(item.href) ? 'active' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/vibecoding101"
                  className="btn btn-primary btn-sm mt-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vibe Coding 101
                </Link>
              </li>
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mr-2">
            <span className="text-white font-bold">H</span>
          </div>
          Human-Centered Systems
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link 
                to={item.href}
                className={isActive(item.href) ? 'active' : ''}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="navbar-end hidden lg:flex">
        <Link to="/vibecoding101" className="btn btn-primary">
          Vibe Coding 101
        </Link>
      </div>
    </div>
  )
}
