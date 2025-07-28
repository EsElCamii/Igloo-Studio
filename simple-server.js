import { createServer } from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFile } from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PORT = process.env.PORT || 3000;

const MIME_TYPES = {
  default: 'application/octet-stream',
  html: 'text/html; charset=UTF-8',
  js: 'application/javascript',
  json: 'application/json',
  css: 'text/css',
  png: 'image/png',
  jpg: 'image/jpg',
  gif: 'image/gif',
  ico: 'image/x-icon',  // Added ICO MIME type
  svg: 'image/svg+xml',
};

const server = createServer(async (req, res) => {
  try {
    // API endpoint
    if (req.url === '/api') {
      res.writeHead(200, { 'Content-Type': MIME_TYPES.json });
      return res.end(JSON.stringify({ message: 'Hello from the server!' }));
    }

    // Serve static files
    let filePath = req.url === '/' ? '/index.html' : req.url;
    filePath = join(__dirname, 'dist', filePath);
    
    // Default to index.html for SPA routing
    if (!filePath.endsWith('.') && !filePath.includes('.')) {
      filePath = join(__dirname, 'dist', 'index.html');
    }

    const fileContent = await readFile(filePath);
    const ext = filePath.split('.').pop().toLowerCase();
    const mimeType = MIME_TYPES[ext] || MIME_TYPES.default;
    
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(fileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // File not found, serve index.html for SPA routing
      try {
        const indexFile = await readFile(join(__dirname, 'dist', 'index.html'));
        res.writeHead(200, { 'Content-Type': MIME_TYPES.html });
        return res.end(indexFile);
      } catch (e) {
        res.writeHead(500);
        return res.end('Error loading index.html');
      }
    } else {
      console.error(error);
      res.writeHead(500);
      res.end('Server Error');
    }
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
