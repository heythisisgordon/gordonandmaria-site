#!/bin/bash

# VC-101 Workshop Complete Deployment Script
# This script orchestrates the entire workshop deployment process

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LOG_FILE="$SCRIPT_DIR/deployment.log"

# Logging functions
log() {
    echo -e "${BLUE}[$(date +'%Y-%m-%d %H:%M:%S')]${NC} $1" | tee -a "$LOG_FILE"
}

success() {
    echo -e "${GREEN}✅ $1${NC}" | tee -a "$LOG_FILE"
}

warning() {
    echo -e "${YELLOW}⚠️  $1${NC}" | tee -a "$LOG_FILE"
}

error() {
    echo -e "${RED}❌ $1${NC}" | tee -a "$LOG_FILE"
}

info() {
    echo -e "${CYAN}ℹ️  $1${NC}" | tee -a "$LOG_FILE"
}

# Header
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}    VC-101 Workshop Deployment Orchestrator     ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Check prerequisites
check_prerequisites() {
    log "Checking prerequisites..."
    
    local missing_tools=()
    
    if ! command -v git &> /dev/null; then
        missing_tools+=("git")
    fi
    
    if ! command -v gh &> /dev/null; then
        missing_tools+=("GitHub CLI (gh)")
    fi
    
    if ! command -v curl &> /dev/null; then
        missing_tools+=("curl")
    fi
    
    if [ ${#missing_tools[@]} -ne 0 ]; then
        error "Missing required tools:"
        for tool in "${missing_tools[@]}"; do
            echo "  - $tool"
        done
        echo ""
        echo "Please install the missing tools and run this script again."
        exit 1
    fi
    
    success "All prerequisites satisfied"
}

# Phase 1: GitHub Repository Setup
deploy_github_repo() {
    log "Phase 1: Setting up GitHub repository..."
    
    if [ -f "$SCRIPT_DIR/deploy-github-repo.sh" ]; then
        chmod +x "$SCRIPT_DIR/deploy-github-repo.sh"
        cd "$SCRIPT_DIR"
        
        if ./deploy-github-repo.sh; then
            success "GitHub repository setup completed"
            return 0
        else
            error "GitHub repository setup failed"
            return 1
        fi
    else
        error "GitHub deployment script not found"
        return 1
    fi
}

# Phase 2: Render Configuration
setup_render_config() {
    log "Phase 2: Preparing Render deployment configuration..."
    
    if [ -f "$SCRIPT_DIR/render-deploy-config.json" ]; then
        success "Render configuration ready"
        
        echo ""
        info "Render Deployment Instructions:"
        echo "1. Go to https://render.com/dashboard"
        echo "2. For each container configuration in render-deploy-config.json:"
        echo "   - Click 'New' → 'Web Service'"
        echo "   - Connect GitHub repository: heythisisgordon/workshop-demo"
        echo "   - Use the settings from the JSON file"
        echo "3. Deploy all 5 containers with unique environment variables"
        echo ""
        
        return 0
    else
        error "Render configuration file not found"
        return 1
    fi
}

# Phase 3: Validation
run_validation() {
    log "Phase 3: Running validation tests..."
    
    if [ -f "$SCRIPT_DIR/monitoring/monitor.sh" ]; then
        chmod +x "$SCRIPT_DIR/monitoring/monitor.sh"
        
        success "Monitoring script ready"
        info "Run './monitoring/monitor.sh --test' to validate container health"
        return 0
    else
        warning "Monitoring script not found - manual validation required"
        return 1
    fi
}

# Main deployment flow
main() {
    log "Starting VC-101 Workshop deployment..."
    echo "" | tee -a "$LOG_FILE"
    
    # Check prerequisites
    if ! check_prerequisites; then
        exit 1
    fi
    
    echo "" | tee -a "$LOG_FILE"
    
    # Phase 1: GitHub
    if ! deploy_github_repo; then
        error "Deployment failed at Phase 1 (GitHub setup)"
        exit 1
    fi
    
    echo "" | tee -a "$LOG_FILE"
    
    # Phase 2: Render
    if ! setup_render_config; then
        error "Deployment failed at Phase 2 (Render config)"
        exit 1
    fi
    
    echo "" | tee -a "$LOG_FILE"
    
    # Phase 3: Validation
    run_validation
    
    echo "" | tee -a "$LOG_FILE"
    
    # Summary
    success "Deployment orchestration completed!"
    echo ""
    echo -e "${CYAN}📋 Next Steps:${NC}"
    echo "1. Deploy containers to Render using the provided configuration"
    echo "2. Wait for all containers to build (~15 minutes each)"
    echo "3. Run validation: ./monitoring/monitor.sh --test"
    echo "4. Test workshop scenarios"
    echo ""
    echo -e "${CYAN}📊 Expected Results:${NC}"
    echo "• 5 containers: https://vibe-demo-[1-5].onrender.com"
    echo "• GitHub Pages: https://heythisisgordon.github.io/workshop-demo/"
    echo "• Password: workshop2025"
    echo ""
    echo -e "${CYAN}💰 Cost: $35/month (5 × $7 Starter instances)${NC}"
    echo ""
    success "Ready for workshop execution!"
}

# Run main function
main "$@"
