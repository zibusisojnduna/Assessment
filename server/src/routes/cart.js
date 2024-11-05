const express = require('express');
const router = express.Router();


let cart = [];


router.post('/add', (req, res) => {
  const { productId, quantity } = req.body;

  
  if (!productId || !quantity) {
    return res.status(400).json({ message: 'Product ID and quantity are required' });
  }

  
  const existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    
    existingItem.quantity += quantity;
  } else {

    cart.push({ productId, quantity });
  }

  res.status(200).json({ message: 'Product added to cart', cart });
});


router.delete('/remove', (req, res) => {
  const { productId } = req.body;


  if (!productId) {
    return res.status(400).json({ message: 'Product ID is required' });
  }

  
  cart = cart.filter(item => item.productId !== productId);

  res.status(200).json({ message: 'Product removed from cart', cart });
});


router.get('/', (req, res) => {
  res.status(200).json({ cart });
});


router.delete('/clear', (req, res) => {
  cart = [];
  res.status(200).json({ message: 'Cart cleared' });
});

module.exports = router;
