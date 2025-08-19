import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
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

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });
