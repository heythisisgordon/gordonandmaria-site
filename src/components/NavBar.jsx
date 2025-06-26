import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <header className="navbar bg-base-100 px-4 shadow-md">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Human-Centered Systems
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0 space-x-2">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </header>
  )
}
