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
