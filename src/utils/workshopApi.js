const API_BASE_URL = import.meta.env.DEV ? 'http://localhost:3000' : ''

/**
 * Register for the Vibe Coding 101 workshop
 * @param {Object} registrationData - The registration form data
 * @param {string} registrationData.name - Full name
 * @param {string} registrationData.email - Email address
 * @param {string} registrationData.experienceLevel - Experience level
 * @param {string} registrationData.motivation - Motivation (optional)
 * @returns {Promise<Object>} Registration response with container info
 */
export async function registerForWorkshop(registrationData) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(registrationData),
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Workshop registration error:', error)
    throw error
  }
}

/**
 * Get workshop registration status
 * @param {string} email - Email address to check
 * @returns {Promise<Object>} Registration status
 */
export async function getRegistrationStatus(email) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/status/${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Registration status check error:', error)
    throw error
  }
}

/**
 * Get available workshop containers
 * @returns {Promise<Object>} Available containers info
 */
export async function getAvailableContainers() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/containers`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Container availability check error:', error)
    throw error
  }
}

/**
 * Get real-time container status with health checks
 * @returns {Promise<Object>} Real-time container status
 */
export async function getContainerStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/containers/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Container status check error:', error)
    throw error
  }
}

/**
 * Trigger manual health check for all containers
 * @returns {Promise<Object>} Health check results
 */
export async function triggerHealthCheck() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/containers/health-check`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Health check trigger error:', error)
    throw error
  }
}

/**
 * Get workshop gallery status with demo availability
 * @returns {Promise<Object>} Gallery status with demo information
 */
export async function getGalleryStatus() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/galleries/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Gallery status check error:', error)
    throw error
  }
}

/**
 * Get featured resurrection demos
 * @returns {Promise<Object>} Featured resurrection demonstrations
 */
export async function getFeaturedResurrections() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/resurrections/featured`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.message || `HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Featured resurrections fetch error:', error)
    throw error
  }
}

/**
 * Health check for workshop API
 * @returns {Promise<Object>} API health status
 */
export async function checkWorkshopApiHealth() {
  try {
    const response = await fetch(`${API_BASE_URL}/api/workshop/health`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error('Workshop API health check error:', error)
    throw error
  }
}
