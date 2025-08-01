import React from 'react'
import { Link } from 'react-router-dom'

export default function Portal() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-500 to-blue-600">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Family Portal 🚀
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Coming Soon - A special place for our family to connect, share, and stay close
            </p>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 bg-white bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Coming Soon
            </h2>
            <p className="text-xl text-white opacity-90 max-w-3xl mx-auto">
              We're building something special just for our family
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">📹</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Video Calls
                </h3>
                <p>
                  Face-to-face conversations with family members, no matter where you are in the world
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">💬</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Family Chat
                </h3>
                <p>
                  Private chat rooms for different groups, sharing photos, and staying connected daily
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">📅</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Shared Calendar
                </h3>
                <p>
                  Keep track of important dates, birthdays, visits, and family events together
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">📸</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Photo Sharing
                </h3>
                <p>
                  Private family photo albums where we can all share and view precious memories
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Family Games
                </h3>
                <p>
                  Online games we can play together during video calls and family time
                </p>
              </div>
            </div>

            <div className="card bg-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">🔒</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Private & Safe
                </h3>
                <p>
                  Secure, family-only space where we can share freely and safely connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white bg-opacity-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Development Timeline
            </h2>
            <p className="text-xl text-white opacity-90">
              Here's what we're working on and when to expect it
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="timeline timeline-vertical">
              <div className="timeline-item">
                <div className="timeline-middle">
                  <div className="w-4 h-4 bg-primary rounded-full"></div>
                </div>
                <div className="timeline-end bg-white rounded-lg p-4 shadow-lg ml-4 mb-8">
                  <div className="font-bold text-primary">Phase 1 - Foundation</div>
                  <div className="text-sm opacity-75 mb-2">Q1 2025</div>
                  <p className="text-sm">Basic portal structure, user authentication, and secure login system</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-middle">
                  <div className="w-4 h-4 bg-secondary rounded-full"></div>
                </div>
                <div className="timeline-end bg-white rounded-lg p-4 shadow-lg ml-4 mb-8">
                  <div className="font-bold text-secondary">Phase 2 - Communication</div>
                  <div className="text-sm opacity-75 mb-2">Q2 2025</div>
                  <p className="text-sm">Video calling and family chat features with photo sharing</p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-middle">
                  <div className="w-4 h-4 bg-accent rounded-full"></div>
                </div>
                <div className="timeline-end bg-white rounded-lg p-4 shadow-lg ml-4 mb-8">
                  <div className="font-bold text-accent">Phase 3 - Fun Features</div>
                  <div className="text-sm opacity-75 mb-2">Q3 2025</div>
                  <p className="text-sm">Family games, shared calendar, and interactive activities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stay Updated */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-white bg-opacity-10 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want Updates? 📬
            </h2>
            <p className="text-lg text-white opacity-90 mb-8">
              We'll keep you posted on our progress and let you know as soon as the portal is ready!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Send Us a Message
              </Link>
              <Link to="/" className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-green-600">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}