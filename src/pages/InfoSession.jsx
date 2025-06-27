import React, { useState } from 'react'

export default function InfoSession() {
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    codeFiles: null,
    description: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      codeFiles: e.target.files
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // For now, we'll simulate the submission
      // In production, this would connect to a backend service
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmitStatus('success')
      setFormData({
        name: '',
        password: '',
        codeFiles: null,
        description: ''
      })
      // Reset file input
      e.target.reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Vibe Coding 101</h1>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Learn the fundamentals of coding in a supportive, collaborative environment. 
            Share your code, get feedback, and showcase your progress.
          </p>
        </div>

        {/* Class Information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">Class Overview</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Beginner-friendly coding fundamentals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Hands-on programming exercises</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Collaborative learning environment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Personal code showcase pages</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">What You'll Learn</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Programming basics and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Problem-solving with code</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Code organization and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2">•</span>
                  <span>Sharing and presenting your work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Code Submission Form */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-6">Submit Your Code</h2>
            <p className="mb-6 text-base-content/70">
              Upload your coding projects to create your personal showcase page. 
              Supported formats: .py, .js, .html, .css, .txt, and more.
            </p>

            {submitStatus === 'success' && (
              <div className="alert alert-success mb-6">
                <span>✓ Code submitted successfully! Your showcase page will be available soon.</span>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-error mb-6">
                <span>✗ Submission failed. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Access Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Create a password for your page"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <span className="label-text-alt">You'll use this to access your showcase page</span>
                  </label>
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Code Files</span>
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="file-input file-input-bordered w-full"
                  multiple
                  accept=".py,.js,.html,.css,.txt,.md,.json,.xml,.java,.cpp,.c,.php,.rb,.go,.rs,.swift,.kt"
                  required
                />
                <label className="label">
                  <span className="label-text-alt">Select multiple files if needed. Max 10MB total.</span>
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Project Description</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Describe your project, what it does, and any special features..."
                  className="textarea textarea-bordered h-24"
                  required
                />
              </div>

              <div className="form-control">
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Code'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 card bg-base-100 shadow-lg">
          <div className="card-body">
            <h3 className="card-title text-xl mb-4">Next Steps</h3>
            <div className="steps steps-vertical lg:steps-horizontal">
              <div className="step step-primary">Submit your code</div>
              <div className="step">Review and processing</div>
              <div className="step">Showcase page created</div>
              <div className="step">Share with others</div>
            </div>
            <p className="mt-4 text-sm text-base-content/70">
              After submission, your code will be reviewed and a personalized showcase page will be created. 
              You'll receive a link to access and share your work.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
