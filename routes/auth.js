
const express = require('express');
const router = express.Router();
const User  = require('../models/user');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



router.post('/register', async (req, res) => {
    try {
      const { email,name, password } = req.body;
      const user = new User({ email, name,password: password });
      const salt  = bcrypt.genSaltSync(10);
      const hashedPassword = await bcrypt.hashSync(password, salt);
      user.password=hashedPassword;
      await user.save();
      res.status(201).json({ message: 'Registration successful!' });
    } catch (err) {
      res.status(500).json({ message: 'Registration failed!' });
    }
  });
  
  // Login Route
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid credentials!' });
      }
      const payload = {
        "id":user._id,
        "email":user.email,
        "name":user.name
      }
      const secretKey='1234567891011';
      const token = jwt.sign({ userId: payload}, secretKey, { expiresIn: '1h' });
      res.status(200).json({ message: 'Login successful!','token':token,'data':user });
    } catch (err) {
      
      res.status(500).json({ message: 'Login failed!',error : err });
    }
  });

  router.post('/logout', async (req, res) => {
    try {
      // Since we are using JWT, there is no need to maintain server-side session.
      // The client can simply discard the token to logout.
      // Optionally, you can have a token blacklist to handle revoking tokens.
      res.status(200).json({ message: 'Logout successful!' });
    } catch (err) {
      res.status(500).json({ message: 'Logout failed!' });
    }
  });
  
  // Start the server
 

  module.exports = router