import express from 'express';
const app = express();

import { connectDB } from './database/db.js';
import dotenv from 'dotenv';

//import all the routes
import authRoutes from './routes/auth.js';

//to read the files in env
dotenv.config();

const PORT = process.env.PORT || 5001;

//middleware to get the req body incoming
app.use(express.json());

//all Routes here
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectDB();
});
