const express = require('express');
const router = express.Router();
const { getProducts, addProduct } = require('../controllers/productController');

router.get('/', getProducts);
router.post('/', addProduct); // Protect this route for admins only in a real app

module.exports = router;
