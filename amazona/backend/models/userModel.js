import mongoose from 'mongoose';

//-- Define the user schema: mongoose.Schema(object, option)
//--   . timestamps will add in two columns: created at, updated at
const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false, required: true }
  },
  {
    timestamps: true
  }
);

//-- Create the model from schema: mongoose.model(modelName, schemaName)
const User = mongoose.model('User', userSchema);
export default User;