const mongoose = require('mongoose');
const codeSchema = new mongoose.Schema({ code: String });
module.exports = mongoose.model('Code', codeSchema);