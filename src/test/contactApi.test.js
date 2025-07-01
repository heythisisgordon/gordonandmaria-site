import { describe, it, expect, vi, beforeEach } from 'vitest'
import { submitContactForm, checkApiHealth } from '../utils/contactApi'

describe('Contact API', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('submitContactForm', () => {
    const mockFormData = {
      name: '  John Doe  ',
      email: '  john@example.com  ',
      message: '  This is a test message with proper length.  '
    }

    it('should submit form successfully and return response', async () => {
      const mockResponse = {
        success: true,
        message: 'Thank you for your message!',
        messageId: 'test-message-id',
        submissionId: 'test-correlation-id'
      }

      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })

      const result = await submitContactForm(mockFormData)

      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'John Doe',
          email: 'john@example.com',
          message: 'This is a test message with proper length.'
        })
      })

      expect(result).toEqual(mockResponse)
    })

    it('should trim form data before sending', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ success: true })
      })

      await submitContactForm(mockFormData)

      const callArgs = global.fetch.mock.calls[0]
      const bodyData = JSON.parse(callArgs[1].body)

      expect(bodyData.name).toBe('John Doe')
      expect(bodyData.email).toBe('john@example.com')
      expect(bodyData.message).toBe('This is a test message with proper length.')
    })

    it('should handle API error responses', async () => {
      const errorResponse = {
        error: 'Validation failed',
        errors: ['Name is required']
      }

      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 400,
        json: () => Promise.resolve(errorResponse)
      })

      await expect(submitContactForm(mockFormData)).rejects.toThrow('Validation failed')
    })

    it('should handle API error without error message', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false,
        status: 500,
        json: () => Promise.resolve({})
      })

      await expect(submitContactForm(mockFormData)).rejects.toThrow('Failed to submit form')
    })

    it('should handle network errors', async () => {
      global.fetch.mockRejectedValueOnce(new TypeError('Failed to fetch'))

      await expect(submitContactForm(mockFormData)).rejects.toThrow(
        'Unable to connect to the server. Please check your internet connection and try again.'
      )
    })

    it('should handle other fetch errors', async () => {
      const customError = new Error('Custom error')
      global.fetch.mockRejectedValueOnce(customError)

      await expect(submitContactForm(mockFormData)).rejects.toThrow('Custom error')
    })

    it('should use correct API base URL in development', async () => {
      // The test environment sets NODE_ENV to 'test', so it should use localhost
      global.fetch.mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ success: true })
      })

      await submitContactForm(mockFormData)

      expect(global.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/api/contact',
        expect.any(Object)
      )
    })
  })

  describe('checkApiHealth', () => {
    it('should return true when health check succeeds', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: true
      })

      const result = await checkApiHealth()

      expect(result).toBe(true)
      expect(global.fetch).toHaveBeenCalledWith('http://localhost:3000/api/health')
    })

    it('should return false when health check fails', async () => {
      global.fetch.mockResolvedValueOnce({
        ok: false
      })

      const result = await checkApiHealth()

      expect(result).toBe(false)
    })

    it('should return false when network error occurs', async () => {
      global.fetch.mockRejectedValueOnce(new Error('Network error'))

      const result = await checkApiHealth()

      expect(result).toBe(false)
    })
  })
})
