#!/bin/bash

# VC-101 Workshop Demo Reset Script
# This script resets the project to its starter state for fresh demos

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Logging function
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ $1${NC}"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

error() {
    echo -e "${RED}❌ $1${NC}"
}

# Confirmation prompt
echo -e "${YELLOW}🔄 This will reset your project to the starter state.${NC}"
echo -e "${YELLOW}   All current changes will be lost!${NC}"
echo ""
read -p "Are you sure you want to continue? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Reset cancelled."
    exit 0
fi

log "Starting project reset..."

# Stop any running development servers
if command -v pkill &> /dev/null; then
    log "Stopping development servers..."
    pkill -f "npm run dev" || true
    pkill -f "node server" || true
    pkill -f "vite" || true
fi

# Clean build artifacts
log "Cleaning build artifacts..."
rm -rf dist/ build/ .next/ node_modules/.cache/ || true

# Reset git to initial state if starter commit exists
if git rev-parse --verify starter-commit-hash 2>/dev/null; then
    log "Resetting to starter commit..."
    git reset --hard starter-commit-hash
    git clean -fd
    success "Git reset completed"
else
    warning "No starter commit found, skipping git reset"
fi

# Clean temporary files
log "Cleaning temporary files..."
rm -rf tmp/ .cache/ *.log || true
rm -f .deploy-info || true

# Clean VS Code workspace
log "Cleaning VS Code workspace..."
rm -rf .vscode/.history/ || true

# Reinstall dependencies if package.json exists
if [ -f "package.json" ] && command -v npm &> /dev/null; then
    log "Reinstalling dependencies..."
    rm -rf node_modules/ package-lock.json || true
    if npm install; then
        success "Dependencies reinstalled"
    else
        warning "Failed to reinstall dependencies"
    fi
fi

# Reset environment variables to defaults
log "Resetting environment configuration..."
cat > .env << EOF
# Workshop Demo Environment
WORKSHOP_ID=demo-1
NODE_ENV=development
PORT=3000
EOF

echo ""
success "Project reset completed successfully!"
echo ""
echo "🚀 Your project is now ready for a fresh demo."
echo "   Use 'npm run dev' or 'npm start' to begin."
echo ""

# Show current project status
if [ -f "package.json" ]; then
    echo "📦 Project: $(jq -r '.name // "Unknown"' package.json 2>/dev/null || echo "Unknown")"
fi

if [ -f "index.html" ]; then
    echo "🌐 Static site ready"
fi

if command -v git &> /dev/null && [ -d ".git" ]; then
    echo "📝 Git status: $(git status --porcelain | wc -l) uncommitted changes"
fi

echo ""
