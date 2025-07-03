import express from 'express'

const router = express.Router()

// In-memory storage for workshop registrations
// TODO: Replace with PostgreSQL database in production
const registrations = new Map()

// Workshop containers with individual URLs and passwords
const containers = [
  {
    id: 'vibe-container-1',
    url: 'https://vibe-container-1.onrender.com',
    password: 'vibe01',
    status: 'checking',
    assignedTo: null,
    assignedAt: null,
    lastHealthCheck: null,
    healthCheckError: null
  },
  {
    id: 'vibe-container-2', 
    url: 'https://vibe-container-2.onrender.com',
    password: 'vibe02',
    status: 'checking',
    assignedTo: null,
    assignedAt: null,
    lastHealthCheck: null,
    healthCheckError: null
  },
  {
    id: 'vibe-container-3',
    url: 'https://vibe-container-3.onrender.com', 
    password: 'vibe03',
    status: 'checking',
    assignedTo: null,
    assignedAt: null,
    lastHealthCheck: null,
    healthCheckError: null
  },
  {
    id: 'vibe-container-4',
    url: 'https://vibe-container-4.onrender.com',
    password: 'vibe04', 
    status: 'checking',
    assignedTo: null,
    assignedAt: null,
    lastHealthCheck: null,
    healthCheckError: null
  },
  {
    id: 'vibe-container-5',
    url: 'https://vibe-container-5.onrender.com',
    password: 'vibe05',
    status: 'checking',
    assignedTo: null,
    assignedAt: null,
    lastHealthCheck: null,
    healthCheckError: null
  }
]

/**
 * Check health of a single container
 */
async function checkContainerHealth(container) {
  try {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout
    
    // Check root URL instead of /health since these are VS Code containers
    const response = await fetch(container.url, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        'User-Agent': 'HCS-Workshop-Health-Check/1.0'
      }
    })
    
    clearTimeout(timeoutId)
    
    // Accept any successful response (2xx) or redirect (3xx) as healthy
    if (response.status >= 200 && response.status < 400) {
      container.status = container.assignedTo ? 'assigned' : 'available'
      container.lastHealthCheck = new Date().toISOString()
      container.healthCheckError = null
      return true
    } else {
      container.status = 'offline'
      container.lastHealthCheck = new Date().toISOString()
      container.healthCheckError = `HTTP ${response.status}: ${response.statusText}`
      return false
    }
  } catch (error) {
    container.status = 'offline'
    container.lastHealthCheck = new Date().toISOString()
    
    if (error.name === 'AbortError') {
      container.healthCheckError = 'Request timeout (10s)'
    } else {
      container.healthCheckError = error.message || 'Connection failed'
    }
    
    return false
  }
}

/**
 * Check health of all containers
 */
async function checkAllContainerHealth() {
  console.log('Starting health check for all containers...')
  
  const healthCheckPromises = containers.map(container => 
    checkContainerHealth(container).catch(error => {
      console.error(`Health check failed for ${container.id}:`, error)
      return false
    })
  )
  
  const results = await Promise.all(healthCheckPromises)
  const healthyCount = results.filter(Boolean).length
  
  console.log(`Health check complete: ${healthyCount}/${containers.length} containers healthy`)
  
  return {
    total: containers.length,
    healthy: healthyCount,
    offline: containers.length - healthyCount
  }
}

// Start periodic health checks every 2 minutes
setInterval(checkAllContainerHealth, 2 * 60 * 1000)

// Initial health check on startup
setTimeout(checkAllContainerHealth, 5000) // Wait 5 seconds after server start

/**
 * Health check endpoint
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    message: 'Workshop API is running',
    timestamp: new Date().toISOString(),
    totalRegistrations: registrations.size,
    availableContainers: containers.filter(c => c.status === 'available').length
  })
})

/**
 * Register for workshop
 */
