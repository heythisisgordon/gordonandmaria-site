import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <section className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">[Your Tagline Here]</h1>
          <p className="py-6">Engineering solutions that center on people.</p>
          <Link to="/portfolio" className="btn btn-primary">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}
