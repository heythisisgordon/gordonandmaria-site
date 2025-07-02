# VC-101 Workshop Demo Infrastructure

> **🚀 AI-Powered Development Workshop Environment**
> 
> Complete infrastructure for demonstrating AI-assisted development using code-server containers with Cline AI integration.

## 📋 Overview

This repository contains everything needed to run the VC-101 "Vibe Coding" workshop, where students experience AI-assisted development in real-time through containerized VS Code environments.

### Core Value Proposition
- **Student types intent** → **AI writes code** → **Live result in seconds**
- No local installs, no complex setup, pure demonstration of AI-assisted development

## 🏗️ Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                    Workshop Demo Environment                     │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │ 5 Pre-configured code-server Containers (Render)           │ │
│  │                                                             │ │
│  │ ┌─────────────┐  ┌─────────────┐  ┌─────────────┐         │ │
│  │ │vibe-demo-1  │  │vibe-demo-2  │  │vibe-demo-3  │ ...     │ │
│  │ │VS Code Web  │  │VS Code Web  │  │VS Code Web  │         │ │
│  │ │+ Cline AI   │  │+ Cline AI   │  │+ Cline AI   │         │ │
│  │ └─────────────┘  └─────────────┘  └─────────────┘         │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                │                                │
│                                ▼                                │
│                    ┌─────────────────────┐                     │
│                    │ GitHub Repository   │                     │
│                    │ + GitHub Pages      │                     │
│                    │ (Instant Deploy)    │                     │
│                    └─────────────────────┘                     │
└──────────────────────────────────────────────────────────────────┘
```

## 📁 Project Structure

```
workshop-demo/
├── docker/                    # Container configuration
│   └── Dockerfile            # Code-server + Cline setup
├── vscode-config/            # VS Code settings
│   ├── settings.json         # Cline AI configuration
│   └── tasks.json           # Workshop tasks
├── starter-projects/         # Demo scenarios
│   ├── demo-1-legacy/       # Legacy HTML → React conversion
│   ├── demo-2-react/        # Basic React app enhancement
│   ├── demo-3-api/          # Simple Node.js API
│   ├── demo-4-static/       # Portfolio static site
│   └── demo-5-components/   # Component library
├── scripts/                 # Automation scripts
│   ├── deploy.sh           # GitHub Pages deployment
│   └── reset.sh            # Reset to starter state
├── monitoring/             # Health monitoring
│   └── monitor.sh         # Container status dashboard
└── docs/                  # Workshop materials
    └── presenter-guide.md # Demo scripts and timing
```

## 🚀 Quick Start

### For Workshop Presenters

1. **Deploy Containers** (one-time setup):
   ```bash
   # Deploy 5 containers to Render
   ./scripts/deploy-containers.sh
   ```

2. **Monitor Container Health**:
   ```bash
   # Real-time dashboard
   ./monitoring/monitor.sh
   
   # Quick health check
   ./monitoring/monitor.sh --test
   ```

3. **Workshop Day URLs**:
   - `https://vibe-demo-1.onrender.com` (password: `workshop2025`)
   - `https://vibe-demo-2.onrender.com` (password: `workshop2025`)
   - `https://vibe-demo-3.onrender.com` (password: `workshop2025`)
   - `https://vibe-demo-4.onrender.com` (password: `workshop2025`)
   - `https://vibe-demo-5.onrender.com` (password: `workshop2025`)

### For Students

Each student receives:
- **Container URL**: `https://vibe-demo-N.onrender.com`
- **Password**: `workshop2025`
- **Live Site**: Auto-generated GitHub Pages URL
- **Quick Guide**: How to use Cline sidebar

## 🎯 Demo Scenarios

### 1. Legacy Modernization (15 minutes)
**Starting Point**: Old HTML page with inline styles and jQuery
**Goal**: Convert to modern React with Tailwind CSS
**Cline Prompt**: `"Convert this to modern React with Tailwind CSS"`

