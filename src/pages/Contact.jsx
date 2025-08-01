import React, { useState } from 'react'
import { submitContactForm } from '../utils/contactApi'
import { validateContactForm, validateEmailRealtime, getCharacterCount } from '../utils/validation'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const [submitMessage, setSubmitMessage] = useState('')
  const [validationErrors, setValidationErrors] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([])
    }
    
    // Clear submit status when user modifies form
    if (submitStatus) {
      setSubmitStatus('')
      setSubmitMessage('')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')
    setSubmitMessage('')
    setValidationErrors([])

    // Validate form data
    const validation = validateContactForm(formData)
    if (!validation.isValid) {
      setValidationErrors(validation.errors)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await submitContactForm(formData)
      
      setSubmitStatus('success')
      setSubmitMessage(response.message)
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      })
      
    } catch (error) {
      console.error('Contact form submission error:', error)
      setSubmitStatus('error')
      setSubmitMessage(error.message || 'Unable to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Get real-time email validation
  const emailValidation = validateEmailRealtime(formData.email)
  
  // Get character count for message
  const messageCharCount = getCharacterCount(formData.message, 5000)

  return (
    <section className="hero bg-base-200 min-h-screen py-12">
      <div className="hero-content flex-col lg:flex-row max-w-6xl">
        <div className="text-center lg:text-left lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl font-bold">We'd Love to Hear From You! 💌</h1>
          <p className="py-6 text-lg">
            Whether you're checking in, sharing updates, want to catch up, or just want to say hello -
            we're always excited to hear from our family. Your messages mean the world to us!
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>We love hearing about your adventures and milestones</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>Share photos, stories, or just say hi!</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>We'll get back to you as soon as we can</span>
            </div>
          </div>
        </div>
        
        <div className="card flex-shrink-0 w-full lg:w-1/2 max-w-lg shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Send us a message 📩</h2>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="alert alert-success mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{submitMessage}</span>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="alert alert-error mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{submitMessage}</span>
              </div>
            )}

            {/* Validation Errors */}
            {validationErrors.length > 0 && (
              <div className="alert alert-warning mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold mb-2">Please fix the following issues:</p>
                  <ul className="text-sm space-y-1">
                    {validationErrors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="form-control">
                <label htmlFor="name" className="label">
                  <span className="label-text font-semibold">Name *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  className="input input-bordered focus:input-primary"
                  maxLength={100}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Email Field */}
              <div className="form-control">
                <label htmlFor="email" className="label">
                  <span className="label-text font-semibold">Email *</span>
                  {emailValidation.isValid === true && (
                    <span className="label-text-alt text-success">✓ Valid</span>
                  )}
                  {emailValidation.isValid === false && (
                    <span className="label-text-alt text-error">{emailValidation.message}</span>
                  )}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="you@example.com"
                  className={`input input-bordered focus:input-primary ${
                    emailValidation.isValid === false ? 'input-error' : 
                    emailValidation.isValid === true ? 'input-success' : ''
                  }`}
                  maxLength={254}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Message Field */}
              <div className="form-control">
                <label htmlFor="message" className="label">
                  <span className="label-text font-semibold">Message *</span>
                  <span className="label-text-alt">
                    {messageCharCount.current}/5000 characters
                  </span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us what's going on in your life, share any updates, ask questions, or just say hello..."
                  className={`textarea textarea-bordered focus:textarea-primary h-32 resize-none ${
                    messageCharCount.isOverLimit ? 'textarea-error' : ''
                  }`}
                  maxLength={5000}
                  required
                  disabled={isSubmitting}
                />
                <label className="label">
                  <span className="label-text-alt text-base-content/60">
                    We'd love to hear from you - no message is too short or too long!
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-8">
                <button
                  type="submit"
                  className={`btn btn-primary btn-lg ${isSubmitting ? 'loading' : ''}`}
                  disabled={isSubmitting || messageCharCount.isOverLimit}
                >
                  {isSubmitting ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-base-content/60">
                You can also email us directly at{' '}
                <a
                  href="mailto:info@humancenteredsystems.io"
                  className="link link-primary"
                >
                  info@humancenteredsystems.io
                </a>
              </p>
              <p className="text-xs text-base-content/50 mt-2">
                We're always here for our family ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
