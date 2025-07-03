import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { registerForWorkshop } from '../utils/workshopApi'

export default function VibeCoding101Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experienceLevel: 'beginner',
    motivation: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [containerInfo, setContainerInfo] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await registerForWorkshop(formData)
      setSuccess(true)
      setContainerInfo(response.containerInfo)
    } catch (err) {
      setError(err.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (success && containerInfo) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-success to-primary">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h1 className="text-4xl font-bold text-success mb-4">
                  Registration Successful!
                </h1>
                <p className="text-xl mb-6">
                  Welcome to Vibe Coding 101, {formData.name}!
                </p>
                
                <div className="alert alert-info mb-6">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">Your Workshop Container</h3>
                    <p className="mb-2">
                      <strong>Container URL:</strong>{' '}
                      <a 
                        href={containerInfo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="link link-primary"
                      >
                        {containerInfo.url}
                      </a>
                    </p>
                    <p className="mb-2">
                      <strong>Password:</strong> <code className="bg-base-200 px-2 py-1 rounded">{containerInfo.password}</code>
                    </p>
                    <p className="text-sm opacity-75">
                      Please save this information. You'll need it to access your coding environment.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Next Steps:</h3>
                  <div className="text-left space-y-2">
                    <div className="flex items-start space-x-2">
                      <span className="text-primary">1.</span>
                      <span>Click on your container URL above to access your coding environment</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary">2.</span>
                      <span>Use the provided password to log in</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary">3.</span>
                      <span>Check your email for workshop schedule and additional details</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-primary">4.</span>
                      <span>Join us at the scheduled workshop time for live instruction</span>
                    </div>
                  </div>
                </div>

                <div className="card-actions justify-center mt-6">
                  <a 
                    href={containerInfo.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-lg"
                  >
                    Access Your Container
                  </a>
                  <Link to="/vibecoding101" className="btn btn-outline">
                    Back to Workshop Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-primary to-secondary">
      {/* Header */}
      <section className="py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Link to="/vibecoding101" className="btn btn-ghost text-white mb-4">
              ← Back to Workshop Info
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Register for Vibe Coding 101
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              Secure your spot in our hands-on web development workshop
            </p>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="card bg-base-100 shadow-2xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-6 justify-center">
                  Workshop Registration
                </h2>

                {error && (
                  <div className="alert alert-error mb-6">
                    <span>{error}</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="input input-bordered input-lg"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">Email Address *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="input input-bordered input-lg"
                      required
                    />
                    <label className="label">
                      <span className="label-text-alt">We'll send workshop details and your container access info here</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">Experience Level *</span>
                    </label>
                    <select
                      name="experienceLevel"
                      value={formData.experienceLevel}
                      onChange={handleInputChange}
                      className="select select-bordered select-lg"
                      required
                    >
                      <option value="beginner">Complete Beginner</option>
                      <option value="some-experience">Some Experience</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced-beginner">Advanced Beginner</option>
                    </select>
                    <label className="label">
                      <span className="label-text-alt">This helps us tailor the workshop pace to the group</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-lg font-medium">What motivates you to learn coding?</span>
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      placeholder="Tell us about your goals and what you hope to achieve..."
                      className="textarea textarea-bordered h-24"
                      rows="4"
                    />
                    <label className="label">
                      <span className="label-text-alt">Optional: This helps us understand your goals</span>
                    </label>
                  </div>

                  <div className="form-control">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`btn btn-primary btn-lg ${loading ? 'loading' : ''}`}
                    >
                      {loading ? 'Registering...' : 'Register for Workshop'}
                    </button>
                  </div>
                </form>

                <div className="divider"></div>

                <div className="text-center space-y-2">
                  <p className="text-sm opacity-75">
                    By registering, you'll receive:
                  </p>
                  <ul className="text-sm space-y-1 opacity-75">
                    <li>• Your personal coding container access</li>
                    <li>• Workshop schedule and materials</li>
                    <li>• Pre-workshop setup instructions</li>
                    <li>• Access to our learning community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
