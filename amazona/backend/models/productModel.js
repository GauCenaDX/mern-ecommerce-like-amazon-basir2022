import mongoose from 'mongoose';

//-- Define the schema: mongoose.Schema(object, option)
//--   . timestamps will add in two columns: created at, updated at
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, require: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number, required: true },
    numReviews: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

//-- Create the model from schema: mongoose.model(modelName, schemaName)
const Product = mongoose.model('Product', productSchema);
export default Product;