# VC-101 Workshop Deployment Package

> **🚀 Complete automation for deploying the VC-101 AI-powered development workshop**

## 📋 Overview

This deployment package contains everything needed to deploy 5 containerized VS Code environments with Cline AI integration for the VC-101 workshop demonstration.

### What Gets Deployed
- **GitHub Repository**: Public repo with workshop infrastructure
- **GitHub Pages**: Automatic deployment target for live demos
- **5 Render Containers**: VS Code + Cline AI environments
- **Monitoring Dashboard**: Real-time container health monitoring

## 🎯 Quick Start

### Prerequisites
- [GitHub CLI](https://cli.github.com/) installed and authenticated
- [Git](https://git-scm.com/) installed
- 5 unique OpenAI API keys (for rate limiting)
- Render account access

### One-Command Deployment
```bash
chmod +x deploy-workshop.sh
./deploy-workshop.sh
```

## 📁 Package Contents

```
workshop-deployment-package/
├── deploy-workshop.sh              # Main deployment orchestrator
├── deploy-github-repo.sh          # GitHub repository setup
├── render-deploy-config.json      # Render container configurations
├── DEPLOYMENT_README.md           # This file
├── docker/                        # Container configuration
│   └── Dockerfile                 # VS Code + Cline setup
├── vscode-config/                 # VS Code settings
│   ├── settings.json              # Cline AI configuration
│   └── tasks.json                 # Deployment tasks
├── starter-projects/              # Demo scenarios
│   ├── demo-1-legacy/             # HTML → React conversion
│   ├── demo-2-react/              # Feature development
│   ├── demo-3-api/                # API enhancement
│   ├── demo-4-static/             # Portfolio modernization
│   └── demo-5-components/         # Component library
├── scripts/                       # Automation scripts
│   ├── deploy.sh                  # GitHub Pages deployment
│   └── reset.sh                   # Reset to starter state
├── monitoring/                    # Health monitoring
│   └── monitor.sh                 # Container status dashboard
└── docs/                          # Workshop materials
    └── presenter-guide.md         # Complete workshop script
```

## 🔧 Manual Deployment Steps

### Step 1: GitHub Repository Setup
```bash
chmod +x deploy-github-repo.sh
./deploy-github-repo.sh
```

**Expected Result**: 
- Repository: `https://github.com/heythisisgordon/workshop-demo`
- GitHub Pages: `https://heythisisgordon.github.io/workshop-demo`

### Step 2: Render Container Deployment

1. **Go to [Render Dashboard](https://render.com/dashboard)**

2. **For each container (demo-1 through demo-5):**
   - Click "New" → "Web Service"
   - **Repository**: `heythisisgordon/workshop-demo`
   - **Branch**: `main`
   - **Runtime**: Docker
   - **Dockerfile Path**: `docker/Dockerfile`
   - **Instance Type**: Starter ($7/month)

3. **Environment Variables** (unique per container):
   ```
   WORKSHOP_ID=demo-1  (demo-2, demo-3, demo-4, demo-5)
   OPENAI_API_KEY=sk-proj-[unique-key-per-container]
   GITHUB_REPO_URL=https://github.com/heythisisgordon/workshop-demo.git
   PORT=8080
   PASSWORD=workshop2025
   ```

### Step 3: Validation
```bash
chmod +x monitoring/monitor.sh
./monitoring/monitor.sh --test
```

## 🌐 Expected URLs

### Container URLs
- `https://vibe-demo-1.onrender.com` (password: `workshop2025`)
- `https://vibe-demo-2.onrender.com` (password: `workshop2025`)
- `https://vibe-demo-3.onrender.com` (password: `workshop2025`)
- `https://vibe-demo-4.onrender.com` (password: `workshop2025`)
- `https://vibe-demo-5.onrender.com` (password: `workshop2025`)

### GitHub Pages URLs
- `https://heythisisgordon.github.io/workshop-demo/demo-1/`
- `https://heythisisgordon.github.io/workshop-demo/demo-2/`
- `https://heythisisgordon.github.io/workshop-demo/demo-3/`
- `https://heythisisgordon.github.io/workshop-demo/demo-4/`
- `https://heythisisgordon.github.io/workshop-demo/demo-5/`

## 🎪 Workshop Scenarios Ready

### Demo 1: Legacy Modernization (15 min)
- **Container**: vibe-demo-1
- **Starting Point**: Ugly HTML with inline styles and jQuery
- **AI Prompt**: "Convert this to modern React with Tailwind CSS"
- **Result**: Professional React application in <5 minutes

### Demo 2: Feature Development (15 min)
- **Container**: vibe-demo-2
- **Starting Point**: Basic React app
- **AI Prompt**: "Add a contact form with validation and animations"
- **Result**: Professional contact form with full UX

### Demo 3: Student Participation (15 min)
- **Containers**: vibe-demo-3, vibe-demo-4, vibe-demo-5
- **Interactive**: Students drive AI with their own prompts
- **Showcase**: Multiple approaches to similar problems

## 📊 Success Metrics

### Technical Benchmarks
- [ ] Container startup time <30 seconds
- [ ] Cline AI response time <10 seconds
- [ ] Deploy pipeline duration <60 seconds
- [ ] GitHub Pages update time <2 minutes

### Deployment Checklist
- [ ] GitHub repository created and accessible
- [ ] GitHub Pages enabled and working
- [ ] 5 Render containers deployed successfully
- [ ] All containers respond to health checks
- [ ] VS Code loads in each container
- [ ] Cline extension configured and functional
- [ ] Deployment pipeline tested

## 🔍 Monitoring & Validation

### Real-time Monitoring
```bash
./monitoring/monitor.sh
```

### Health Checks
```bash
./monitoring/monitor.sh --test
```

### Manual Testing
1. Access each container URL with password `workshop2025`
2. Verify VS Code loads properly
3. Test simple Cline prompt: "Add a comment to this file"
4. Run deployment task (Ctrl+Shift+P → "Deploy to Live Site")
5. Verify GitHub Pages updates

## 💰 Cost Analysis

### Monthly Costs
- **Render Containers**: $35/month (5 × $7 Starter instances)
- **OpenAI API Usage**: ~$50/month (workshop period)
- **GitHub**: Free (public repository)
- **Total**: ~$85/month

### Build Times
- **Initial Deployment**: ~15 minutes per container
- **Subsequent Builds**: ~5-10 minutes per container
- **Total Setup Time**: ~2 hours including testing

## 🚨 Troubleshooting

### Common Issues

**Container Build Failures**
```bash
# Check Dockerfile syntax
docker build -t test-workshop -f docker/Dockerfile .
```

**GitHub Pages Not Working**
1. Check repository is public
2. Verify Pages settings: Settings → Pages → Deploy from main branch
3. Wait 2-5 minutes for initial deployment

**Cline AI Not Responding**
1. Check OpenAI API key is valid
2. Verify environment variables in Render
3. Check API rate limits (separate keys per container)

**Deployment Pipeline Failures**
1. Check GitHub repository URL in environment variables
2. Verify deploy.sh script has correct permissions
3. Test git push manually from container

## 🎯 Workshop Day Checklist

### Pre-Workshop (15 minutes before)
- [ ] Run monitoring dashboard
- [ ] Test all container URLs
- [ ] Verify Cline AI responses
- [ ] Prepare backup screen share

### During Workshop
- [ ] Monitor container status
- [ ] Have reset scripts ready
- [ ] Backup containers standing by

### Post-Workshop
- [ ] Send student URLs (expire in 7 days)
- [ ] Collect feedback
- [ ] Archive demo recordings

## 🔮 Success Outcome

**Workshop URLs Ready**:
- 5 live containers with password-protected VS Code + Cline AI
- Instant deployment to GitHub Pages
- Real-time monitoring dashboard
- Complete reset capability for back-to-back demos

**Expected Result**: Professional demonstration of AI-assisted development leading to business engagement and technology adoption.

---

**🚀 Ready to Deploy? Run `./deploy-workshop.sh` to begin!**
