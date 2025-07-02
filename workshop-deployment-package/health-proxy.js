#!/usr/bin/env node

const http = require('http');
const httpProxy = require('http-proxy');

// Create proxy to forward requests to code-server
const proxy = httpProxy.createProxyServer({
  target: 'http://localhost:8080',
  changeOrigin: true
});

// Create HTTP server
const server = http.createServer((req, res) => {
  // Handle health check endpoint
  if (req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'healthy', 
      service: 'vc-101-workshop',
      timestamp: new Date().toISOString() 
    }));
    return;
  }
  
  // Proxy all other requests to code-server
  proxy.web(req, res, (error) => {
    console.error('Proxy error:', error.message);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Proxy Error: ' + error.message);
  });
});

// Handle proxy errors
proxy.on('error', (err, req, res) => {
  console.error('Proxy error:', err);
  res.writeHead(500, { 'Content-Type': 'text/plain' });
  res.end('Proxy Error');
});

// Start server on port 10000
const PORT = 10000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Health proxy server running on port ${PORT}`);
  console.log(`Health check available at: http://localhost:${PORT}/api/health`);
  console.log(`Proxying other requests to code-server on port 8080`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully');
  server.close(() => {
    process.exit(0);
  });
});
