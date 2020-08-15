const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  '_id':  { type: String, required: true, default: shortid.generate }, 
  'title': { type: String, required: true},

});


module.exports = mongoose.model('Category', categorySchema);