const express = require('express');
const Product = require('../models/product'); // Import the Product model
const router = express.Router();

// POST: Add a new product to the catalog
router.post('/add', async (req, res) => {
  const { name, description, price, category, imageUrl } = req.body;

  if (!name || !description || !price || !category) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      category,
      imageUrl,
    });

    await newProduct.save(); // Save the product to the database
    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error: error.message });
  }
});

module.exports = router;


