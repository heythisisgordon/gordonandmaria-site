#!/bin/bash

# VC-101 Workshop Deployment Validation Script
# Tests all components of the deployed workshop infrastructure

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
GITHUB_USERNAME="heythisisgordon"
REPO_NAME="workshop-demo"
EXPECTED_CONTAINERS=("vibe-demo-1" "vibe-demo-2" "vibe-demo-3" "vibe-demo-4" "vibe-demo-5")

# Logging functions
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

info() {
    echo -e "${CYAN}ℹ️  $1${NC}"
}

# Header
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}    VC-101 Workshop Deployment Validator       ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Test 1: GitHub Repository
test_github_repo() {
    log "Testing GitHub repository..."
    
    local repo_url="https://github.com/$GITHUB_USERNAME/$REPO_NAME"
    
    if curl -s --head "$repo_url" | head -n 1 | grep -q "200 OK"; then
        success "GitHub repository accessible: $repo_url"
        return 0
    else
        error "GitHub repository not accessible: $repo_url"
        return 1
    fi
}

# Test 2: GitHub Pages
test_github_pages() {
    log "Testing GitHub Pages..."
    
    local pages_url="https://$GITHUB_USERNAME.github.io/$REPO_NAME"
    
    if curl -s --head "$pages_url" | head -n 1 | grep -q "200 OK"; then
        success "GitHub Pages accessible: $pages_url"
        return 0
    else
        warning "GitHub Pages not yet accessible (may take a few minutes): $pages_url"
        return 1
    fi
}

# Test 3: Render Containers
test_render_containers() {
    log "Testing Render containers..."
    
    local online_count=0
    local total_containers=${#EXPECTED_CONTAINERS[@]}
    
    for container in "${EXPECTED_CONTAINERS[@]}"; do
        local url="https://${container}.onrender.com"
        
        if curl -s --max-time 10 --head "$url" | head -n 1 | grep -q "200 OK"; then
            success "Container online: $url"
            ((online_count++))
        else
            warning "Container offline or not deployed: $url"
        fi
    done
    
    if [ $online_count -eq $total_containers ]; then
        success "All $total_containers containers are online"
        return 0
    elif [ $online_count -gt 0 ]; then
        warning "$online_count/$total_containers containers online"
        return 1
    else
        error "No containers are online"
        return 1
    fi
}

# Test 4: Local Files
test_local_files() {
    log "Testing local deployment files..."
    
    local required_files=(
        "docker/Dockerfile"
        "vscode-config/settings.json"
        "vscode-config/tasks.json"
        "scripts/deploy.sh"
        "scripts/reset.sh"
        "monitoring/monitor.sh"
        "starter-projects/demo-1-legacy/index.html"
        "starter-projects/demo-2-react/package.json"
    )
    
    local missing_files=()
    
    for file in "${required_files[@]}"; do
        if [ -f "$file" ]; then
            success "File exists: $file"
        else
            error "File missing: $file"
            missing_files+=("$file")
        fi
    done
    
    if [ ${#missing_files[@]} -eq 0 ]; then
        success "All required files present"
        return 0
    else
        error "${#missing_files[@]} files missing"
        return 1
    fi
}

# Test 5: Docker Configuration
test_docker_config() {
    log "Testing Docker configuration..."
    
    if [ -f "docker/Dockerfile" ]; then
        if grep -q "code-server" "docker/Dockerfile" && grep -q "claude-dev" "docker/Dockerfile"; then
            success "Dockerfile contains required components"
            return 0
        else
            error "Dockerfile missing required components"
            return 1
        fi
    else
        error "Dockerfile not found"
        return 1
    fi
}

# Test 6: Environment Configuration
test_environment_config() {
    log "Testing environment configuration..."
    
    if [ -f "render-deploy-config.json" ]; then
        if grep -q "WORKSHOP_ID" "render-deploy-config.json" && grep -q "OPENAI_API_KEY" "render-deploy-config.json"; then
            success "Environment configuration valid"
            return 0
        else
            error "Environment configuration incomplete"
            return 1
        fi
    else
        error "Environment configuration file not found"
        return 1
    fi
}

# Main validation function
main() {
    log "Starting VC-101 Workshop deployment validation..."
    echo ""
    
    local tests_passed=0
    local total_tests=6
    
    # Run all tests
    if test_local_files; then ((tests_passed++)); fi
    echo ""
    
    if test_docker_config; then ((tests_passed++)); fi
    echo ""
    
    if test_environment_config; then ((tests_passed++)); fi
    echo ""
    
    if test_github_repo; then ((tests_passed++)); fi
    echo ""
    
    if test_github_pages; then ((tests_passed++)); fi
    echo ""
    
    if test_render_containers; then ((tests_passed++)); fi
    echo ""
    
    # Summary
    echo -e "${BLUE}================================================${NC}"
    echo -e "${BLUE}                VALIDATION SUMMARY             ${NC}"
    echo -e "${BLUE}================================================${NC}"
    echo ""
    
    if [ $tests_passed -eq $total_tests ]; then
        success "All tests passed! ($tests_passed/$total_tests)"
        echo ""
        info "Workshop is ready for demonstration!"
        echo ""
        echo -e "${CYAN}🌐 Workshop URLs:${NC}"
        for container in "${EXPECTED_CONTAINERS[@]}"; do
            echo "   https://${container}.onrender.com (password: workshop2025)"
        done
        echo ""
        echo -e "${CYAN}📄 GitHub Pages: https://$GITHUB_USERNAME.github.io/$REPO_NAME${NC}"
        echo ""
        return 0
    else
        warning "Partial validation: $tests_passed/$total_tests tests passed"
        echo ""
        info "Some components may still be deploying or require manual setup"
        echo ""
        return 1
    fi
}

# Run validation
main "$@"
