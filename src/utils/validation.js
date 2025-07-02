// Form validation utilities

/**
 * Validate email address format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate contact form data
 * @param {Object} formData - Form data to validate
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email
 * @param {string} formData.message - Message content
 * @returns {Object} Validation result with isValid boolean and errors array
 */
export const validateContactForm = (formData) => {
  const errors = [];
  
  // Name validation
  if (!formData.name || formData.name.trim().length < 2) {
    errors.push('Please enter your full name (at least 2 characters)');
  }
  if (formData.name && formData.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // Email validation
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push('Please enter a valid email address');
  }
  if (formData.email && formData.email.length > 254) {
    errors.push('Email address is too long');
  }
  
  // Message validation
  if (!formData.message || formData.message.trim().length < 10) {
    errors.push('Please enter a message (at least 10 characters)');
  }
  if (formData.message && formData.message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * Real-time email validation for input feedback
 * @param {string} email - Email to validate
 * @returns {Object} Validation state
 */
export const validateEmailRealtime = (email) => {
  if (!email) {
    return { isValid: null, message: '' };
  }
  
  if (email.length < 3) {
    return { isValid: false, message: 'Email too short' };
  }
  
  if (!isValidEmail(email)) {
    return { isValid: false, message: 'Invalid email format' };
  }
  
  return { isValid: true, message: 'Valid email' };
};

/**
 * Get character count with validation state
 * @param {string} text - Text to count
 * @param {number} maxLength - Maximum allowed length
 * @returns {Object} Character count info
 */
export const getCharacterCount = (text, maxLength) => {
  const length = text ? text.length : 0;
  const remaining = maxLength - length;
  const isOverLimit = remaining < 0;
  
  return {
    current: length,
    max: maxLength,
    remaining: Math.max(0, remaining),
    isOverLimit,
    percentage: (length / maxLength) * 100
  };
};
