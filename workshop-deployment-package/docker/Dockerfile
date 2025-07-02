# VC-101 Workshop Demo Container
# Base code-server image with Cline AI integration
FROM codercom/code-server:latest

# Set environment variables
ENV CODE_SERVER_CONFIG_DIR=/home/coder/.config/code-server
ENV WORKSHOP_ID=demo-1
ENV PASSWORD=workshop2025

# Switch to root for system installations only
USER root

# Install system dependencies (excluding conflicting nodejs/npm)
RUN apt-get update && apt-get install -y \
    git \
    curl \
    wget \
    python3 \
    python3-pip \
    build-essential \
    && rm -rf /var/lib/apt/lists/*

# Install Node.js 18 from NodeSource (single, clean installation)
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    rm -rf /var/lib/apt/lists/*

# Create workspace directory and set ownership
RUN mkdir -p /home/coder/project && \
    chown -R coder:coder /home/coder/

# Switch to coder user for all application setup
USER coder
WORKDIR /home/coder/project

# Create package.json and install http-proxy locally for health-proxy.js
RUN echo '{"name":"workshop-proxy","version":"1.0.0","dependencies":{"http-proxy":"^1.18.1"}}' > package.json && \
    npm install

# Copy starter project files
COPY --chown=coder:coder starter-projects/ ./

# Set up VS Code settings and extensions directory
RUN mkdir -p /home/coder/.local/share/code-server/User
RUN mkdir -p /home/coder/.local/share/code-server/extensions
RUN mkdir -p /home/coder/project/.vscode

# Copy VS Code configuration
COPY --chown=coder:coder vscode-config/settings.json /home/coder/.local/share/code-server/User/
COPY --chown=coder:coder vscode-config/tasks.json /home/coder/project/.vscode/

# Download and install Cline extension from GitHub releases
RUN curl -L -o /tmp/cline.vsix https://github.com/cline/cline/releases/download/v3.18.1/cline-3.18.1.vsix \
    && code-server --install-extension /tmp/cline.vsix \
    && rm /tmp/cline.vsix

# Copy deployment and utility scripts
COPY --chown=coder:coder scripts/ /home/coder/scripts/
RUN chmod +x /home/coder/scripts/*.sh

# Copy health proxy and startup scripts
COPY --chown=coder:coder health-proxy.js /home/coder/
COPY --chown=coder:coder start-services.sh /home/coder/
RUN chmod +x /home/coder/start-services.sh

# Set up Git configuration and initialize repository as coder user
RUN git config --global user.name "Workshop Demo" \
    && git config --global user.email "demo@workshop.dev" \
    && git config --global init.defaultBranch main \
    && git init . \
    && git add . \
    && git commit -m "Initial workshop starter project"

# Expose health proxy port (Render expects 10000)
EXPOSE 10000

# Start services using startup script (code-server on 8080, health proxy on 10000)
CMD ["bash", "/home/coder/start-services.sh"]
