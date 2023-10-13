const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../public/javascripts/Product');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('Product');
// });
// router.get('/', async (req, res, next) => {
//   try {
//     const products = await Product.find().exec();
    
//     res.render('Product',{products});
//   } catch (err) {
//     next(err); // Pass the error to the error handler middleware
//   }
// });

router.get('/', async (req, res, next) => {
    res.render('Product1');
});
router.get('/api/products', async (req, res, next) => {
  try {
    const products = await Product.find().exec();
    res.json(products);
  } catch (err) {
    next(err); // Pass the error to the error handler middleware
  }
});
module.exports = router;
