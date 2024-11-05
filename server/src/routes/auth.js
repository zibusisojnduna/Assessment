const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  
const User = require('../models/user');  

const router = express.Router();


const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });  
};

router.post('/register', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }


    const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    
    await newUser.save();

    
    const token = generateToken(newUser._id);

    
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Registration failed', error: error.message });
  }
});

module.exports = router;
