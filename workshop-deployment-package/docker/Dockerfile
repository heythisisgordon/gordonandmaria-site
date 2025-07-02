# VC-101 Workshop Demo Container
# Base code-server image with Cline AI integration
FROM codercom/code-server:latest

# Set environment variables
ENV CODE_SERVER_CONFIG_DIR=/home/coder/.config/code-server
ENV WORKSHOP_ID=demo-1
ENV PASSWORD=workshop2025

# Switch to root for installations
USER root

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    nodejs \
    npm \
    python3 \
    python3-pip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 18 (required for modern React)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Create workspace directory
RUN mkdir -p /home/coder/project
WORKDIR /home/coder/project

# Copy starter project files
COPY starter-projects/ ./

# Set up VS Code settings and extensions directory
RUN mkdir -p /home/coder/.local/share/code-server/User
RUN mkdir -p /home/coder/.local/share/code-server/extensions
RUN mkdir -p /home/coder/project/.vscode

# Copy VS Code configuration
COPY vscode-config/settings.json /home/coder/.local/share/code-server/User/
COPY vscode-config/tasks.json /home/coder/project/.vscode/

# Download and install Cline extension from GitHub releases
RUN curl -L -o /tmp/cline.vsix https://github.com/cline/cline/releases/download/v3.18.1/cline-3.18.1.vsix \
    && code-server --install-extension /tmp/cline.vsix \
    && rm /tmp/cline.vsix

# Copy deployment and utility scripts
COPY scripts/ /home/coder/scripts/
RUN chmod +x /home/coder/scripts/*.sh

# Set ownership for coder user
RUN chown -R coder:coder /home/coder/

# Switch back to coder user
USER coder

# Set up Git configuration and initialize repository as coder user
RUN git config --global user.name "Workshop Demo" \
    && git config --global user.email "demo@workshop.dev" \
    && git config --global init.defaultBranch main \
    && git init . \
    && git add . \
    && git commit -m "Initial workshop starter project"

# Expose code-server port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start code-server
CMD ["code-server", "--bind-addr", "0.0.0.0:8080", "--auth", "password", "--disable-telemetry", "/home/coder/project"]
