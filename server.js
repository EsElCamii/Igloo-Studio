import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the 'dist' directory (if using a frontend build)
app.use(express.static(path.join(__dirname, 'dist')));

// Simple API endpoint
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// For SPA routing - serve index.html for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