router.post('/register', (req, res) => {
  try {
    const { name, email, experienceLevel, motivation } = req.body

    // Validate required fields
    if (!name || !email || !experienceLevel) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Name, email, and experience level are required'
      })
    }

    // Check if already registered
    if (registrations.has(email)) {
      const existingRegistration = registrations.get(email)
      return res.status(200).json({
        message: 'Already registered',
        registration: {
          name: existingRegistration.name,
          email: existingRegistration.email,
          registeredAt: existingRegistration.registeredAt
        },
        containerInfo: existingRegistration.containerInfo
      })
    }

    // Find available container
    const availableContainer = containers.find(c => c.status === 'available')
    
    if (!availableContainer) {
      return res.status(503).json({
        error: 'No containers available',
        message: 'All workshop containers are currently assigned. Please try again later.'
      })
    }

    // Assign container
    availableContainer.status = 'assigned'
    availableContainer.assignedTo = email
    availableContainer.assignedAt = new Date().toISOString()

    // Create registration
    const registration = {
      name,
      email,
      experienceLevel,
      motivation: motivation || '',
      registeredAt: new Date().toISOString(),
      containerInfo: {
        id: availableContainer.id,
        url: availableContainer.url,
        password: availableContainer.password
      }
    }

    registrations.set(email, registration)

    console.log(`Workshop registration: ${name} (${email}) assigned to ${availableContainer.id}`)

    res.status(201).json({
      message: 'Registration successful',
      registration: {
        name: registration.name,
        email: registration.email,
        registeredAt: registration.registeredAt
      },
      containerInfo: registration.containerInfo
    })

  } catch (error) {
    console.error('Workshop registration error:', error)
    res.status(500).json({
      error: 'Registration failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Get registration status
 */
router.get('/status/:email', (req, res) => {
  try {
    const { email } = req.params

    if (!email) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Email parameter is required'
      })
    }

    const registration = registrations.get(decodeURIComponent(email))

    if (!registration) {
      return res.status(404).json({
        error: 'Registration not found',
        message: 'No registration found for this email address'
      })
    }

    res.json({
      registration: {
        name: registration.name,
        email: registration.email,
        experienceLevel: registration.experienceLevel,
        registeredAt: registration.registeredAt
      },
      containerInfo: registration.containerInfo
    })

  } catch (error) {
    console.error('Registration status check error:', error)
    res.status(500).json({
      error: 'Status check failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Get container availability
 */
router.get('/containers', (req, res) => {
  try {
    const availableContainers = containers.filter(c => c.status === 'available')
    const assignedContainers = containers.filter(c => c.status === 'assigned')

    res.json({
      total: containers.length,
      available: availableContainers.length,
      assigned: assignedContainers.length,
      containers: containers.map(c => ({
        id: c.id,
        status: c.status,
        assignedAt: c.assignedAt || null
      }))
    })

  } catch (error) {
    console.error('Container availability check error:', error)
    res.status(500).json({
      error: 'Container check failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Get real-time container status for frontend
 */
router.get('/containers/status', (req, res) => {
  try {
    const containerStatus = containers.map(container => ({
      id: container.id.replace('vibe-container-', ''), // Return just the number (1, 2, 3, etc.)
      fullId: container.id,
      url: container.url,
      password: container.password,
      status: container.status,
      lastHealthCheck: container.lastHealthCheck,
      healthCheckError: container.healthCheckError,
      assignedTo: container.assignedTo,
      assignedAt: container.assignedAt
    }))

    res.json({
      timestamp: new Date().toISOString(),
      containers: containerStatus,
      summary: {
        total: containers.length,
        available: containers.filter(c => c.status === 'available').length,
        assigned: containers.filter(c => c.status === 'assigned').length,
        offline: containers.filter(c => c.status === 'offline').length,
        checking: containers.filter(c => c.status === 'checking').length
      }
    })

  } catch (error) {
    console.error('Container status fetch error:', error)
    res.status(500).json({
      error: 'Status fetch failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Manually trigger health check for all containers
 */
router.post('/containers/health-check', async (req, res) => {
  try {
    const results = await checkAllContainerHealth()
    
    res.json({
      message: 'Health check completed',
      results: results,
      timestamp: new Date().toISOString()
    })

  } catch (error) {
    console.error('Manual health check error:', error)
    res.status(500).json({
      error: 'Health check failed',
      message: 'An internal server error occurred during health check.'
    })
  }
})

/**
 * Admin: Get all registrations (for development/testing)
 */
router.get('/admin/registrations', (req, res) => {
  try {
    const allRegistrations = Array.from(registrations.values()).map(reg => ({
      name: reg.name,
      email: reg.email,
      experienceLevel: reg.experienceLevel,
      registeredAt: reg.registeredAt,
      containerId: reg.containerInfo.id
    }))

    res.json({
      totalRegistrations: registrations.size,
      registrations: allRegistrations
    })

  } catch (error) {
    console.error('Admin registrations fetch error:', error)
    res.status(500).json({
      error: 'Admin fetch failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Get workshop galleries status
 */
router.get('/galleries/status', async (req, res) => {
  try {
    // Map containers to their corresponding demo galleries
    const galleryStatus = containers.map(container => {
      const containerId = container.id.replace('vibe-container-', '')
      return {
        id: `demo-${containerId}`,
        containerUrl: container.url,
        galleryUrl: `https://vibe-container-${containerId}-demos.onrender.com`,
        demoCount: Math.floor(Math.random() * 5) + 1, // Mock demo count
        lastActivity: container.lastHealthCheck,
        status: container.status === 'available' || container.status === 'assigned' ? 'active' : 'idle'
      }
    })

    // Find a featured demo (mock data)
    const featuredDemo = {
      language: 'QBasic',
      title: 'Starfield Animation', 
      description: '1990s graphics code running in modern browser',
      demoUrl: 'https://vibe-container-1-demos.onrender.com/qbasic-starfield.html',
      containerId: 'demo-1'
    }

    res.json({
      timestamp: new Date().toISOString(),
      containers: galleryStatus,
      totalResurrections: galleryStatus.reduce((sum, g) => sum + g.demoCount, 0),
      featuredDemo: featuredDemo
    })

  } catch (error) {
    console.error('Gallery status fetch error:', error)
    res.status(500).json({
      error: 'Gallery status fetch failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Get featured resurrection demos
 */
router.get('/resurrections/featured', (req, res) => {
  try {
    // Mock featured resurrections data
    const featuredResurrections = [
      {
        language: 'QBasic',
        title: 'Starfield Animation',
        description: '1990s graphics code running at 60fps in modern browsers',
        demoUrl: 'https://vibe-container-1-demos.onrender.com/qbasic-starfield.html',
        galleryUrl: 'https://vibe-container-1-demos.onrender.com',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
        nostalgicAppeal: 'high'
      },
      {
        language: 'Pascal',
        title: 'Fire Effect Demo',
        description: 'Classic demo scene fire animation brought to HTML5 Canvas',
        demoUrl: 'https://vibe-container-2-demos.onrender.com/pascal-fire.html',
        galleryUrl: 'https://vibe-container-2-demos.onrender.com',
        createdAt: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(), // 2 days ago
        nostalgicAppeal: 'high'
      },
      {
        language: 'Flash',
        title: 'Interactive Animation',
        description: 'ActionScript animations running via modern Ruffle emulation',
        demoUrl: 'https://vibe-container-3-demos.onrender.com/flash-animation.html',
        galleryUrl: 'https://vibe-container-3-demos.onrender.com',
        createdAt: new Date(Date.now() - 72 * 60 * 60 * 1000).toISOString(), // 3 days ago
        nostalgicAppeal: 'medium'
      }
    ]

    res.json({
      timestamp: new Date().toISOString(),
      featured: featuredResurrections,
      totalCount: featuredResurrections.length
    })

  } catch (error) {
    console.error('Featured resurrections fetch error:', error)
    res.status(500).json({
      error: 'Featured resurrections fetch failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

/**
 * Admin: Reset container assignment (for development/testing)
 */
router.post('/admin/reset/:containerId', (req, res) => {
  try {
    const { containerId } = req.params
    
    const container = containers.find(c => c.id === containerId)
    
    if (!container) {
      return res.status(404).json({
        error: 'Container not found',
        message: 'Container ID not found'
      })
    }

    // Remove registration if exists
    if (container.assignedTo) {
      registrations.delete(container.assignedTo)
    }

    // Reset container
    container.status = 'available'
    container.assignedTo = null
    container.assignedAt = null

    console.log(`Container ${containerId} has been reset and is now available`)

    res.json({
      message: 'Container reset successfully',
      container: {
        id: container.id,
        status: container.status
      }
    })

  } catch (error) {
    console.error('Container reset error:', error)
    res.status(500).json({
      error: 'Reset failed',
      message: 'An internal server error occurred. Please try again.'
    })
  }
})

export default router
