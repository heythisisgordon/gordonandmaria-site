import React, { useState } from 'react'
import { submitWorkshopRegistration } from '../utils/workshopApi'

export default function VibeCoding101Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner',
    preferredTime: '',
    goals: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [containerInfo, setContainerInfo] = useState(null)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    setError('')
    
    try {
      const response = await submitWorkshopRegistration(formData)
      setContainerInfo(response)
      setSubmitStatus('success')
    } catch (error) {
      setError(error.message)
      setSubmitStatus('error')
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900 flex items-center justify-center">
        <div className="card bg-engineering-800 shadow-xl max-w-2xl mx-4">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-3xl text-white mb-6">
              🎉 Registration Successful!
            </h2>
            <div className="bg-engineering-700 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Your Workshop Environment
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-engineering-200 min-w-[100px]">URL:</span>
                  <a 
                    href={containerInfo.containerUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="link link-primary break-all"
                  >
                    {containerInfo.containerUrl}
                  </a>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-engineering-200 min-w-[100px]">Password:</span>
                  <code className="bg-engineering-600 px-2 py-1 rounded text-white">
                    {containerInfo.password}
                  </code>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-engineering-200 min-w-[100px]">Workshop ID:</span>
                  <code className="bg-engineering-600 px-2 py-1 rounded text-white text-sm">
                    {containerInfo.workshopId}
                  </code>
                </div>
              </div>
            </div>
            
            <div className="alert alert-info mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <div className="text-left">
                <p className="font-semibold">Important Instructions:</p>
                <ul className="text-sm mt-2 space-y-1">
                  <li>• Save this information - you'll need it to access your workshop</li>
                  <li>• Check your email for detailed instructions and calendar invite</li>
                  <li>• Your environment will be available for the duration of the workshop</li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={containerInfo.containerUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Access Your Environment
              </a>
              <button 
                onClick={() => window.print()}
                className="btn btn-outline"
              >
                Print Details
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Register for Vibe Coding 101
            </h1>
            <p className="text-engineering-200">
              Secure your spot in our AI-assisted development workshop
            </p>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body">
              {error && (
                <div className="alert alert-error mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-engineering-200 font-semibold">Full Name *</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="input input-bordered bg-engineering-700 text-white placeholder-engineering-400"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-engineering-200 font-semibold">Email *</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="input input-bordered bg-engineering-700 text-white placeholder-engineering-400"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-engineering-200 font-semibold">Experience Level</span>
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="select select-bordered bg-engineering-700 text-white"
                  >
                    <option value="beginner">Beginner - New to coding</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced developer</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-engineering-200 font-semibold">
                      Preferred Time (Optional)
                    </span>
                  </label>
                  <input
                    type="text"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    placeholder="e.g., Weekday evenings, Weekend mornings"
                    className="input input-bordered bg-engineering-700 text-white placeholder-engineering-400"
                  />
                  <label className="label">
                    <span className="label-text-alt text-engineering-400">
                      Let us know your availability preferences
                    </span>
                  </label>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-engineering-200 font-semibold">
                      What do you hope to learn? (Optional)
                    </span>
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    placeholder="Tell us about your goals, interests, or specific topics you'd like to explore..."
                    className="textarea textarea-bordered bg-engineering-700 text-white placeholder-engineering-400"
                    rows="3"
                  />
                </div>

                <div className="form-control mt-8">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className={`btn btn-primary btn-lg ${submitStatus === 'submitting' ? 'loading' : ''}`}
                  >
                    {submitStatus === 'submitting' ? 'Registering...' : 'Register for Workshop'}
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <p className="text-engineering-400 text-sm">
                  By registering, you'll receive a unique VS Code environment and workshop access details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
