import React from 'react'
import { Link } from 'react-router-dom'

export default function VibeCoding101() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Vibe Coding 101
          </h1>
          <p className="text-xl text-engineering-200 max-w-3xl mx-auto mb-8">
            Experience the future of development: AI-assisted coding in your browser. 
            No installs, no setup—just pure innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vibecoding101/register" className="btn btn-primary btn-lg">
              Register for Workshop
            </Link>
            <a href="#learn-more" className="btn btn-outline btn-lg">
              Learn More
            </a>
          </div>
        </div>

        {/* Workshop Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" id="learn-more">
          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Legacy Modernization
              </h3>
              <p className="text-engineering-200">
                Transform old HTML/jQuery code into modern React applications 
                using AI assistance. See decades of progress in minutes.
              </p>
            </div>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Feature Development
              </h3>
              <p className="text-engineering-200">
                Add complex features like forms, validation, and animations 
                through natural language conversation with AI.
              </p>
            </div>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Rapid Iteration
              </h3>
              <p className="text-engineering-200">
                Experience the speed of AI-driven development cycles. 
                Idea to implementation in under 2 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Open Source Materials Section */}
        <section className="py-20 bg-engineering-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                📚 Open Source Workshop Materials
              </h2>
              <p className="text-xl text-engineering-200 max-w-3xl mx-auto">
                Everything you need to run your own AI-assisted development workshops. 
                Free, open source, and ready to use.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Workshop Lessons Card */}
              <div className="card bg-engineering-800 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h3 className="card-title justify-center text-2xl mb-4 text-white">
                    Complete Workshop Lessons
                  </h3>
                  <p className="text-engineering-200 mb-6">
                    Full curriculum with step-by-step guides, presenter notes, 
                    and hands-on exercises for AI-assisted development.
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      Download Lessons
                    </button>
                    <button className="btn btn-outline">
                      View on GitHub
                    </button>
                  </div>
                </div>
              </div>

              {/* Vibe Coding Slick Sheet Card */}
              <div className="card bg-engineering-800 shadow-xl">
                <div className="card-body text-center">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="card-title justify-center text-2xl mb-4 text-white">
                    Vibe Coding in 10 Minutes or Less
                  </h3>
                  <p className="text-engineering-200 mb-6">
                    Quick reference guide and cheat sheet for getting started 
                    with AI-assisted development immediately.
                  </p>
                  <div className="card-actions justify-center">
                    <button className="btn btn-primary">
                      Download PDF
                    </button>
                    <button className="btn btn-outline">
                      Quick View
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
              <div className="card bg-engineering-700 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-3xl mb-3">🐳</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Container Setup
                  </h4>
                  <p className="text-engineering-300 text-sm">
                    Docker configs and deployment scripts
                  </p>
                </div>
              </div>

              <div className="card bg-engineering-700 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-3xl mb-3">🎯</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Demo Projects
                  </h4>
                  <p className="text-engineering-300 text-sm">
                    5 starter projects for hands-on learning
                  </p>
                </div>
              </div>

              <div className="card bg-engineering-700 shadow-lg">
                <div className="card-body text-center">
                  <div className="text-3xl mb-3">👥</div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    Community
                  </h4>
                  <p className="text-engineering-300 text-sm">
                    Join discussions and share improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <div className="bg-engineering-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            What You'll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Your Environment
              </h3>
              <ul className="space-y-2 text-engineering-300">
                <li>• Full VS Code in your browser</li>
                <li>• Pre-configured Cline AI extension</li>
                <li>• Multiple starter projects</li>
                <li>• Instant deployment pipeline</li>
                <li>• No local setup required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Workshop Format
              </h3>
              <ul className="space-y-2 text-engineering-300">
                <li>• 45-minute hands-on session</li>
                <li>• Small groups (max 5 participants)</li>
                <li>• Individual VS Code environments</li>
                <li>• Live coding demonstrations</li>
                <li>• Take your projects home</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Workshop Process */}
        <div className="bg-engineering-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How It Works
          </h2>
          <div className="steps steps-vertical lg:steps-horizontal w-full">
            <div className="step step-primary">
              <div className="step-content text-center">
                <h3 className="font-semibold text-white mb-2">Register</h3>
                <p className="text-engineering-300 text-sm">
                  Sign up and get your personal VS Code environment
                </p>
              </div>
            </div>
            <div className="step step-primary">
              <div className="step-content text-center">
                <h3 className="font-semibold text-white mb-2">Access</h3>
                <p className="text-engineering-300 text-sm">
                  Click your unique link to enter the workshop
                </p>
              </div>
            </div>
            <div className="step step-primary">
              <div className="step-content text-center">
                <h3 className="font-semibold text-white mb-2">Code</h3>
                <p className="text-engineering-300 text-sm">
                  Build amazing projects with AI assistance
                </p>
              </div>
            </div>
            <div className="step step-primary">
              <div className="step-content text-center">
                <h3 className="font-semibold text-white mb-2">Deploy</h3>
                <p className="text-engineering-300 text-sm">
                  Publish your work and share with the world
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future?
          </h2>
          <p className="text-xl text-white/90 mb-6">
            Join developers who are already building with AI assistance
          </p>
          <Link to="/vibecoding101/register" className="btn btn-accent btn-lg">
            Start Your Workshop Journey
          </Link>
        </div>
      </div>
    </div>
  )
}
