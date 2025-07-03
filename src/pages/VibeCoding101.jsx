import React from 'react'
import { Link } from 'react-router-dom'

export default function VibeCoding101() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vibe Coding 101
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master web development fundamentals with hands-on coding in your personalized container environment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vibecoding101/register" className="btn btn-accent btn-lg text-white">
              Register Now
            </Link>
            <a 
              href="#workshop-details" 
              className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-primary"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Workshop Details */}
      <section id="workshop-details" className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              What You'll Learn
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              A comprehensive introduction to modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="card bg-primary text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  HTML & CSS Fundamentals
                </h3>
                <p>
                  Master the building blocks of web development with semantic HTML and responsive CSS
                </p>
              </div>
            </div>

            <div className="card bg-secondary text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  JavaScript Essentials
                </h3>
                <p>
                  Learn interactive programming with JavaScript fundamentals and DOM manipulation
                </p>
              </div>
            </div>

            <div className="card bg-accent text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  React Basics
                </h3>
                <p>
                  Introduction to component-based development with React and modern workflows
                </p>
              </div>
            </div>

            <div className="card bg-info text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🛠️</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Development Tools
                </h3>
                <p>
                  Get familiar with VS Code, Git, and modern development environments
                </p>
              </div>
            </div>

            <div className="card bg-success text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Project Building
                </h3>
                <p>
                  Create real projects and deploy them to see your work in action
                </p>
              </div>
            </div>

            <div className="card bg-warning text-white shadow-lg">
              <div className="card-body text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Collaborative Coding
                </h3>
                <p>
                  Learn version control and collaborative development practices
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Format */}
      <section className="py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Workshop Format
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hands-on learning in your personal coding environment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <span className="text-primary">🖥️</span>
                  Personal Container
                </h3>
                <p className="text-lg">
                  Each participant gets their own isolated coding environment with VS Code, 
                  pre-configured tools, and all necessary dependencies.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <span className="text-secondary">👨‍🏫</span>
                  Expert Instruction
                </h3>
                <p className="text-lg">
                  Learn from experienced developers with guided tutorials, 
                  live demos, and personalized assistance.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <span className="text-accent">📊</span>
                  Progressive Learning
                </h3>
                <p className="text-lg">
                  Start with basics and build complexity gradually through 
                  structured exercises and real-world projects.
                </p>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="card-title text-2xl mb-4">
                  <span className="text-info">🤝</span>
                  Collaborative Environment
                </h3>
                <p className="text-lg">
                  Work alongside other learners, share ideas, and get help 
                  from both instructors and peers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our hands-on workshop and learn web development in a supportive, 
            interactive environment with your own coding container.
          </p>
          <Link to="/vibecoding101/register" className="btn btn-accent btn-lg text-white">
            Register for Workshop
          </Link>
        </div>
      </section>
    </main>
  )
}
