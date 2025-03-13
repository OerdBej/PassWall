import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongo db is connected ${connect.connection.host}`);
  } catch (error) {
    console.log('errror connection to mongoDB');
    process.exit(1);
  }
};
