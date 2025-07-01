import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Contact from '../pages/Contact'
import * as contactApi from '../utils/contactApi'

// Mock the contact API
vi.mock('../utils/contactApi')

describe('Contact Page - Essential Tests', () => {
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

  it('should display contact email link', () => {
    render(<Contact />)
    
    const emailLink = screen.getByText('info@humancenteredsystems.io')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:info@humancenteredsystems.io')
  })

  it('should prevent empty form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    
    const submitButton = screen.getByRole('button', { name: /send message/i })
    const nameInput = screen.getByLabelText(/name/i)
    
    // Try to submit empty form
    await user.click(submitButton)
    
    // The HTML5 validation should prevent submission
    // We can verify this by checking that the name field gets focus and has validation state
    expect(nameInput).toHaveAttribute('required')
    expect(nameInput).toHaveValue('')
    
    // The form submission should be prevented by HTML5 validation
    // so we shouldn't see any success messages
    expect(screen.queryByText(/thank you/i)).not.toBeInTheDocument()
  })
})
