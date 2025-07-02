#!/bin/bash

# VC-101 Workshop GitHub Repository Setup Script
# This script automates the GitHub repository creation and setup

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
REPO_NAME="workshop-demo"
REPO_DESCRIPTION="VC-101 Workshop Demo Infrastructure - AI-Powered Development Environment"
GITHUB_USERNAME="heythisisgordon"

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

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}  VC-101 Workshop GitHub Repository    ${NC}"
echo -e "${BLUE}========================================${NC}"
echo ""

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    error "GitHub CLI is not installed. Please install it first:"
    echo "  https://cli.github.com/"
    exit 1
fi

# Check if user is logged in to GitHub CLI
if ! gh auth status &> /dev/null; then
    warning "You need to login to GitHub CLI first"
    log "Running: gh auth login"
    gh auth login
fi

# Create the repository
log "Creating GitHub repository: $REPO_NAME"
if gh repo create "$REPO_NAME" --public --description "$REPO_DESCRIPTION"; then
    success "Repository created successfully"
else
    error "Failed to create repository"
    exit 1
fi

# Initialize local git repository
log "Initializing local git repository..."
git init
git add .
git commit -m "Initial commit: VC-101 Workshop Infrastructure"

# Add remote and push
log "Adding remote and pushing to GitHub..."
git branch -M main
git remote add origin "https://github.com/$GITHUB_USERNAME/$REPO_NAME.git"
git push -u origin main

success "Repository setup complete!"
echo ""
echo "🌐 Repository URL: https://github.com/$GITHUB_USERNAME/$REPO_NAME"
echo ""

# Enable GitHub Pages
log "Enabling GitHub Pages..."
if gh api repos/$GITHUB_USERNAME/$REPO_NAME/pages -X POST -F source.branch=main -F source.path=/; then
    success "GitHub Pages enabled"
    echo "📄 GitHub Pages URL: https://$GITHUB_USERNAME.github.io/$REPO_NAME"
else
    warning "GitHub Pages setup may require manual configuration"
    echo "   Go to: https://github.com/$GITHUB_USERNAME/$REPO_NAME/settings/pages"
fi

echo ""
success "GitHub repository setup complete!"
echo ""
echo "Next steps:"
echo "1. Configure GitHub Pages (if not automatic)"
echo "2. Deploy containers to Render"
echo "3. Run validation tests"
