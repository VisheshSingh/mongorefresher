const mongoose = require('mongoose');
const Product = require('./models/productSchema');

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;

  const createProduct = new Product({
    name,
    price
  });
};

export.createProduct = createProduct;