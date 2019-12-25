const express = require('express');
const bodyParser = require('body-parser');

const MongoPractice = require('./mongo');

const app = express();

app.use(bodyParser.json());

app.post('/products', MongoPractice.createProduct);

app.get('/products', MongoPractice.getProducts);

app.listen(3000);
