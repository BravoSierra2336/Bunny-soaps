import mongoose from 'mongoose';

export async function connectDB() {
  const uri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/bunny_soaps';
  mongoose.set('strictQuery', true);
  await mongoose.connect(uri, { dbName: 'bunny_soaps' });
  console.log('MongoDB connected');
}
