const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://test-user:test123@cluster0-t0uam.mongodb.net/products?retryWrites=true&w=majority';

const getProducts = (req, res, next) => {};

const createProduct = (req, res, next) => {};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
