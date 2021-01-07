import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const startServer = () => {
  const CONNECTION_URL = process.env.MONGO_URI;
  try {
    mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    console.log('mongoose connected');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default startServer;
