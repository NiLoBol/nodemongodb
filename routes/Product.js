 const express = require('express');
 const router = express.Router();
 const mongoose = require('mongoose');
 const Product = require('../public/javascripts/Product');

//  router.get('/',(req,res,next)=>{
//     Product.find((err,products)=>{
//         if(err) return next(err);
//         res.json(products);
//     })
//  })

 router.get('/', async (req, res, next) => {
    try {
      const products = await Product.find().exec();
      res.json(products);
      
    } catch (err) {
      next(err); // Pass the error to the error handler middleware
    }
  });
  router.post('/', async (req, res, next) => {
    try {
      const products = await Product.create(req.body);
      res.json(products);
    } catch (err) {
      next(err); // Pass the error to the error handler middleware
    }
  });
  
 module.exports =router;