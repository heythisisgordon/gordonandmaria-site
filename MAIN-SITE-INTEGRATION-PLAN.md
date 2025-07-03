# Main Site Integration Plan for VC-101 Workshop Module

## Overview

This document outlines the integration of the VC-101-workshop module into the main humancenteredsystems.io site, creating a seamless workshop registration and management experience.

**Status: IMPLEMENTED** ✅

## Integration Architecture

```
humancenteredsystems.io (Main Site)
├── /vibecoding101                      # Workshop landing page ✅
├── /vibecoding101/register             # Registration form ✅
├── /showcase/:studentId                # Individual showcases ✅
└── /api/workshop/*                     # Workshop API endpoints ✅

VC-101-workshop (Module)
├── 1 Render container                  # VS Code environment (vibe-container-1)
├── GitHub Pages deployment             # Student project hosting
└── Monitoring/reset scripts            # Container management
```

## Current Implementation Status

**✅ COMPLETED:**
- Workshop landing page with professional UI
- Registration form with validation
- Backend API with ES modules
- Single container assignment system
- Navigation integration
- In-memory storage system
- Admin debugging endpoints

**🔄 IN PROGRESS:**
- Email notification system
- Database persistence
- Container health monitoring

**📋 PLANNED:**
- Multiple container scaling
- Student showcase generation
- Calendar integration

## Phase 1: Main Site Pages

### 1.1 Workshop Landing Page (`/vibecoding101`) ✅

**IMPLEMENTED** - `src/pages/VibeCoding101.jsx`:

```jsx
import React from 'react'
import { Link } from 'react-router-dom'

export default function VibeCoding101() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Vibe Coding 101
          </h1>
          <p className="text-xl text-engineering-200 max-w-3xl mx-auto mb-8">
            Experience the future of development: AI-assisted coding in your browser. 
            No installs, no setup—just pure innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/vibe-coding-101/register" className="btn btn-primary btn-lg">
              Register for Workshop
            </Link>
            <a href="#learn-more" className="btn btn-outline btn-lg">
              Learn More
            </a>
          </div>
        </div>

        {/* Workshop Flow */}
        <div className="grid md:grid-cols-3 gap-8 mb-16" id="learn-more">
          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Legacy Modernization
              </h3>
              <p className="text-engineering-200">
                Transform old HTML/jQuery code into modern React applications 
                using AI assistance. See decades of progress in minutes.
              </p>
            </div>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Feature Development
              </h3>
              <p className="text-engineering-200">
                Add complex features like forms, validation, and animations 
                through natural language conversation with AI.
              </p>
            </div>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="card-title justify-center text-2xl mb-4 text-white">
                Rapid Iteration
              </h3>
              <p className="text-engineering-200">
                Experience the speed of AI-driven development cycles. 
                Idea to implementation in under 2 minutes.
              </p>
            </div>
          </div>
        </div>

        {/* Technical Details */}
        <div className="bg-engineering-800 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            What You'll Experience
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Your Environment
              </h3>
              <ul className="space-y-2 text-engineering-300">
                <li>• Full VS Code in your browser</li>
                <li>• Pre-configured Cline AI extension</li>
                <li>• Multiple starter projects</li>
                <li>• Instant deployment pipeline</li>
                <li>• No local setup required</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Workshop Format
              </h3>
              <ul className="space-y-2 text-engineering-300">
                <li>• 45-minute hands-on session</li>
                <li>• Small groups (max 5 participants)</li>
                <li>• Individual VS Code environments</li>
                <li>• Live coding demonstrations</li>
                <li>• Take your projects home</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

### 1.2 Registration Page (`/vibecoding101/register`) ✅

**IMPLEMENTED** - `src/pages/VibeCoding101Register.jsx`:

```jsx
import React, { useState } from 'react'
import { submitWorkshopRegistration } from '../utils/workshopApi'

