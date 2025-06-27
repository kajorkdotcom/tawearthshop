const mongoose = require('mongoose');
const historySchema = new mongoose.Schema({ userId: String });
module.exports = mongoose.model('PurchaseHistory', historySchema);