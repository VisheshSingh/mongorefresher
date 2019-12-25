const MongoClient = require('mongodb').MongoClient;

const url =
  'mongodb+srv://test-user:test123@cluster0-t0uam.mongodb.net/products_test?retryWrites=true&w=majority';

const createProduct = async (req, res, next) => {
  const { name, price } = req.body;

  const newProduct = {
    name,
    price
  };

  const client = new MongoClient(url, { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db();
    const result = db.collection('products').insertOne(newProduct);
  } catch (error) {
    return res.json({ message: 'Could not save the data.' });
  }
  client.close();

  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url, { useUnifiedTopology: true });
  let products;
  try {
    await client.connect();
    const db = client.db();
    products = await db
      .collection('products')
      .find()
      .toArray();
  } catch (error) {
    return res.json({ message: 'Could not get the products.' });
  }
  client.close();

  res.json(products);
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
