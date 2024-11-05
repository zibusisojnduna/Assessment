const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');


dotenv.config();

const app = express();

app.use(cors()); 
app.use(express.json()); 

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


const authRoutes = require('./routes/auth');
const productRoutes = require('./routes/products');
const cartRoutes = require('./routes/cart');

app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes);


app.get('/', (req, res) => {
  res.send('Welcome to ListIT!');
});


const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User'); // Assuming you have a User model

const router = express.Router();

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



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

