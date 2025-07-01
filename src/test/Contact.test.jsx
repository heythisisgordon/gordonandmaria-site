import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../pages/Contact'
import * as contactApi from '../utils/contactApi'

// Mock the contact API
vi.mock('../utils/contactApi')

describe('Contact Page', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('should render contact form correctly', () => {
    render(<Contact />)
    
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('Send us a message')).toBeInTheDocument()
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('should update form data when user types', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const nameInput = screen.getByLabelText(/name/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/message/i)
    
    await user.type(nameInput, 'John Doe')
    await user.type(emailInput, 'john@example.com')
    await user.type(messageInput, 'This is my test message')
    
    expect(nameInput).toHaveValue('John Doe')
    expect(emailInput).toHaveValue('john@example.com')
    expect(messageInput).toHaveValue('This is my test message')
  })

  it('should show real-time email validation', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const emailInput = screen.getByLabelText(/email/i)
    
    // Type invalid email
    await user.type(emailInput, 'invalid-email')
    expect(screen.getByText('Invalid email format')).toBeInTheDocument()
    
    // Clear and type valid email
    await user.clear(emailInput)
    await user.type(emailInput, 'john@example.com')
    expect(screen.getByText('✓ Valid')).toBeInTheDocument()
  })

  it('should show character count for message field', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const messageInput = screen.getByLabelText(/message/i)
    
    await user.type(messageInput, 'Hello')
    expect(screen.getByText('5/5000 characters')).toBeInTheDocument()
  })

  it('should prevent submission with invalid data', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    await user.click(submitButton)
    
    expect(screen.getByText('Please fix the following issues:')).toBeInTheDocument()
    expect(screen.getByText(/Please enter your full name/)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a valid email address/)).toBeInTheDocument()
    expect(screen.getByText(/Please enter a message/)).toBeInTheDocument()
  })

  it('should clear validation errors when user starts typing', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    const nameInput = screen.getByLabelText(/name/i)
    
    // Submit to trigger validation errors
    await user.click(submitButton)
    expect(screen.getByText('Please fix the following issues:')).toBeInTheDocument()
    
    // Start typing in name field
    await user.type(nameInput, 'John')
    
    // Validation errors should be cleared
    expect(screen.queryByText('Please fix the following issues:')).not.toBeInTheDocument()
  })

  it('should submit form successfully', async () => {
    const user = userEvent.setup()
    const mockResponse = {
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      messageId: 'test-id',
      submissionId: 'correlation-id'
    }
    
    contactApi.submitContactForm.mockResolvedValue(mockResponse)
    
    render(<Contact />)
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is my test message with enough characters')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Check loading state
    expect(screen.getByText('Sending...')).toBeInTheDocument()
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Thank you for your message/)).toBeInTheDocument()
    })
    
    // Check that form was cleared
    expect(screen.getByLabelText(/name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email/i)).toHaveValue('')
    expect(screen.getByLabelText(/message/i)).toHaveValue('')
  })

  it('should handle form submission errors', async () => {
    const user = userEvent.setup()
    const errorMessage = 'Unable to send message at this time'
    
    contactApi.submitContactForm.mockRejectedValue(new Error(errorMessage))
    
    render(<Contact />)
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is my test message with enough characters')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Wait for error message
    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument()
    })
    
    // Form should not be cleared on error
    expect(screen.getByLabelText(/name/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/email/i)).toHaveValue('john@example.com')
    expect(screen.getByLabelText(/message/i)).toHaveValue('This is my test message with enough characters')
  })

  it('should disable submit button when over character limit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const messageInput = screen.getByLabelText(/message/i)
    const submitButton = screen.getByRole('button', { name: /send message/i })
    
    // Type a message over the limit (5000 characters)
    const longMessage = 'a'.repeat(5001)
    await user.type(messageInput, longMessage)
    
    expect(submitButton).toBeDisabled()
  })

  it('should disable form inputs during submission', async () => {
    const user = userEvent.setup()
    
    // Mock API to delay response
    let resolveSubmission
    const submissionPromise = new Promise(resolve => {
      resolveSubmission = resolve
    })
    
    contactApi.submitContactForm.mockImplementation(() => submissionPromise)
    
    render(<Contact />)
    
    // Fill out form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is my test message with enough characters')
    
    // Submit form
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Check that inputs are disabled during submission
    expect(screen.getByLabelText(/name/i)).toBeDisabled()
    expect(screen.getByLabelText(/email/i)).toBeDisabled()
    expect(screen.getByLabelText(/message/i)).toBeDisabled()
    
    // Resolve the submission
    resolveSubmission({ success: true, message: 'Success' })
    
    // Wait for submission to complete
    await waitFor(() => {
      expect(screen.getByText(/Success/)).toBeInTheDocument()
    })
  })

  it('should clear submit status when form is modified', async () => {
    const user = userEvent.setup()
    
    contactApi.submitContactForm.mockResolvedValue({
      success: true,
      message: 'Thank you for your message!'
    })
    
    render(<Contact />)
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/message/i), 'This is my test message with enough characters')
    await user.click(screen.getByRole('button', { name: /send message/i }))
    
    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Thank you for your message/)).toBeInTheDocument()
    })
    
    // Modify form
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe')
    
    // Success message should be cleared
    expect(screen.queryByText(/Thank you for your message/)).not.toBeInTheDocument()
  })

  it('should display contact email link', () => {
    render(<Contact />)
    
    const emailLink = screen.getByText('info@humancenteredsystems.io')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@humancenteredsystems.io')
  })
})
