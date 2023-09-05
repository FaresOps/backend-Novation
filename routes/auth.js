const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/register', async (req, res) => {
  try {
    const { email, fullname, phoneNumber, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({ email, fullname, phoneNumber, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'Registration successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed!', error: err });
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

    // Create a JWT token
    const payload = {
      id: user._id,
      email: user.email,
      name: user.fullname,
    };
    const secretKey = '123456';
    const token = jwt.sign({ userId: payload }, secretKey, { expiresIn: '8h' });

    res.status(200).json({ message: 'Login successful!', token, data: user });
  } catch (err) {
    res.status(500).json({ message: 'Login failed!', error: err });
  }
});

router.post('/logout', async (req, res) => {
  try {
    // Since we are using JWT, there is no need to maintain server-side session.
    // The client can simply discard the token to logout.
    // Optionally, you can have a token blacklist to handle revoking tokens.
    res.status(200).json({ message: 'Logout successful!' });
  } catch (err) {
    res.status(500).json({ message: 'Logout failed!', error: err });
  }
});

module.exports = router;
