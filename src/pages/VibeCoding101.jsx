import React, { useState } from 'react'

/**
 * Workshop Containers Configuration
 * 
 * MAINTENANCE NOTE: When adding/removing workshop containers:
 * 1. Update this WORKSHOP_CONTAINERS array manually
 * 2. Follow the URL pattern: https://vibe-container-{N}.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md
 * 3. Update password to match container configuration
 * 4. Increment id number for display purposes
 */
const WORKSHOP_CONTAINERS = [
  {
    id: 1,
    name: 'vibe-container-1',
    password: 'workshop2025-1',
    url: 'https://vibe-container-1.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  },
  {
    id: 2,
    name: 'vibe-container-2',
    password: 'workshop2025-2',
    url: 'https://vibe-container-2.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  },
  {
    id: 3,
    name: 'vibe-container-3',
    password: 'workshop2025-3',
    url: 'https://vibe-container-3.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  },
  {
    id: 4,
    name: 'vibe-container-4',
    password: 'workshop2025-4',
    url: 'https://vibe-container-4.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  },
  {
    id: 5,
    name: 'vibe-container-5',
    password: 'workshop2025-5',
    url: 'https://vibe-container-5.onrender.com/?workspace=/home/coder/project/workspace.code-workspace&open=/home/coder/project/landing-page.md'
  }
]

export default function VibeCoding101() {
  const [selectedContainer, setSelectedContainer] = useState(null)
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')

  const handleContainerAccess = (container) => {
    setSelectedContainer(container)
    setPassword('')
    setError('')
    setShowModal(true)
  }

  const handlePasswordSubmit = () => {
    if (password === selectedContainer.password) {
      // Redirect to container
      window.open(selectedContainer.url, '_blank')
      setShowModal(false)
    } else {
      setError('Incorrect password. Please try again.')
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Hero Section */}
      <section className="py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Vibe Coding 101
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Master software development fundamentals with hands-on vibe coding in your personalized container environment
          </p>
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
              A structured approach to software development that puts LLMs to work throughout prototyping
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
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
                  <span className="text-accent">�</span>
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

      {/* Vibe Coding Resources */}
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-base-content mb-4">
              Vibe Coding Resources
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Everything you need to get started with AI-powered development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body text-center p-8">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Quick Reference Guide
                </h3>
                <p className="text-lg mb-6">
                  Complete setup guide covering OpenRouter account creation, VS Code installation, 
                  Cline configuration, and the vibe coding philosophy. Your essential companion 
                  for the workshop.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <div className="badge badge-primary">Setup Guide</div>
                  <div className="badge badge-secondary">Tool Configuration</div>
                  <div className="badge badge-accent">Best Practices</div>
                </div>
                <div className="card-actions justify-center">
                  <a 
                    href="/vibe_coding_cheatsheet.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    View Cheat Sheet
                  </a>
                </div>
              </div>
            </div>

            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body text-center p-8">
                <div className="text-5xl mb-6">🎯</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Workshop Slides
                </h3>
                <p className="text-lg mb-6">
                  Interactive presentation covering the vibe coding mindset, core principles, 
                  and practical examples. Perfect for understanding the philosophy behind 
                  AI-powered development.
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  <div className="badge badge-info">Interactive</div>
                  <div className="badge badge-warning">Mindset</div>
                  <div className="badge badge-success">Examples</div>
                </div>
                <div className="card-actions justify-center">
                  <a 
                    href="/vibe_coding_slides.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-lg"
                  >
                    View Slides
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Container Access Board */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">
              Workshop Containers
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Select your assigned container and enter your password to access your coding environment
            </p>
          </div>

          {/* Container Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {WORKSHOP_CONTAINERS.map((container) => (
              <div key={container.name} className="card bg-base-100 text-base-content shadow-lg">
                <div className="card-body text-center p-6">
                  <h3 className="card-title justify-center text-xl mb-2">
                    Container {container.id}
                  </h3>
                  <div className="text-3xl mb-4">🖥️</div>
                  <div className="text-sm mb-4">
                    <span className="badge badge-success">Available</span>
                  </div>
                  
                  <button 
                    className="btn btn-primary btn-sm w-full"
                    onClick={() => handleContainerAccess(container)}
                  >
                    Access Container
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-sm opacity-80">
              Your instructor will assign you a container number and provide the access password during the workshop
            </p>
          </div>
        </div>
      </section>

      {/* Password Modal */}
      {showModal && selectedContainer && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg mb-4">
              Access Container {selectedContainer.id}
            </h3>
            <p className="mb-4">
              Please enter the password provided by your instructor:
            </p>
            
            <div className="form-control mb-4">
              <input
                type="password"
                placeholder="Enter password"
                className="input input-bordered w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handlePasswordSubmit()}
              />
            </div>

            {error && (
              <div className="alert alert-error mb-4">
                <span>{error}</span>
              </div>
            )}

            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={handlePasswordSubmit}
                disabled={!password.trim()}
              >
                Access Container
              </button>
              <button 
                className="btn btn-ghost"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
