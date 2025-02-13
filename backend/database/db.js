import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      ssl: true, // Ensure SSL is enabled if required
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.log('Error connecting to the database', error);
    process.exit(1);
  }
};

export default connectDB;
