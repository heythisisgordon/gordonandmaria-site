#!/bin/bash

# VC-101 Workshop Demo Deployment Script
# This script handles deployment to GitHub Pages with branch isolation

set -e

# Configuration
CONTAINER_ID=${WORKSHOP_ID:-"demo-1"}
REPO_URL=${GITHUB_REPO_URL:-"https://github.com/humancenteredsystems/workshop-demo.git"}
BRANCH_NAME="${CONTAINER_ID}/main"
DEPLOY_DIR="dist"

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

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    log "Initializing git repository..."
    git init
    git config user.name "Workshop Demo"
    git config user.email "demo@workshop.dev"
fi

# Check if there are any changes to commit
if [ -n "$(git status --porcelain)" ]; then
    log "Staging changes for deployment..."
    git add .
    
    log "Committing changes..."
    git commit -m "Workshop update: $(date +'%Y-%m-%d %H:%M:%S')"
else
    warning "No changes detected. Deploying existing commit..."
fi

# Build project if build script exists
if [ -f "package.json" ] && command -v npm &> /dev/null; then
    if grep -q '"build"' package.json; then
        log "Building project..."
        if npm run build; then
            success "Build completed successfully"
        else
            error "Build failed"
            exit 1
        fi
    fi
fi

# Set up remote if it doesn't exist
if ! git remote get-url origin &> /dev/null; then
    log "Adding remote origin..."
    git remote add origin "$REPO_URL"
fi

# Deploy to branch
log "Deploying to branch: $BRANCH_NAME"

# Try to push to the branch
if git push origin HEAD:$BRANCH_NAME; then
    success "Deployment successful!"
    
    # Calculate GitHub Pages URL
    REPO_NAME=$(basename "$REPO_URL" .git)
    GITHUB_USERNAME=$(echo "$REPO_URL" | cut -d'/' -f4)
    PAGES_URL="https://${GITHUB_USERNAME}.github.io/${REPO_NAME}/${CONTAINER_ID}/"
    
    echo ""
    echo "🚀 Your site is deploying to:"
    echo "   $PAGES_URL"
    echo ""
    echo "📝 Note: GitHub Pages may take 1-2 minutes to update"
    echo ""
    
    # Save deployment info
    cat > .deploy-info << EOF
DEPLOYMENT_DATE=$(date +'%Y-%m-%d %H:%M:%S')
CONTAINER_ID=$CONTAINER_ID
BRANCH_NAME=$BRANCH_NAME
PAGES_URL=$PAGES_URL
COMMIT_HASH=$(git rev-parse HEAD)
EOF
    
else
    error "Deployment failed!"
    exit 1
fi
