import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';


//-- Fetch variable from .env
//-- The result will be put in process.env
dotenv.config();

//-- Connect to the MongoDB database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

//-- Creating an express app
const app = express();

app.use('/api/seed', seedRouter);

//-- Send products info to frontend when access this url
app.use('/api/products', productRouter);

//-- Define the port that response for backend
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});