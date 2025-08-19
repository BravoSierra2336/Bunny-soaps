import dotenv from 'dotenv';
import { connectDB } from '../src/lib/db.js';
import Product from '../src/models/Product.js';

dotenv.config();

const products = [
  {
    name: "Lavender Bliss Soap",
    slug: 'lavender-bliss-soap',
    description: 'Handcrafted soap infused with calming lavender essential oil.',
    price: 7.99,
    image: '/images/lavender-soap.jpg',
    category: 'soap',
    ingredients: ['Olive oil', 'Coconut oil', 'Shea butter', 'Lavender EO'],
    rating: 4.8,
    stock: 24,
    featured: true,
  },
  {
    name: 'Citrus Sugar Scrub',
    slug: 'citrus-sugar-scrub',
    description: 'Brightening sugar scrub with lemon and orange zest.',
    price: 12.5,
    image: '/images/citrus-scrub.jpg',
    category: 'scrub',
    ingredients: ['Sugar', 'Sweet almond oil', 'Lemon EO', 'Orange EO'],
    rating: 4.6,
    stock: 15,
    featured: true,
  },
  {
    name: 'Oatmeal Honey Soap',
    slug: 'oatmeal-honey-soap',
    description: 'Soothing soap with colloidal oatmeal and raw honey.',
    price: 6.99,
    image: '/images/oatmeal-soap.jpg',
    category: 'soap',
    ingredients: ['Olive oil', 'Coconut oil', 'Oatmeal', 'Honey'],
    rating: 4.7,
    stock: 32,
    featured: false,
  },
];

(async () => {
  try {
    await connectDB();
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log(`Seeded ${products.length} products`);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
