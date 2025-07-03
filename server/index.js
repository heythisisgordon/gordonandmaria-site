import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import { randomUUID } from 'crypto';
import contactRoutes from './routes/contact.js';
import workshopRoutes from './routes/workshop.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Validate critical environment variables on startup
const validateEnvironment = () => {
  // Make EMAIL_PASSWORD optional for workshop testing
  if (!process.env.EMAIL_PASSWORD) {
    console.warn('⚠️  EMAIL_PASSWORD not set - email functionality will be disabled');
  } else {
    console.log('✅ Environment validation passed');
  }
};

// Validate environment before starting server
validateEnvironment();

// Trust proxy for proper IP forwarding (required for Render)
app.set('trust proxy', 1);

// Request correlation middleware for tracking
app.use((req, res, next) => {
  req.correlationId = randomUUID();
  console.log(`[${req.correlationId}] ${req.method} ${req.path} - ${req.ip}`);
  next();
});

// Request timeout protection
app.use((req, res, next) => {
  res.setTimeout(30000, () => {
    console.log(`[${req.correlationId}] Request timeout`);
    if (!res.headersSent) {
      res.status(408).json({ error: 'Request timeout' });
    }
  });
  next();
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      scriptSrc: ["'self'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS configuration
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://humancenteredsystems.io', 'https://www.humancenteredsystems.io']
    : ['http://localhost:5173', 'http://localhost:3000'],
  methods: ['GET', 'POST'],
  credentials: true
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later.',
  standardHeaders: true,
  legacyHeaders: false,
});

app.use(limiter);

// Contact form specific rate limiting
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5, // Limit each IP to 5 contact form submissions per hour
  message: {
    error: 'Too many contact form submissions. Please try again later.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// API routes
app.use('/api/contact', contactLimiter, contactRoutes);
app.use('/api/workshop', workshopRoutes);

// Enhanced health check endpoint
app.get('/api/health', async (req, res) => {
  const health = {
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    emailService: 'unknown',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development'
  };
  
  // Test email service connectivity
  try {
    const nodemailer = await import('nodemailer');
    const transporter = nodemailer.default.createTransport({
      host: 'smtp.privateemail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'info@humancenteredsystems.io',
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: true
      }
    });
    
    await transporter.verify();
    health.emailService = 'connected';
  } catch (error) {
    health.emailService = 'disconnected';
    health.status = 'DEGRADED';
    console.log(`[${req.correlationId}] Email service health check failed: ${error.message}`);
  }
  
  res.json(health);
});

// Serve static files from the React app build
app.use(express.static(path.join(__dirname, '../dist')));

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.stack);
  res.status(500).json({ 
    error: 'Something went wrong! Please try again later.' 
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
