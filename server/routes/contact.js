import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Input validation helper
const validateInput = (name, email, message) => {
  const errors = [];
  
  // Name validation
  if (!name || name.trim().length < 2) {
    errors.push('Name must be at least 2 characters long');
  }
  if (name && name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }
  
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push('Please provide a valid email address');
  }
  if (email && email.length > 254) {
    errors.push('Email address is too long');
  }
  
  // Message validation
  if (!message || message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }
  if (message && message.length > 5000) {
    errors.push('Message must be less than 5000 characters');
  }
  
  return errors;
};

// Sanitize input to prevent injection
const sanitizeInput = (input) => {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .trim();
};

// Email configuration
const createTransporter = () => {
  const emailConfig = {
    host: 'smtp.privateemail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: 'info@humancenteredsystems.io',
      pass: process.env.EMAIL_PASSWORD
    },
    tls: {
      rejectUnauthorized: true
    }
  };
  
  return nodemailer.createTransport(emailConfig);
};

// Business intelligence logging helper
const logSubmission = (name, email, correlationId) => {
  const timestamp = new Date().toISOString();
  const domain = email.split('@')[1];
  console.log(`BUSINESS_METRIC: contact_form_submission,${timestamp},${correlationId},${domain}`);
};

// POST /api/contact
router.post('/', async (req, res) => {
  const correlationId = req.correlationId || 'unknown';
  
  try {
    const { name, email, message } = req.body;
    
    console.log(`[${correlationId}] Contact form submission attempt from: ${email}`);
    
    // Validate input
    const validationErrors = validateInput(name, email, message);
    if (validationErrors.length > 0) {
      console.log(`[${correlationId}] Validation failed: ${validationErrors.join(', ')}`);
      return res.status(400).json({
        success: false,
        errors: validationErrors
      });
    }
    
    // Sanitize input
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);
    
    // Check if email service is configured
    if (!process.env.EMAIL_PASSWORD) {
      console.error(`[${correlationId}] Email password not configured`);
      return res.status(500).json({
        success: false,
        error: 'Email service is currently unavailable. Please try again later.'
      });
    }
    
    // Create transporter
    const transporter = createTransporter();
    
    // Verify connection
    try {
      await transporter.verify();
      console.log(`[${correlationId}] SMTP connection verified successfully`);
    } catch (verifyError) {
      console.error(`[${correlationId}] SMTP connection failed:`, verifyError);
      return res.status(500).json({
        success: false,
        error: 'Email service is currently unavailable. Please try again later.'
      });
    }
    
    // Email content
    const emailOptions = {
      from: 'info@humancenteredsystems.io',
      to: 'gordon@humancenteredsystems.io',
      replyTo: sanitizedEmail,
      subject: `New Contact Form Inquiry - ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${sanitizedEmail}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #333;">Message:</h3>
            <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #007bff; margin: 10px 0;">
              ${sanitizedMessage.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
          
          <p style="color: #666; font-size: 14px;">
            <strong>Submitted:</strong> ${new Date().toLocaleString('en-US', {
              timeZone: 'America/New_York',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })} EST
          </p>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Human-Centered Systems LLC contact form.
            Reply to this email to respond directly to the sender.
          </p>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${sanitizedName}
        Email: ${sanitizedEmail}
        
        Message:
        ${sanitizedMessage}
        
        Submitted: ${new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York'
        })} EST
      `
    };
    
    // Send email with delivery verification
    const info = await transporter.sendMail(emailOptions);
    
    // Verify email was sent successfully
    console.log(`[${correlationId}] Email sent successfully: ${info.messageId}`);
    
    // Log business intelligence data
    logSubmission(sanitizedName, sanitizedEmail, correlationId);
    
    // Log successful submission (without sensitive data)
    console.log(`[${correlationId}] Contact form submitted by: ${sanitizedName} (${sanitizedEmail}) at ${new Date().toISOString()}`);
    
    // Return success response with message tracking
    res.json({
      success: true,
      message: 'Thank you for your message! We\'ll get back to you within 24 hours.',
      messageId: info.messageId, // For internal tracking
      submissionId: correlationId
    });
    
  } catch (error) {
    console.error(`[${correlationId}] Contact form error:`, error);
    
    // Log admin alert for critical failures
    console.error(`ADMIN_ALERT: Contact form failure - Correlation ID: ${correlationId}, Error: ${error.message}`);
    
    // Don't expose internal errors to client
    res.status(500).json({
      success: false,
      error: 'Unable to send message at this time. Please try again later or contact us directly at info@humancenteredsystems.io.',
      submissionId: correlationId // For user reference when contacting support
    });
  }
});

export default router;
