const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');  

dotenv.config();

const app = express();  

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));


const authRoutes = require('./src/routes/auth');
const productRoutes = require('./src/routes/product');
const cartRoutes = require('./src/routes/cart');

app.use('/api/auth', authRoutes); 
app.use('/api/products', productRoutes); 
app.use('/api/cart', cartRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to ListIT!');
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
