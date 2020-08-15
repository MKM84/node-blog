// const mongoose = require('mongoose');
// const shortid = require('shortid');
// const Schema = mongoose.Schema;

// const authorSchema = new Schema({
//   '_id':  { type: String, required: true, default: shortid.generate }, 
//   'name': { type: String, required: true},

// });


// module.exports = mongoose.model('Author', authorSchema, 'Author');


const mongoose = require('mongoose');
const shortid = require('shortid');
const Schema = mongoose.Schema;

// Création d'un nouveau Schema mongoose : ce schéma permettra d'indiquer à mongoose quelle doit être la structure d'un document `auteur` qui entre dans la base.
// C'est un peut comme définir les champs d'une table avec MySQL et phpMyAdmin

const authorSchema = new Schema({
    '_id' : { type: String, required: true, default: shortid.generate},
    'name' : { type: String, required: true}
});

// Et sur la base de ce schéma, on exporte un nouveau modèle Mongoose qui permettra de manipuler et créer des documents de type `auteur` dans la base Mongo
module.exports = mongoose.model('Author', authorSchema);