import mongoose from 'mongoose';

const startServer = () => {
  const CONNECTION_URL = process.env.MONGO_URI;
  try {
    mongoose.connect(CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default startServer;
