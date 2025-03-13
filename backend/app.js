import express from 'express';
import { connectDB } from './database/db.js';
import dotenv from 'dotenv';

//import all the routes
import authRoutes from './routes/auth.js';

//to read the files in env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => {
  res.send('Hello World');
});

//all Routes here
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDB();
});
