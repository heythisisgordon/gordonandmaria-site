import React from 'react'
import { Link } from 'react-router-dom'

export default function Main() {
  return (
    <main id="main-content">
      {/* Hero Section */}
      <section className="hero min-h-screen bg-gradient-to-br from-slate-900 to-slate-700">
        <div className="hero-content text-center text-white">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Advanced Engineering.<br />
              Human-Centered Design.
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Bridging complex technical challenges with intuitive, people-first solutions. 
              We deliver engineering excellence that puts user needs at the center of innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/portfolio" className="btn btn-primary btn-lg">
                View Our Work
              </Link>
              <Link to="/contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-slate-900">
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Engineering Excellence
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We combine advanced technical expertise with human-centered design principles to deliver solutions that work for people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Systems Engineering
                </h3>
                <p>
                  Complex system design and integration with focus on reliability and performance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Human-Centered Design
                </h3>
                <p>
                  User research and design thinking applied to technical challenges.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Innovation & Prototyping
                </h3>
                <p>
                  Rapid prototyping and concept realization for breakthrough solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help solve your complex engineering challenges with human-centered solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Get Started Today
            </Link>
            <Link to="/vibecoding101" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary">
              Join Vibe Coding 101
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
