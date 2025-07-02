#!/bin/bash

# Start code-server in the background on port 8080
echo "Starting code-server..."
code-server --bind-addr 0.0.0.0:8080 --auth password --disable-telemetry /home/coder/project &

# Wait a moment for code-server to start
sleep 5

# Start health proxy on port 10000 (foreground)
echo "Starting health proxy..."
node /home/coder/health-proxy.js
