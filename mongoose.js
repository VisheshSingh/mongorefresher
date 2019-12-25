const mongoose = require('mongoose');
const Product = require('./models/productSchema');

mongoose
  .connect(
    'mongodb+srv://test-user:test123@cluster0-t0uam.mongodb.net/products_test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connection to mongoDB successful!'))
  .catch(() => console.log('Connection failed!'));

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;

  const newProduct = new Product({
    name,
    price
  });

  const result = await newProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
