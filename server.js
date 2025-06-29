const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false }));

const User = require('./backend/models/User');
const Product = require('./backend/models/Product');

mongoose.connect(process.env.MONGO_URI).then(() => console.log('MongoDB connected'));

// register/login/logout routes here...
// admin update product route...
// get products, buy product, history route...

app.listen(3000, () => console.log('Server started on port 3000'));
