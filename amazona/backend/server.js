import express from 'express';
import data from './data.js';

//-- Creating an express app
const app = express();

//-- Send products info to frontend when access this url
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//-- Send product info (based on slug info) to frontend when access this url
app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find((x) => x.slug === req.params.slug);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//-- Send product info (based on _id info) to frontend when access this url
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

//-- Define the port that response for backend
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});