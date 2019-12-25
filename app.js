const express = require('express');
const bodyParser = require('body-parser');

const getProducts

const app = express();

app.use(bodyParser.json());

app.post('/products', createProduct);

app.get('/products', getProducts);

app.listen(3000);