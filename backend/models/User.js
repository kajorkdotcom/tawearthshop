const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  username: String,
  password: String,
  role: user,
  point: { type: Number, default: 100 },
  isAdmin: { type: Boolean, default: false }
});
module.exports = mongoose.model('User', schema);
