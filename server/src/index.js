import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { connectDB } from './lib/db.js';
import productRoutes from './routes/products.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
// Static assets (e.g., product images)
app.use('/images', express.static('public/images'));

// API health endpoint
app.get('/api', (req, res) => {
  res.json({ name: "Bunny's Soaps & Scrubs API", status: 'ok' });
});

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistPath = path.resolve(__dirname, '../../client/dist');

// If a client build exists, serve it regardless of NODE_ENV
if (fs.existsSync(path.join(clientDistPath, 'index.html'))) {
  app.use(express.static(clientDistPath));
  app.get(/^\/(?!api).*/, (req, res) => {
    res.sendFile(path.join(clientDistPath, 'index.html'));
  });
} else {
  // Fallback root response to satisfy platform health checks when no client build is present
  app.get('/', (_req, res) => {
    res.status(200).send("Bunny's Soaps & Scrubs API (no client build found)");
  });
}

// Start HTTP server immediately so platform health checks pass even if DB is slow/unavailable
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));

// Connect to MongoDB in the background; log errors but don't crash the process
connectDB().catch((err) => {
  console.error('MongoDB connection error:', err?.message || err);
});
