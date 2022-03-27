import express from 'express';
import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import userRouter from './routes/userRoutes.js';
import orderRouter from './routes/orderRoutes.js';


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

//-- Convert form data from Post request to a JSON object in req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/seed', seedRouter);

//-- Send products info to frontend when access this url
app.use('/api/products', productRouter);

//-- Send user info and token to frontend when access this url
app.use('/api/users', userRouter);

app.use('/api/orders', orderRouter);

//-- Define the error hanlder
//--   . This is like a middleware
app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

//-- Define the port that response for backend
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});