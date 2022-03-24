import express from 'express';
import Product from '../models/productModel.js';

const productRouter = express.Router();

productRouter.get('/', async (req, res) => {
  //-- Return all products
  const products = await Product.find();
  res.send(products);
});

//-- Send product info (based on slug info) to frontend when access this url
//--   . findOne() is a function from mongoose model
productRouter.get('/slug/:slug', async (req, res) => {
  const product = await Product.findOne({ slug : req.params.slug });
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//-- Send product info (based on _id info) to frontend when access this url
//--   . findById() is a function from mongoose model
productRouter.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

export default productRouter;