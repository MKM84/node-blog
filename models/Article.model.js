const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  '_id':  { type: String, required: true, default: shortid.generate }, 
  'title': { type: String, required: true},
  'dateCreated':  { type: Date, required: true, default: Date.now},
  'content': { type: String, required: true},
  'author': { type: String, required: true, ref:'Author'},
  'category': { type: String, required: true, ref:'Category'}
});


module.exports = mongoose.model('Article', articleSchema);