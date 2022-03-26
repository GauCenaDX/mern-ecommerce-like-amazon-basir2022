import express from 'express'
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import expressAsyncHandler from 'express-async-handler';
import { generateToken } from '../utils.js';

const userRouter = express.Router();

//-- Create a post request
//--   . Using expressAsyncHandler method to catch error
userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    //-- Get the user by email
    const user = await User.findOne({ email: req.body.email });

    //-- If user exists, compare the plain text password with the
    //-- encrypted password in the database
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        //-- Password is matched, send back these data
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user)
        });
        return;
      }
    }
    //-- If user doesn't exist, or password doesn't matched, send
    //-- back this status and error message
    res.status(401).send({ message: 'Invalid email or password' });
  })
);

userRouter.post(
  '/signup',
  expressAsyncHandler(async (req, res) => {
    //-- Create new user instance from userModel
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    });
    //-- Save user to the database
    const user = await newUser.save();
    //-- Send user info and token back to frontend
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user)
    });
  })
);

export default userRouter;