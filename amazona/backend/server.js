import express from 'express';
import data from './data.js';

//-- Creating an express app
const app = express();

//-- Send products info to frontend when access this url
app.get('/api/products', (req, res) => {
  res.send(data.products);
});

//-- Define the port that response for backend
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});