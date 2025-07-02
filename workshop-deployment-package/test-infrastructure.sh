#!/bin/bash

# VC-101 Workshop Infrastructure Unit Tests
# Validates all components are properly configured before deployment

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Test counters
TESTS_RUN=0
TESTS_PASSED=0
TESTS_FAILED=0

# Test result tracking
FAILED_TESTS=()

# Logging functions
log() {
    echo -e "${BLUE}[TEST]${NC} $1"
}

success() {
    echo -e "${GREEN}✅ PASS${NC} $1"
    ((TESTS_PASSED++))
}

fail() {
    echo -e "${RED}❌ FAIL${NC} $1"
    ((TESTS_FAILED++))
    FAILED_TESTS+=("$1")
}

warning() {
    echo -e "${YELLOW}⚠️  WARN${NC} $1"
}

info() {
    echo -e "${CYAN}ℹ️  INFO${NC} $1"
}

# Test function wrapper
run_test() {
    local test_name="$1"
    local test_function="$2"
    
    ((TESTS_RUN++))
    log "Running: $test_name"
    
    if $test_function; then
        success "$test_name"
    else
        fail "$test_name"
    fi
    echo ""
}

# Test 1: Docker Configuration
test_docker_config() {
    local dockerfile="docker/Dockerfile"
    
    if [ ! -f "$dockerfile" ]; then
        return 1
    fi
    
    # Check for required components
    if ! grep -q "code-server" "$dockerfile"; then
        return 1
    fi
    
    if ! grep -q "claude-dev" "$dockerfile"; then
        return 1
    fi
    
    if ! grep -q "WORKDIR" "$dockerfile"; then
        return 1
    fi
    
    return 0
}

# Test 2: VS Code Configuration
test_vscode_config() {
    local settings_file="vscode-config/settings.json"
    local tasks_file="vscode-config/tasks.json"
    
    if [ ! -f "$settings_file" ] || [ ! -f "$tasks_file" ]; then
        return 1
    fi
    
    # Check settings.json contains Cline configuration
    if ! grep -q "claude-dev" "$settings_file"; then
        return 1
    fi
    
    # Check tasks.json contains deployment task
    if ! grep -q "Deploy" "$tasks_file"; then
        return 1
    fi
    
    return 0
}

# Test 3: Starter Projects
test_starter_projects() {
    local required_projects=(
        "starter-projects/demo-1-legacy/index.html"
        "starter-projects/demo-2-react/package.json"
        "starter-projects/demo-3-api/server.js"
        "starter-projects/demo-4-static/index.html"
        "starter-projects/demo-5-components/package.json"
    )
    
    for project in "${required_projects[@]}"; do
        if [ ! -f "$project" ]; then
            return 1
        fi
    done
    
    # Check demo-1 contains legacy HTML
    if ! grep -q "jQuery" "starter-projects/demo-1-legacy/index.html"; then
        return 1
    fi
    
    # Check demo-2 contains React
    if ! grep -q "react" "starter-projects/demo-2-react/package.json"; then
        return 1
    fi
    
    return 0
}

# Test 4: Deployment Scripts
test_deployment_scripts() {
    local required_scripts=(
        "scripts/deploy.sh"
        "scripts/reset.sh"
    )
    
    for script in "${required_scripts[@]}"; do
        if [ ! -f "$script" ]; then
            return 1
        fi
        
        # Check script contains proper shebang
        if ! head -n 1 "$script" | grep -q "#!/bin/bash"; then
            return 1
        fi
    done
    
    # Check deploy.sh contains git commands
    if ! grep -q "git push" "scripts/deploy.sh"; then
        return 1
    fi
    
    # Check reset.sh contains reset logic
    if ! grep -q "git reset" "scripts/reset.sh"; then
        return 1
    fi
    
    return 0
}

# Test 5: Monitoring Tools
test_monitoring_tools() {
    local monitor_script="monitoring/monitor.sh"
    
    if [ ! -f "$monitor_script" ]; then
        return 1
    fi
    
    # Check script contains health check logic
    if ! grep -q "curl" "$monitor_script"; then
        return 1
    fi
    
    # Check script contains container URLs
    if ! grep -q "demo-1" "$monitor_script"; then
        return 1
    fi
    
    return 0
}

# Test 6: Render Configuration
test_render_config() {
    local config_file="render-deploy-config.json"
    
    if [ ! -f "$config_file" ]; then
        return 1
    fi
    
    # Check JSON is valid
    if ! python -m json.tool "$config_file" > /dev/null 2>&1; then
        if ! node -e "JSON.parse(require('fs').readFileSync('$config_file', 'utf8'))" > /dev/null 2>&1; then
            return 1
        fi
    fi
    
    # Check contains required configuration
    if ! grep -q "vibe-demo-1" "$config_file"; then
        return 1
    fi
    
    if ! grep -q "WORKSHOP_ID" "$config_file"; then
        return 1
    fi
    
    if ! grep -q "OPENAI_API_KEY" "$config_file"; then
        return 1
    fi
    
    return 0
}

# Test 7: Documentation
test_documentation() {
    local required_docs=(
        "README.md"
        "DEPLOYMENT_README.md"
        "docs/presenter-guide.md"
        "FINAL_DEPLOYMENT_STEPS.md"
    )
    
    for doc in "${required_docs[@]}"; do
        if [ ! -f "$doc" ]; then
            return 1
        fi
        
        # Check file is not empty
        if [ ! -s "$doc" ]; then
            return 1
        fi
    done
    
    # Check presenter guide contains demo scenarios
    if ! grep -q "Demo 1" "docs/presenter-guide.md"; then
        return 1
    fi
    
    return 0
}

# Test 8: File Permissions and Structure
test_file_structure() {
    local required_dirs=(
        "docker"
        "vscode-config"
        "starter-projects"
        "scripts"
        "monitoring"
        "docs"
    )
    
    for dir in "${required_dirs[@]}"; do
        if [ ! -d "$dir" ]; then
            return 1
        fi
    done
    
    return 0
}

# Header
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}    VC-101 Workshop Infrastructure Tests       ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

# Run all tests
run_test "Docker Configuration" test_docker_config
run_test "VS Code Configuration" test_vscode_config
run_test "Starter Projects" test_starter_projects
run_test "Deployment Scripts" test_deployment_scripts
run_test "Monitoring Tools" test_monitoring_tools
run_test "Render Configuration" test_render_config
run_test "Documentation" test_documentation
run_test "File Structure" test_file_structure

# Summary
echo -e "${BLUE}================================================${NC}"
echo -e "${BLUE}                  TEST SUMMARY                  ${NC}"
echo -e "${BLUE}================================================${NC}"
echo ""

if [ $TESTS_FAILED -eq 0 ]; then
    success "All tests passed! ($TESTS_PASSED/$TESTS_RUN)"
    echo ""
    info "Infrastructure is ready for deployment!"
    echo ""
    echo -e "${CYAN}Next Steps:${NC}"
    echo "1. Create GitHub repository: workshop-demo"
    echo "2. Upload this package to the repository"
    echo "3. Deploy 5 containers to Render"
    echo "4. Run validation tests"
    echo ""
    exit 0
else
    echo -e "${RED}Tests failed: $TESTS_FAILED/$TESTS_RUN${NC}"
    echo -e "${GREEN}Tests passed: $TESTS_PASSED/$TESTS_RUN${NC}"
    echo ""
    echo -e "${RED}Failed tests:${NC}"
    for failed_test in "${FAILED_TESTS[@]}"; do
        echo "  - $failed_test"
    done
    echo ""
    exit 1
fi
