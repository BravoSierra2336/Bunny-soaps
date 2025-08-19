import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true, index: true },
    description: { type: String },
    price: { type: Number, required: true, min: 0 },
    image: { type: String },
    category: { type: String, enum: ['soap', 'scrub', 'bundle', 'accessory'], default: 'soap' },
    ingredients: [{ type: String }],
    rating: { type: Number, min: 0, max: 5, default: 0 },
    stock: { type: Number, min: 0, default: 0 },
    featured: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model('Product', productSchema);
