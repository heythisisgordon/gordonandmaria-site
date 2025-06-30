# Deployment Guide - Contact Form Backend

## Production Deployment Steps

### 1. Render Dashboard Configuration

**Service Settings:**
- **Service Type:** Web Service (change from Static Site)
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Node Version:** 18+ (current: 22.16.0 is perfect)

### 2. Environment Variables (in Render Dashboard)

Add these environment variables in the Render dashboard:

```
EMAIL_PASSWORD=your_smtp_password_from_outlook
NODE_ENV=production
```

**To get EMAIL_PASSWORD:**
- This is the same password you used when setting up info@humancenteredsystems.io in Outlook
- It's your SMTP authentication password for smtp.privateemail.com

### 3. Deploy Process

1. **Commit and push** all changes to your repository
2. **Update Render service settings** (build/start commands)
3. **Add environment variables** in Render dashboard
4. **Trigger deployment** (Render will auto-deploy on next push)

### 4. Verification After Deployment

**Test these URLs:**
1. `https://humancenteredsystems.io/api/health` - Should return JSON status
2. `https://humancenteredsystems.io/contact` - Contact form should work
3. Submit test message - Should arrive in info@humancenteredsystems.io inbox

### 5. Email Flow

**When someone submits contact form:**
- Email sent FROM: info@humancenteredsystems.io
- Email sent TO: info@humancenteredsystems.io  
- Reply-To: visitor's email (for easy replies)
- Professional HTML formatting with visitor details

### 6. Troubleshooting

**If deployment fails:**
- Check Render build logs for errors
- Verify EMAIL_PASSWORD is set correctly
- Ensure service type is "Web Service" not "Static Site"

**If contact form doesn't work:**
- Check browser network tab for API errors
- Verify /api/health endpoint responds
- Check Render service logs for server errors

**If emails don't send:**
- Verify EMAIL_PASSWORD matches your Outlook SMTP password
- Check server logs for SMTP authentication errors
- Test email settings in Outlook first

## Production Architecture

```
User Form Submission → 
Frontend (React) → 
Backend API (/api/contact) → 
SMTP (smtp.privateemail.com) → 
Your Inbox (info@humancenteredsystems.io)
```

## Security Features

- Rate limiting (5 contact submissions per hour per IP)
- Input validation and sanitization
- CORS protection
- Security headers (helmet)
- Professional error handling
