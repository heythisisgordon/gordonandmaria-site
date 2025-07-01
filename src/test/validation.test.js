import { describe, it, expect } from 'vitest'
import { 
  isValidEmail, 
  validateContactForm, 
  validateEmailRealtime, 
  getCharacterCount 
} from '../utils/validation'

describe('Validation Utils', () => {
  describe('isValidEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
      expect(isValidEmail('test+tag@example.org')).toBe(true)
    })

    it('should return false for invalid email addresses', () => {
      expect(isValidEmail('')).toBe(false)
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('test@')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
      expect(isValidEmail('test.example.com')).toBe(false)
    })
  })

  describe('validateContactForm', () => {
    const validFormData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'This is a valid message with more than 10 characters.'
    }

    it('should return valid for correct form data', () => {
      const result = validateContactForm(validFormData)
      expect(result.isValid).toBe(true)
      expect(result.errors).toEqual([])
    })

    it('should validate name field', () => {
      const result = validateContactForm({
        ...validFormData,
        name: 'A' // Too short
      })
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please enter your full name (at least 2 characters)')
    })

    it('should validate email field', () => {
      const result = validateContactForm({
        ...validFormData,
        email: 'invalid-email'
      })
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please enter a valid email address')
    })

    it('should validate message field', () => {
      const result = validateContactForm({
        ...validFormData,
        message: 'Short' // Too short
      })
      expect(result.isValid).toBe(false)
      expect(result.errors).toContain('Please enter a message (at least 10 characters)')
    })

    it('should return multiple errors for multiple invalid fields', () => {
      const result = validateContactForm({
        name: 'A',
        email: 'invalid',
        message: 'Short'
      })
      expect(result.isValid).toBe(false)
      expect(result.errors).toHaveLength(3)
    })
  })

  describe('validateEmailRealtime', () => {
    it('should return null state for empty email', () => {
      const result = validateEmailRealtime('')
      expect(result.isValid).toBe(null)
      expect(result.message).toBe('')
    })

    it('should return invalid state for short email', () => {
      const result = validateEmailRealtime('ab')
      expect(result.isValid).toBe(false)
      expect(result.message).toBe('Email too short')
    })

    it('should return invalid state for invalid format', () => {
      const result = validateEmailRealtime('invalid-email')
      expect(result.isValid).toBe(false)
      expect(result.message).toBe('Invalid email format')
    })

    it('should return valid state for valid email', () => {
      const result = validateEmailRealtime('test@example.com')
      expect(result.isValid).toBe(true)
      expect(result.message).toBe('Valid email')
    })
  })

  describe('getCharacterCount', () => {
    it('should count characters correctly', () => {
      const result = getCharacterCount('Hello world', 100)
      expect(result.current).toBe(11)
      expect(result.max).toBe(100)
      expect(result.remaining).toBe(89)
      expect(result.isOverLimit).toBe(false)
    })

    it('should detect over limit', () => {
      const result = getCharacterCount('This is too long', 10)
      expect(result.current).toBe(16)
      expect(result.isOverLimit).toBe(true)
      expect(result.remaining).toBe(0)
    })

    it('should handle empty text', () => {
      const result = getCharacterCount('', 100)
      expect(result.current).toBe(0)
      expect(result.remaining).toBe(100)
      expect(result.isOverLimit).toBe(false)
    })

    it('should calculate percentage correctly', () => {
      const result = getCharacterCount('Hello', 10)
      expect(result.percentage).toBe(50)
    })
  })
})
