#!/bin/bash

# VC-101 Workshop Demo Container Health Monitor
# Real-time monitoring dashboard for all workshop containers

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Configuration
CONTAINERS=("demo-1" "demo-2" "demo-3" "demo-4" "demo-5")
BASE_URL="https://vibe"
GITHUB_PAGES_BASE="https://humancenteredsystems.github.io/workshop-demo"
CHECK_INTERVAL=5

# Function to check container health
check_container() {
    local container_id=$1
    local url="${BASE_URL}-${container_id}.onrender.com"
    local pages_url="${GITHUB_PAGES_BASE}/${container_id}/"
    
    # Check container status
    if curl -s --max-time 10 "$url" > /dev/null 2>&1; then
        container_status="${GREEN}✅ Online${NC}"
    else
        container_status="${RED}❌ Offline${NC}"
    fi
    
    # Check GitHub Pages
    if curl -s --max-time 10 "$pages_url" > /dev/null 2>&1; then
        pages_status="${GREEN}✅ Live${NC}"
    else
        pages_status="${YELLOW}⏳ Pending${NC}"
    fi
    
    printf "%-8s | %-20s | %-20s | %-50s | %-50s\n" \
        "$container_id" \
        "$container_status" \
        "$pages_status" \
        "$url" \
        "$pages_url"
}

# Function to get system stats
get_system_stats() {
    local timestamp=$(date '+%Y-%m-%d %H:%M:%S')
    local uptime=$(uptime | awk '{print $3,$4}' | sed 's/,//')
    
    echo -e "${CYAN}🖥️  System Status - $timestamp${NC}"
    echo -e "${CYAN}⏱️  Uptime: $uptime${NC}"
    echo ""
}

# Main monitoring loop
monitor_containers() {
    while true; do
        clear
        
        # Header
        echo -e "${BLUE}========================================${NC}"
        echo -e "${BLUE}     VC-101 Workshop Monitor v1.0     ${NC}"
        echo -e "${BLUE}========================================${NC}"
        echo ""
        
        get_system_stats
        
        # Table header
        echo -e "${CYAN}Container Status Dashboard${NC}"
        echo "------------------------------------------------------------------------"
        printf "%-8s | %-20s | %-20s | %-50s | %-50s\n" \
            "ID" "Container" "GitHub Pages" "Container URL" "Live Site URL"
        echo "------------------------------------------------------------------------"
        
        # Check each container
        for container in "${CONTAINERS[@]}"; do
            check_container "$container"
        done
        
        echo "------------------------------------------------------------------------"
        echo ""
        
        # Quick stats
        online_count=0
        for container in "${CONTAINERS[@]}"; do
            url="${BASE_URL}-${container}.onrender.com"
            if curl -s --max-time 5 "$url" > /dev/null 2>&1; then
                ((online_count++))
            fi
        done
        
        echo -e "${CYAN}📊 Summary: $online_count/${#CONTAINERS[@]} containers online${NC}"
        echo ""
        
        # Instructions
        echo -e "${YELLOW}Instructions:${NC}"
        echo "• Press Ctrl+C to exit"
        echo "• Containers refresh every $CHECK_INTERVAL seconds"
        echo "• URLs are clickable in most terminals"
        echo ""
        
        # Workshop URLs for easy access
        echo -e "${CYAN}🔗 Quick Access URLs:${NC}"
        for container in "${CONTAINERS[@]}"; do
            echo "   $container: https://vibe-${container}.onrender.com (password: workshop2025)"
        done
        echo ""
        
        # Wait before next check
        for i in $(seq $CHECK_INTERVAL -1 1); do
            echo -ne "\r${BLUE}Next refresh in: $i seconds...${NC} "
            sleep 1
        done
    done
}

# Function to test all containers once
test_containers() {
    echo -e "${BLUE}Testing all containers...${NC}"
    echo ""
    
    for container in "${CONTAINERS[@]}"; do
        echo -n "Testing $container... "
        url="${BASE_URL}-${container}.onrender.com"
        
        if curl -s --max-time 10 "$url" > /dev/null 2>&1; then
            echo -e "${GREEN}✅ Online${NC}"
        else
            echo -e "${RED}❌ Offline${NC}"
        fi
    done
    echo ""
}

# Function to show help
show_help() {
    echo "VC-101 Workshop Container Monitor"
    echo ""
    echo "Usage: $0 [OPTION]"
    echo ""
    echo "Options:"
    echo "  -h, --help      Show this help message"
    echo "  -t, --test      Test all containers once and exit"
    echo "  -m, --monitor   Start real-time monitoring (default)"
    echo ""
    echo "Examples:"
    echo "  $0              # Start monitoring dashboard"
    echo "  $0 --test       # Quick health check"
    echo ""
}

# Parse command line arguments
case "${1:-}" in
    -h|--help)
        show_help
        exit 0
        ;;
    -t|--test)
        test_containers
        exit 0
        ;;
    -m|--monitor|"")
        monitor_containers
        ;;
    *)
        echo "Unknown option: $1"
        show_help
        exit 1
        ;;
esac
