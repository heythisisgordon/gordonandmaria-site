# VC-101 Workshop Repository Cleanup Plan

## Context & Objective

The `humancenteredsystems/VC-101-workshop` repository was created by copying the entire `workshop-demo` branch from the main site repository. It currently contains unnecessary files from the original website project. The goal is to transform this into a clean, focused module that provides browser-based VS Code environments with Cline AI for workshop participants.

## Current State Analysis

**Repository contains:**
- ✅ Workshop infrastructure (needed)
- ❌ Website source code (`src/`, React components, etc.)
- ❌ Website deployment files (Vite config, etc.)
- ❌ Website documentation (README.md for site)
- ❌ Duplicate/conflicting folder structures

**Target State:**
- Clean workshop module focused solely on container deployment
- Proper documentation for workshop setup
- Integration points for the main humancenteredsystems.io site

## Phase 1: File Structure Cleanup

### 1.1 Delete Unnecessary Website Files

Remove these files/folders that belong to the main website:
```
DELETE:
├── src/                           # React website source
├── public/                        # Website public assets  
├── index.html                     # Website entry point
├── package.json                   # Website dependencies
├── package-lock.json              # Website lock file
├── vite.config.js                 # Website build config
├── tailwind.config.js             # Website styling config
├── eslint.config.js               # Website linting
├── vitest.config.js               # Website testing
├── server/                        # Website backend
├── DEPLOYMENT.md                  # Website deployment docs
├── TESTING_SUMMARY.md             # Website testing docs
├── VETERAN_ENHANCEMENTS.md        # Website feature docs
├── LICENSE                        # Duplicate license
├── .env.example                   # Website environment
├── .gitignore                     # Will replace with workshop-specific
└── workflows/                     # Website-specific workflows
```

### 1.2 Consolidate Workshop Files

The repository currently has duplicate workshop structures. Consolidate into single clean structure:

**Current problematic structure:**
```
├── workshop-demo/                 # Duplicate structure
├── workshop-deployment-package/   # Another duplicate structure  
├── site-workshop-demo/           # Yet another structure
└── plans/                        # Contains VC-101.md
```

**Target clean structure:**
```
VC-101-workshop/
├── docker/
│   └── Dockerfile
├── vscode-config/
│   ├── settings.json
│   └── tasks.json
├── starter-projects/
│   ├── demo-1-legacy/
│   ├── demo-2-react/
│   ├── demo-3-api/
│   ├── demo-4-static/
│   └── demo-5-components/
├── scripts/
│   ├── deploy.sh
│   ├── reset.sh
│   └── monitor.sh
├── monitoring/
│   └── monitor.sh
├── docs/
│   └── presenter-guide.md
├── config/
│   └── render-deploy-config.json
├── health-proxy.js
├── start-services.sh
├── README.md                      # Workshop-specific README
├── DEPLOYMENT.md                  # Workshop deployment guide
├── .gitignore                     # Workshop-specific gitignore
└── VC-101-PLAN.md                # Copy of plans/VC-101.md
```

### 1.3 Specific Consolidation Actions

1. **Choose the best files from each duplicate folder:**
   - Use `workshop-deployment-package/docker/Dockerfile` (most recent)
   - Use `workshop-deployment-package/vscode-config/` 
   - Use `workshop-deployment-package/starter-projects/`
   - Use `workshop-deployment-package/scripts/`

2. **Move files to root level:**
   ```bash
   # Move workshop-deployment-package contents to root
   mv workshop-deployment-package/* ./
   
   # Delete duplicate folders
   rm -rf workshop-demo/
   rm -rf workshop-deployment-package/
   rm -rf site-workshop-demo/
   ```

## Phase 2: Create Workshop-Specific Documentation

### 2.1 Create New README.md

Replace the current README with workshop-focused content:

```markdown
# VC-101 Workshop: Browser-Based VS Code with Cline AI

Containers and infrastructure to provide workshop participants with fully-featured, in-browser Visual Studio Code environments pre-configured with Cline AI extension.

## Quick Start

1. Deploy containers to Render using `config/render-deploy-config.json`
2. Each student gets: `https://vibe-demo-N.onrender.com` (password: `workshop2025`)
3. Students follow exercises in `VC-101-PLAN.md`

## Architecture

- 5 pre-configured code-server containers
- Each container: VS Code Web + Cline AI + starter projects
- Instant deployment pipeline to GitHub Pages
- Real-time monitoring and reset capabilities

## Deployment

See `DEPLOYMENT.md` for complete setup instructions.

## Integration with humancenteredsystems.io

This module integrates with the main site via:
- Workshop registration page: `/vibe-coding-101`
- Student showcase pages: `/student-showcase/:id`
- Workshop status API endpoints

## Workshop Flow

1. **Legacy Modernization** (15 min) - Convert old HTML to modern React
2. **Feature Development** (15 min) - Add forms with validation
3. **Rapid Iteration** (15 min) - Multiple quick improvements

Each phase demonstrates AI-assisted development loops.
```

### 2.2 Create Workshop-Specific .gitignore

```gitignore
# Workshop-specific ignores
node_modules/
*.log
.env
.env.local
.DS_Store
Thumbs.db

# Container build artifacts
.docker/
*.tar

# VS Code workspace files
.vscode/settings.json
.vscode/launch.json

# Temporary files
tmp/
temp/
*.tmp

