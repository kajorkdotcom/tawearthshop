const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  stock: Number,
  image: String
});
module.exports = mongoose.model('Product', schema);