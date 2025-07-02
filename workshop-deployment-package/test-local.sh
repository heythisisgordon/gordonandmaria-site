#!/bin/bash

# VC-101 Workshop Local Testing Script
# Test Docker build and health endpoints locally before deploying

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Configuration
CONTAINER_NAME="workshop-test"
IMAGE_NAME="workshop-local"
HEALTH_PORT=10000
VSCODE_PORT=8080

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

# Cleanup function
cleanup() {
    log "Cleaning up..."
    docker stop $CONTAINER_NAME 2>/dev/null || true
    docker rm $CONTAINER_NAME 2>/dev/null || true
}

# Set up cleanup on script exit
trap cleanup EXIT

# Main testing function
main() {
    log "Starting VC-101 Workshop Local Testing"
    
    # Check if Docker is running
    if ! docker info >/dev/null 2>&1; then
        error "Docker is not running. Please start Docker and try again."
        exit 1
    fi
    
    # Clean up any existing containers
    cleanup
    
    # Build the Docker image
    log "Building Docker image..."
    if docker build -t $IMAGE_NAME -f docker/Dockerfile .; then
        success "Docker build completed successfully"
    else
        error "Docker build failed"
        exit 1
    fi
    
    # Start the container
    log "Starting container..."
    if docker run -d -p $HEALTH_PORT:$HEALTH_PORT -p $VSCODE_PORT:$VSCODE_PORT \
        --name $CONTAINER_NAME \
        -e OPENROUTER_API_KEY=test-key \
        -e PASSWORD=workshop2025 \
        $IMAGE_NAME; then
        success "Container started successfully"
    else
        error "Failed to start container"
        exit 1
    fi
    
    # Wait for services to start
    log "Waiting for services to start..."
    sleep 15
    
    # Test health endpoint
    log "Testing health endpoint..."
    if curl -f -s http://localhost:$HEALTH_PORT/api/health > /dev/null; then
        success "Health endpoint is responding"
        
        # Show health response
        log "Health endpoint response:"
        curl -s http://localhost:$HEALTH_PORT/api/health | jq . || curl -s http://localhost:$HEALTH_PORT/api/health
    else
        error "Health endpoint is not responding"
        
        # Show container logs for debugging
        log "Container logs:"
        docker logs $CONTAINER_NAME
        exit 1
    fi
    
    # Test VS Code accessibility
    log "Testing VS Code endpoint..."
    if curl -f -s -o /dev/null http://localhost:$VSCODE_PORT/; then
        success "VS Code endpoint is responding"
    else
        warning "VS Code endpoint may not be ready yet (this is sometimes normal)"
    fi
    
    # Show container status
    log "Container status:"
    docker ps | grep $CONTAINER_NAME
    
    # Show service URLs
    success "Local testing completed successfully!"
    echo ""
    echo "🌐 Service URLs:"
    echo "   Health Check: http://localhost:$HEALTH_PORT/api/health"
    echo "   VS Code:      http://localhost:$VSCODE_PORT/"
    echo ""
    echo "📊 Container logs (last 20 lines):"
    docker logs --tail 20 $CONTAINER_NAME
    echo ""
    
    # Ask if user wants to keep container running
    read -p "Keep container running for manual testing? (y/n): " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "Container is running. Use the following commands:"
        echo "  Stop:   docker stop $CONTAINER_NAME"
        echo "  Remove: docker rm $CONTAINER_NAME"
        echo "  Logs:   docker logs -f $CONTAINER_NAME"
        
        # Don't cleanup on exit if keeping container
        trap - EXIT
    else
        cleanup
        success "Testing completed and cleaned up"
    fi
}

# Run main function
main "$@"