### 2. Feature Development (15 minutes)
**Starting Point**: Basic React app
**Goal**: Add professional contact form with validation
**Cline Prompt**: `"Add a contact form with validation and animations"`

### 3. Rapid Iteration (15 minutes)
**Starting Point**: React app with contact form
**Goals**: 
- Fix mobile responsiveness
- Add dark mode toggle
- Improve professional styling

## 🛠️ Container Management

### Build and Test Locally
```bash
# Build container
docker build -t workshop-demo -f docker/Dockerfile .

# Run locally
docker run -p 8080:8080 workshop-demo

# Access at http://localhost:8080
```

### Deploy to Render
```bash
# Set environment variables
export OPENAI_API_KEY="your-api-key"
export GITHUB_REPO_URL="your-repo-url"

# Deploy all containers
./scripts/deploy-containers.sh
```

### Reset for New Demo
```bash
# Reset any container to starter state
./scripts/reset.sh
```

## 📊 Success Metrics

### Technical Success
- [ ] All 5 containers start in <30 seconds
- [ ] Cline responds to prompts within 10 seconds
- [ ] Deploy pipeline works reliably (GitHub Pages updates)
- [ ] No container crashes during 1-hour workshop

### Demo Success
- [ ] "Wow" moments visible in audience reactions
- [ ] Students successfully complete self-guided exercises
- [ ] Live coding feels fluid and responsive
- [ ] Professional-quality output generated

## 🔧 Configuration

### Environment Variables
```bash
# Required for each container
OPENAI_API_KEY=sk-proj-...          # Separate key per container
WORKSHOP_ID=demo-1                  # Unique identifier
GITHUB_REPO_URL=https://...         # Repository for deployment
PORT=8080                           # Container port
```

### API Rate Limiting
Each container should have its own OpenAI API key to prevent rate limiting:
- Container 1: `OPENAI_API_KEY_1`
- Container 2: `OPENAI_API_KEY_2`
- Container 3: `OPENAI_API_KEY_3`
- Container 4: `OPENAI_API_KEY_4`
- Container 5: `OPENAI_API_KEY_5`

## 🔍 Monitoring

### Real-time Dashboard
```bash
./monitoring/monitor.sh
```

Shows:
- Container online/offline status
- GitHub Pages deployment status
- Response times
- Quick access URLs

### Health Checks
```bash
# Test all containers
./monitoring/monitor.sh --test

# Check specific container
curl -f https://vibe-demo-1.onrender.com/health
```

## 🎪 Workshop Day Checklist

### Pre-Workshop (15 minutes before)
- [ ] Run `./monitoring/monitor.sh --test`
- [ ] Verify all 5 containers are online
- [ ] Test Cline AI responses in each container
- [ ] Prepare backup screen sharing

### During Workshop
- [ ] Monitor container status
- [ ] Have reset scripts ready
- [ ] Backup containers standing by

### Post-Workshop
- [ ] Send students their container URLs (expire in 7 days)
- [ ] Collect feedback
- [ ] Archive demo recordings

## 🚧 Troubleshooting

### Container Won't Start
```bash
# Check logs
docker logs workshop-demo

# Rebuild with no cache
docker build --no-cache -t workshop-demo .
```

### Cline AI Not Responding
1. Check OpenAI API key in VS Code settings
2. Verify rate limits not exceeded
3. Restart VS Code server
4. Switch to backup container

### Deployment Failed
```bash
# Check git status
git status

# Force push to branch
git push origin HEAD:demo-1/main --force
```

## 📞 Support

**Workshop Day Emergency**: 
- Backup containers: `demo-6`, `demo-7`
- Screen share fallback ready
- Pre-recorded demo segments available

**Technical Issues**:
- Monitor: `./monitoring/monitor.sh`
- Reset: `./scripts/reset.sh`
- Deploy: `./scripts/deploy.sh`

---

**🎯 Goal**: Demonstrate that AI-assisted development isn't just faster—it's a fundamentally different way of thinking about software creation.

**✨ Success**: "I need this for my team. When can we start?"
