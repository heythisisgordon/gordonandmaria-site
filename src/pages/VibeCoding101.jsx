import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getContainerStatus, getGalleryStatus, getFeaturedResurrections } from '../utils/workshopApi'

export default function VibeCoding101() {
  const [selectedContainer, setSelectedContainer] = useState(null)
  const [password, setPassword] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')
  const [containers, setContainers] = useState([])
  const [loading, setLoading] = useState(true)
  const [lastUpdated, setLastUpdated] = useState(null)
  const [fetchError, setFetchError] = useState(null)
  const [galleryStatus, setGalleryStatus] = useState(null)
  const [featuredResurrections, setFeaturedResurrections] = useState([])
  const [galleryLoading, setGalleryLoading] = useState(false)

  // Fetch container status from API
  const fetchContainerStatus = async () => {
    try {
      setFetchError(null)
      const response = await getContainerStatus()
      
      // Map API response to UI format
      const mappedContainers = response.containers.map(container => ({
        id: parseInt(container.id),
        fullId: container.fullId,
        status: mapApiStatusToUIStatus(container.status),
        password: container.password,
        url: container.url,
        lastHealthCheck: container.lastHealthCheck,
        healthCheckError: container.healthCheckError,
        assignedTo: container.assignedTo,
        assignedAt: container.assignedAt
      }))
      
      setContainers(mappedContainers)
      setLastUpdated(new Date().toLocaleTimeString())
      setLoading(false)
      
    } catch (err) {
      console.error('Failed to fetch container status:', err)
      setFetchError(err.message)
      setLoading(false)
    }
  }

  // Map API status to UI status
  const mapApiStatusToUIStatus = (apiStatus) => {
    switch (apiStatus) {
      case 'available': return 'available'
      case 'assigned': return 'in_use'
      case 'offline': return 'offline'
      case 'checking': return 'checking'
      default: return 'offline'
    }
  }

  // Fetch gallery status and featured resurrections
  const fetchGalleryData = async () => {
    try {
      setGalleryLoading(true)
      const [galleryResponse, resurrectionsResponse] = await Promise.all([
        getGalleryStatus(),
        getFeaturedResurrections()
      ])
      
      setGalleryStatus(galleryResponse)
      setFeaturedResurrections(resurrectionsResponse.featured || [])
    } catch (err) {
      console.error('Failed to fetch gallery data:', err)
    } finally {
      setGalleryLoading(false)
    }
  }

  // Initial load and periodic refresh
  useEffect(() => {
    fetchContainerStatus()
    fetchGalleryData()
    
    // Refresh every 30 seconds
    const interval = setInterval(fetchContainerStatus, 30000)
    
    return () => clearInterval(interval)
  }, [])

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
      case 'checking': return '🟡'
      default: return '⚪'
    }
  }

  const getContainerBadge = (status) => {
    switch (status) {
      case 'available': return <span className="badge badge-success">Available</span>
      case 'in_use': return <span className="badge badge-info">In Use</span>
      case 'offline': return <span className="badge badge-ghost">Offline</span>
      case 'checking': return <span className="badge badge-warning">Checking</span>
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

          <div className="max-w-2xl mx-auto">
            <div className="card bg-base-100 shadow-lg border border-base-300">
              <div className="card-body text-center p-8">
                <div className="text-5xl mb-6">📚</div>
                <h3 className="card-title justify-center text-2xl mb-4">
                  Vibe Coding 101 Quick Reference
                </h3>
                <p className="text-lg mb-6 max-w-lg mx-auto">
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
          </div>
        </div>
      </section>

      {/* Resurrect-a-Dead-Language Showcase */}
      <section className="py-20 bg-gradient-to-br from-secondary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              🎮 Resurrect-a-Dead-Language
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Transform nostalgic programming languages into modern browser experiences. 
              Watch AI bring QBasic, Pascal, and Flash back to life in real-time!
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="badge badge-lg bg-white bg-opacity-20 text-white border-white border-opacity-30">
                QBasic Starfield
              </div>
              <div className="badge badge-lg bg-white bg-opacity-20 text-white border-white border-opacity-30">
                Pascal Fire Effect
              </div>
              <div className="badge badge-lg bg-white bg-opacity-20 text-white border-white border-opacity-30">
                Flash Animation
              </div>
              <div className="badge badge-lg bg-white bg-opacity-20 text-white border-white border-opacity-30">
                AI-Generated Transpilers
              </div>
            </div>
          </div>

          {/* Featured Resurrections */}
          {!galleryLoading && featuredResurrections.length > 0 && (
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
              {featuredResurrections.map((resurrection, index) => (
                <div key={index} className="card bg-base-100 text-base-content shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="card-body">
                    <h3 className="card-title text-2xl mb-4">
                      <span className="text-3xl mr-2">
                        {resurrection.language === 'QBasic' ? '💾' :
                         resurrection.language === 'Pascal' ? '🔥' :
                         resurrection.language === 'Flash' ? '⚡' : '💻'}
                      </span>
                      {resurrection.language}
                    </h3>
                    <h4 className="text-xl font-bold mb-2">{resurrection.title}</h4>
                    <p className="text-base-content opacity-80 mb-4">
                      {resurrection.description}
                    </p>
                    <div className="flex gap-2 mb-4">
                      <div className="badge badge-primary">
                        {resurrection.nostalgicAppeal === 'high' ? 'High Nostalgia' : 'Classic Appeal'}
                      </div>
                      <div className="badge badge-ghost">Live Demo</div>
                    </div>
                    <div className="card-actions justify-end">
                      <a 
                        href={resurrection.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary btn-sm"
                      >
                        View Demo
                      </a>
                      <a 
                        href={resurrection.galleryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        Full Gallery
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Gallery Status Summary */}
          {galleryStatus && (
            <div className="text-center mb-8">
              <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-100 text-base-content">
                <div className="stat">
                  <div className="stat-title">Active Galleries</div>
                  <div className="stat-value text-primary">
                    {galleryStatus.containers?.filter(c => c.status === 'active').length || 0}
                  </div>
                  <div className="stat-desc">Demo showcase sites</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Total Resurrections</div>
                  <div className="stat-value text-secondary">
                    {galleryStatus.totalResurrections || 0}
                  </div>
                  <div className="stat-desc">Languages brought back to life</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Featured Demo</div>
                  <div className="stat-value text-accent">
                    {galleryStatus.featuredDemo?.language || 'QBasic'}
                  </div>
                  <div className="stat-desc">{galleryStatus.featuredDemo?.title || 'Starfield Animation'}</div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Links */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Live Demo Galleries</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[1, 2, 3, 4, 5].map((galleryNum) => (
                <a
                  key={galleryNum}
                  href={`https://vibe-container-${galleryNum}-demos.onrender.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline text-white border-white border-opacity-50 hover:bg-white hover:text-primary"
                >
                  Gallery {galleryNum}
                </a>
              ))}
            </div>
            <p className="text-lg opacity-90 max-w-3xl mx-auto">
              See what students create during the workshop! Each gallery showcases nostalgic programming 
              languages running in modern browsers, demonstrating the power of AI-assisted transpilation.
            </p>
          </div>

          {/* Loading State */}
          {galleryLoading && (
            <div className="text-center py-8">
              <span className="loading loading-spinner loading-lg"></span>
              <p className="mt-4 text-lg">Loading resurrection showcase...</p>
            </div>
          )}
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
            
            {/* Status Bar */}
            <div className="flex justify-center items-center gap-4 mb-6">
              {lastUpdated && (
                <p className="text-sm opacity-80">
                  Last updated: {lastUpdated}
                </p>
              )}
              <button 
                className="btn btn-sm btn-ghost text-white"
                onClick={fetchContainerStatus}
                disabled={loading}
              >
                {loading ? <span className="loading loading-spinner loading-xs"></span> : '🔄'}
                Refresh
              </button>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <span className="loading loading-spinner loading-lg"></span>
              <p className="mt-4 text-lg">Loading container status...</p>
            </div>
          )}

          {/* Error State */}
          {fetchError && !loading && (
            <div className="alert alert-error max-w-2xl mx-auto mb-8">
              <div>
                <h3 className="font-bold">Failed to load containers</h3>
                <div className="text-xs">{fetchError}</div>
              </div>
              <button 
                className="btn btn-sm btn-ghost"
                onClick={fetchContainerStatus}
              >
                Try Again
              </button>
            </div>
          )}

          {/* Container Grid */}
          {!loading && !fetchError && (
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
                    
                    {/* Health Check Info */}
                    {container.healthCheckError && (
                      <div className="tooltip tooltip-error" data-tip={container.healthCheckError}>
                        <div className="text-xs text-error mb-2">⚠️ Connection Issue</div>
                      </div>
                    )}
                    
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
                       container.status === 'in_use' ? 'Occupied' : 
                       container.status === 'checking' ? 'Checking...' : 'Offline'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !fetchError && containers.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📦</div>
              <p className="text-xl">No containers configured</p>
              <p className="text-sm opacity-80 mt-2">
                Contact your instructor if you expected to see containers here
              </p>
            </div>
          )}

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
