// Workshop API utilities
const API_BASE = process.env.NODE_ENV === 'production'
  ? '' // Same domain in production
  : 'http://localhost:3000' // Local development

/**
 * Submit workshop registration
 */
export const submitWorkshopRegistration = async (formData) => {
  try {
    const response = await fetch(`${API_BASE}/api/workshop/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Registration failed')
    }

    return data
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Unable to connect to the server. Please try again.')
    }
    throw error
  }
}

/**
 * Check workshop container status
 */
export const checkWorkshopStatus = async (workshopId) => {
  try {
    const response = await fetch(`${API_BASE}/api/workshop/status/${workshopId}`)
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to check status')
    }
    
    return data
  } catch (error) {
    console.error('Failed to check workshop status:', error)
    return { status: 'unknown', containerHealth: 'unknown' }
  }
}

/**
 * Get available workshop slots
 */
export const getWorkshopSlots = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/workshop/slots`)
    const data = await response.json()
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to get slots')
    }
    
    return data
  } catch (error) {
    console.error('Failed to get workshop slots:', error)
    return { availableSlots: 0, totalSlots: 1, nextAvailable: 'Unknown' }
  }
}

/**
 * Complete workshop session
 */
export const completeWorkshop = async (workshopId, projectData) => {
  try {
    const response = await fetch(`${API_BASE}/api/workshop/complete/${workshopId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ projectData }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error || 'Failed to complete workshop')
    }

    return data
  } catch (error) {
    console.error('Failed to complete workshop:', error)
    throw error
  }
}
