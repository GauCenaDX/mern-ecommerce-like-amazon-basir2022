import express from 'express';
import Product from '../models/productModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //-- remove all current products
  await Product.remove({});
  //-- insert products from data.js
  const createProducts = await Product.insertMany(data.products);
  //-- send back products to the frontend
  res.send({ createProducts });
});

export default seedRouter;