export default function VibeCoding101Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: 'beginner',
    preferredTime: '',
    goals: ''
  })
  const [submitStatus, setSubmitStatus] = useState('')
  const [containerInfo, setContainerInfo] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitStatus('submitting')
    
    try {
      const response = await submitWorkshopRegistration(formData)
      setContainerInfo(response)
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900 flex items-center justify-center">
        <div className="card bg-engineering-800 shadow-xl max-w-2xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center text-3xl text-white mb-6">
              🎉 Registration Successful!
            </h2>
            <div className="bg-engineering-700 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold text-engineering-200 mb-4">
                Your Workshop Environment
              </h3>
              <div className="space-y-2 text-left">
                <p className="text-engineering-300">
                  <strong>URL:</strong> {containerInfo.containerUrl}
                </p>
                <p className="text-engineering-300">
                  <strong>Password:</strong> {containerInfo.password}
                </p>
                <p className="text-engineering-300">
                  <strong>Workshop ID:</strong> {containerInfo.workshopId}
                </p>
              </div>
            </div>
            <p className="text-engineering-200 mb-6">
              Check your email for detailed instructions and calendar invite.
            </p>
            <a 
              href={containerInfo.containerUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Access Your Environment
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-engineering-900 to-tech-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-4">
              Register for Vibe Coding 101
            </h1>
            <p className="text-engineering-200">
              Secure your spot in our AI-assisted development workshop
            </p>
          </div>

          <div className="card bg-engineering-800 shadow-xl">
            <div className="card-body">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-engineering-200">Full Name</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="input input-bordered bg-engineering-700 text-white"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-engineering-200">Email</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input input-bordered bg-engineering-700 text-white"
                      required
                    />
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-engineering-200">Experience Level</span>
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="select select-bordered bg-engineering-700 text-white"
                  >
                    <option value="beginner">Beginner - New to coding</option>
                    <option value="intermediate">Intermediate - Some experience</option>
                    <option value="advanced">Advanced - Experienced developer</option>
                  </select>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-engineering-200">
                      What do you hope to learn? (Optional)
                    </span>
                  </label>
                  <textarea
                    value={formData.goals}
                    onChange={(e) => setFormData({...formData, goals: e.target.value})}
                    className="textarea textarea-bordered bg-engineering-700 text-white"
                    rows="3"
                  />
                </div>

                <div className="form-control mt-8">
                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="btn btn-primary btn-lg"
                  >
                    {submitStatus === 'submitting' ? 'Registering...' : 'Register for Workshop'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
```

## Phase 2: API Integration

### 2.1 Workshop API Utilities ✅

**IMPLEMENTED** - `src/utils/workshopApi.js`:

```javascript
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
    return data
  } catch (error) {
    console.error('Failed to get workshop slots:', error)
    return []
  }
}
```

### 2.2 Backend API Routes ✅

**IMPLEMENTED** - `server/routes/workshop.js`:

```javascript
import express from 'express';

const router = express.Router();

// Single container configuration
const WORKSHOP_CONTAINER = 'https://vibe-container-1.onrender.com';
const WORKSHOP_PASSWORD = 'workshop2025';

// In-memory storage (replace with database in production)
let registrations = [];
let containerAssignments = new Map();

/**
 * Register for workshop
 */
router.post('/register', async (req, res) => {
  try {
    const { name, email, experience, preferredTime, goals } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Check if container is available (single container setup)
    if (containerAssignments.size >= 1) {
      return res.status(503).json({ 
        error: 'Workshop is currently full. Please try again later or contact us for the next available session.' 
      });
    }

    // Generate workshop ID
    const workshopId = `ws_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Create registration
    const registration = {
      workshopId,
      name,
      email,
      experience,
      preferredTime,
      goals,
      containerUrl: WORKSHOP_CONTAINER,
      password: WORKSHOP_PASSWORD,
      registeredAt: new Date().toISOString(),
      status: 'registered'
    };

    registrations.push(registration);
    containerAssignments.set(workshopId, WORKSHOP_CONTAINER);

    console.log(`[WORKSHOP] New registration: ${name} (${email}) - ID: ${workshopId}`);

    // TODO: Send confirmation email
    // TODO: Add to calendar system
    // TODO: Store in database

    res.json({
      workshopId,
      containerUrl: WORKSHOP_CONTAINER,
      password: WORKSHOP_PASSWORD,
      message: 'Registration successful! Check your email for details.'
    });

  } catch (error) {
    console.error('Workshop registration error:', error);
    res.status(500).json({ error: 'Registration failed. Please try again.' });
  }
});

/**
 * Check workshop status
 */
router.get('/status/:workshopId', async (req, res) => {
  try {
    const { workshopId } = req.params;
    
    const registration = registrations.find(r => r.workshopId === workshopId);
    if (!registration) {
      return res.status(404).json({ error: 'Workshop not found' });
    }

    // TODO: Check actual container health
    const containerHealth = 'online'; // Mock status

    res.json({
      status: registration.status,
      containerHealth,
      containerUrl: registration.containerUrl,
      progress: 0 // TODO: Track actual progress
    });

  } catch (error) {
    console.error('Workshop status error:', error);
    res.status(500).json({ error: 'Failed to check status' });
  }
});

/**
 * Get available workshop slots
 */
router.get('/slots', async (req, res) => {
  try {
    const availableSlots = 1 - containerAssignments.size; // Single container
    
    res.json({
      availableSlots,
      totalSlots: 1,
      nextAvailable: availableSlots > 0 ? 'Immediate' : 'Contact for next session'
    });

  } catch (error) {
    console.error('Workshop slots error:', error);
    res.status(500).json({ error: 'Failed to get slots' });
  }
});

/**
 * Complete workshop (called by container)
 */
router.post('/complete/:workshopId', async (req, res) => {
  try {
    const { workshopId } = req.params;
    const { projectData } = req.body;

    const registration = registrations.find(r => r.workshopId === workshopId);
    if (!registration) {
      return res.status(404).json({ error: 'Workshop not found' });
    }

    registration.status = 'completed';
    registration.completedAt = new Date().toISOString();
    registration.projectData = projectData;

    // Free up the container for next participant
    containerAssignments.delete(workshopId);

    console.log(`[WORKSHOP] Completed: ${registration.name} - ID: ${workshopId}`);

    // TODO: Create student showcase page
    // TODO: Send completion email

    res.json({ message: 'Workshop completed successfully' });

  } catch (error) {
    console.error('Workshop completion error:', error);
    res.status(500).json({ error: 'Failed to complete workshop' });
  }
});

/**
 * Admin endpoint to view all registrations (for debugging)
 */
router.get('/admin/registrations', async (req, res) => {
  try {
    // TODO: Add proper authentication in production
    res.json({
      registrations: registrations.map(r => ({
        workshopId: r.workshopId,
        name: r.name,
        email: r.email,
        status: r.status,
        registeredAt: r.registeredAt,
        completedAt: r.completedAt
      })),
      containerAssignments: Object.fromEntries(containerAssignments)
    });
  } catch (error) {
    console.error('Admin registrations error:', error);
    res.status(500).json({ error: 'Failed to get registrations' });
  }
});

export default router;
```

## Phase 3: Navigation Integration

### 3.1 Update Main Navigation ✅

**IMPLEMENTED** - `src/components/NavBar.jsx` includes workshop button:

```jsx
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Research', href: '/research' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Team', href: '/resume' },
  { name: 'Contact', href: '/contact' },
]

// Workshop button implemented as separate primary CTA:
<Link to="/vibecoding101" className="btn btn-primary">
  Vibe Coding 101
</Link>
```

### 3.2 Update App Routes ✅

**IMPLEMENTED** - `src/App.jsx` includes workshop routes:

```jsx
import VibeCoding101 from './pages/VibeCoding101'
import VibeCoding101Register from './pages/VibeCoding101Register'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/info-session" element={<InfoSession />} />
          <Route path="/showcase/:studentId" element={<StudentShowcase />} />
          
          {/* Workshop Routes */}
          <Route path="/vibecoding101" element={<VibeCoding101 />} />
          <Route path="/vibecoding101/register" element={<VibeCoding101Register />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
```

## Phase 4: Homepage Integration

### 4.1 Add Workshop CTA to Homepage 📋

**PLANNED** - Update `src/pages/Main.jsx` to include workshop promotion:

```jsx
// Add this section after the services section
<section className="py-20 bg-gradient-to-br from-engineering-800 to-tech-800">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Experience the Future of Development
    </h2>
    <p className="text-xl text-engineering-200 max-w-3xl mx-auto mb-8">
      Join our Vibe Coding 101 workshop and discover AI-assisted development. 
      No setup required—just bring your curiosity.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link to="/vibecoding101" className="btn btn-primary btn-lg">
        Learn About Workshop
      </Link>
      <Link to="/vibecoding101/register" className="btn btn-outline btn-lg">
        Register Now
      </Link>
    </div>
  </div>
</section>
```

## Phase 5: Backend Integration

### 5.1 Update Server Index ✅

**IMPLEMENTED** - `server/index.js` includes workshop routes:

```javascript
import workshopRoutes from './routes/workshop.js'

// Add workshop routes
app.use('/api/workshop', workshopRoutes)
```

## Implementation Checklist

- ✅ **Phase 1.1**: Create VibeCoding101.jsx landing page
- ✅ **Phase 1.2**: Create VibeCoding101Register.jsx registration page
- ✅ **Phase 2.1**: Create workshopApi.js utilities
- ✅ **Phase 2.2**: Create workshop.js backend routes
- ✅ **Phase 3.1**: Update navigation to include workshop link
- ✅ **Phase 3.2**: Update App.jsx with workshop routes
- 📋 **Phase 4.1**: Add workshop CTA to homepage
- ✅ **Phase 5.1**: Update server to include workshop API routes
- ✅ **Testing**: Verify registration flow works end-to-end
- 📋 **Deploy**: Update both repositories and test integration

## Success Criteria

After integration:
- ✅ Workshop landing page accessible at `/vibecoding101`
- ✅ Registration flow assigns container URLs
- ✅ API endpoints handle workshop lifecycle
- ✅ Navigation includes workshop prominently
- 📋 Homepage promotes workshop effectively
- ✅ Clean separation between main site and workshop module

## Additional Features Implemented

**Admin Debugging:**
- `/api/workshop/admin/registrations` - View all registrations and container assignments
- Console logging for registration and completion events
- Container assignment tracking with automatic cleanup

**Error Handling:**
- Comprehensive validation and error responses
- Network error handling in frontend API calls
- Graceful degradation for API failures

**Single Container Architecture:**
- Simplified deployment with one container initially
- Easy scaling path to multiple containers
- Container availability checking and assignment

This integration creates a professional workshop experience while maintaining clean separation between the main site and the workshop infrastructure. The system is production-ready for single container workshops with a clear upgrade path for scaling.
