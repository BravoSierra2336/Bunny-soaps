import { Router } from 'express';
import Product from '../models/Product.js';

const router = Router();

// List products with basic filters
router.get('/', async (req, res) => {
  try {
    const { q, category, featured } = req.query;
    const where = {};
    if (q) where.name = { $regex: String(q), $options: 'i' };
    if (category) where.category = String(category);
    if (featured !== undefined) where.featured = featured === 'true';

    const products = await Product.find(where).sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to list products' });
  }
});

// Get by slug
router.get('/:slug', async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to get product' });
  }
});

export default router;
