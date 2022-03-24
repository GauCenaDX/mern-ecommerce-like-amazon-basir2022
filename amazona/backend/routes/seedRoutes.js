import express from 'express';
import Product from '../models/productModel.js';
import User from '../models/userModel.js';
import data from '../data.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  //-- remove all current products
  await Product.remove({});
  //-- insert products from data.js
  const createProducts = await Product.insertMany(data.products);

  //-- remove all current users
  await User.remove({});
  //-- insert users from data.js
  const createUsers = await User.insertMany(data.users);

  //-- send back products and users info to the frontend
  res.send({ createProducts, createUsers });
});

export default seedRouter;