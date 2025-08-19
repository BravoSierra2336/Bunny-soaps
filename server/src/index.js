import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './lib/db.js';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// Static assets (e.g., product images)
app.use('/images', express.static('public/images'));

app.get('/', (req, res) => {
  res.json({ name: "Bunny's Soaps & Scrubs API", status: 'ok' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

// Serve the React app in production
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');

if (process.env.NODE_ENV === 'production') {
  // Serve static files from client build
  app.use(express.static(clientDistPath));

  // SPA fallback: send index.html for any non-API route
  app.get('*', (req, res) => {
    // Avoid intercepting API routes explicitly
    if (req.path.startsWith('/api')) return res.status(404).json({ error: 'Not found' });
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
}

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
