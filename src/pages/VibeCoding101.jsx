import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function VibeCoding101() {
  const [selectedContainer, setSelectedContainer] = useState(null)
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')

  // Simple container data - in a real app this would come from an API
  const containers = [
    { id: 1, status: 'available', password: 'vibe01', url: 'https://vibe-container-1.onrender.com' },
    { id: 2, status: 'in_use', password: 'vibe02', url: 'https://vibe-container-2.onrender.com' },
    { id: 3, status: 'available', password: 'vibe03', url: 'https://vibe-container-3.onrender.com' },
    { id: 4, status: 'offline', password: 'vibe04', url: 'https://vibe-container-4.onrender.com' },
    { id: 5, status: 'available', password: 'vibe05', url: 'https://vibe-container-5.onrender.com' }
  ]

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

  const getContainerIcon = (status) => {
    switch (status) {
      case 'available': return '🟢'
      case 'in_use': return '🔵'
      case 'offline': return '⚪'
      default: return '⚪'
    }
  }

  const getContainerBadge = (status) => {
    switch (status) {
      case 'available': return <span className="badge badge-success">Available</span>
      case 'in_use': return <span className="badge badge-info">In Use</span>
      case 'offline': return <span className="badge badge-ghost">Offline</span>
      default: return <span className="badge badge-ghost">Unknown</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {containers.map((container) => (
              <div key={container.id} className="card bg-base-100 text-base-content shadow-lg">
                <div className="card-body text-center p-6">
                  <h3 className="card-title justify-center text-xl mb-2">
                    Container {container.id}
                  </h3>
                  <div className="text-3xl mb-4">{getContainerIcon(container.status)}</div>
                  <div className="text-sm mb-4">
                    {getContainerBadge(container.status)}
                  </div>
                  <button 
                    className={`btn btn-sm w-full ${
                      container.status === 'available' 
                        ? 'btn-primary' 
                        : 'btn-disabled'
                    }`}
                    disabled={container.status !== 'available'}
                    onClick={() => handleContainerAccess(container)}
                  >
                    {container.status === 'available' ? 'Access' : 
                     container.status === 'in_use' ? 'Occupied' : 'Offline'}
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