# API keys and secrets
config/api-keys.json
*.key
*.pem
```

### 2.3 Move VC-101.md to Root

```bash
mv plans/VC-101.md ./VC-101-PLAN.md
rm -rf plans/
```

## Phase 3: Integration Points with Main Site

### 3.1 Create Integration Documentation

Create `INTEGRATION.md`:

```markdown
# Integration with humancenteredsystems.io

## Workshop Registration Flow

1. User visits `/vibe-coding-101` on main site
2. Registration form captures: name, email, experience level
3. User receives container URL and password
4. Workshop completion tracked via API

## API Endpoints

The main site should implement these endpoints:

- `POST /api/workshop/register` - Register for workshop
- `GET /api/workshop/status/:id` - Check container status  
- `POST /api/workshop/complete/:id` - Mark workshop complete

## Student Showcase Integration

- Workshop submissions create entries in main site database
- Student showcase pages: `/student-showcase/:studentId`
- Password-protected access to submitted code

## Container URLs

Production containers:
- `https://vibe-demo-1.onrender.com` through `https://vibe-demo-5.onrender.com`
- Password: `workshop2025` (configurable via environment)
```

### 3.2 Create API Schema

Create `api-schema.json`:

```json
{
  "workshop_registration": {
    "endpoint": "/api/workshop/register",
    "method": "POST",
    "body": {
      "name": "string",
      "email": "string", 
      "experience_level": "beginner|intermediate|advanced",
      "preferred_time": "string"
    },
    "response": {
      "container_url": "string",
      "password": "string",
      "workshop_id": "string"
    }
  },
  "workshop_status": {
    "endpoint": "/api/workshop/status/:id",
    "method": "GET",
    "response": {
      "status": "pending|active|completed",
      "container_health": "online|offline",
      "progress": "number"
    }
  }
}
```

## Phase 4: Environment Configuration

### 4.1 Create Environment Template

Create `.env.example`:

```bash
# Workshop Configuration
WORKSHOP_PASSWORD=workshop2025
OPENAI_API_KEY=sk-proj-your-key-here
GITHUB_REPO_URL=https://github.com/humancenteredsystems/VC-101-workshop.git

# Container Configuration  
CONTAINER_COUNT=5
PORT=8080
HEALTH_PORT=10000

# Integration with Main Site
MAIN_SITE_URL=https://humancenteredsystems.io
API_WEBHOOK_URL=https://humancenteredsystems.io/api/workshop/webhook
```

### 4.2 Update Dockerfile Paths

Ensure Dockerfile references are correct after consolidation:

```dockerfile
# Update any COPY commands to use new paths
COPY vscode-config/ /home/coder/.config/
COPY starter-projects/ /home/coder/project/
COPY scripts/ /home/coder/scripts/
```

## Phase 5: Deployment Configuration

### 5.1 Update Render Configuration

Update `config/render-deploy-config.json` to reflect new structure:

```json
{
  "services": [
    {
      "name": "vibe-demo-1",
      "type": "web",
      "repo": "https://github.com/humancenteredsystems/VC-101-workshop",
      "branch": "main",
      "dockerfile_path": "docker/Dockerfile",
      "env_vars": {
        "WORKSHOP_ID": "demo-1",
        "PASSWORD": "workshop2025"
      }
    }
  ]
}
```

## Phase 6: Testing & Validation

### 6.1 Create Test Script

Create `test-setup.sh`:

```bash
#!/bin/bash
echo "🧪 Testing VC-101 Workshop Setup"

# Test Docker build
echo "Testing Docker build..."
docker build -t vc-101-test -f docker/Dockerfile .

# Test file structure
echo "Validating file structure..."
required_files=(
  "docker/Dockerfile"
  "vscode-config/settings.json"
  "starter-projects/demo-1-legacy/index.html"
  "scripts/deploy.sh"
  "VC-101-PLAN.md"
)

for file in "${required_files[@]}"; do
  if [ -f "$file" ]; then
    echo "✅ $file exists"
  else
    echo "❌ $file missing"
    exit 1
  fi
done

echo "✅ All tests passed!"
```

## Execution Checklist

Execute these steps in order:

- [ ] **Phase 1.1**: Delete unnecessary website files
- [ ] **Phase 1.2**: Consolidate workshop files into clean structure  
- [ ] **Phase 1.3**: Move best files to root, remove duplicates
- [ ] **Phase 2.1**: Create workshop-specific README.md
- [ ] **Phase 2.2**: Create workshop-specific .gitignore
- [ ] **Phase 2.3**: Move VC-101.md to root as VC-101-PLAN.md
- [ ] **Phase 3.1**: Create INTEGRATION.md documentation
- [ ] **Phase 3.2**: Create api-schema.json
- [ ] **Phase 4.1**: Create .env.example template
- [ ] **Phase 4.2**: Update Dockerfile paths if needed
- [ ] **Phase 5.1**: Update render configuration
- [ ] **Phase 6.1**: Create and run test script
- [ ] **Final**: Commit all changes with message "Clean up: Transform to focused VC-101 workshop module"

## Success Criteria

After cleanup, the repository should:
- ✅ Contain only workshop-related files
- ✅ Have clear, single-purpose file structure
- ✅ Include integration documentation for main site
- ✅ Be ready for immediate Render deployment
- ✅ Pass all validation tests

This transformation will create a clean, professional workshop module that can be easily maintained and integrated with the main humancenteredsystems.io site.
