import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute.js';
import startServer from './config/database.js';

dotenv.config();
const app = express();
startServer();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/api/users', userRoute);
app.get('/', (req, res, next) => {
  res.send('welcome to rekindle-moments backend');
});

app.use((req, res, next) => {
  const err = new Error('404 Not Found');
  err.status = 404;
  next();
});

app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.status || 500;

  res.status(status).json({
    error: {
      message: error.message
    }
  });
});

export default app;
