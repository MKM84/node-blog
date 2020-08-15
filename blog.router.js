const express = require('express');
const Article = require('./models/Article.model.js');
const Author = require('./models/Author.model.js');
const Category = require('./models/Category.model.js');


// Création d'un nouvel objet "Router"
let blogRouter = express.Router();


blogRouter.get('/',(req, res) => {
    Article.find()
    .populate('author').populate('category')
    .exec()
    .then(articles => {
    res.render('index', {articles})
    })
    .catch(error => res.send(error.message))
});
    


blogRouter.get('/article/:id',(req, res) => {
   
    Article.findById(req.params.id)
    .populate('author').populate('category')
    .exec()
    .then(article => {
        res.render('article', {article})
        })
    .catch(error => res.send(error.message))
});











// .then(Author.find())
    // .then(authors => {
    // res.render('index', {authors})
    // })
    // .then(Category.find())
    // .then(categories => {
    // res.render('index', {categories})
    // })





    // blogRouter.get('/article/:id', function(req, res) {
    //     Article.findById(req.params.id).exec()
    //     .then(res.send('/article/' + req.params.id))
    //     .then(res.render('article'))
    //     .catch(error => res.send(error.message));
    // });

 

    // blogRouter.get('/article/:id',(req, res) => {
    //     .findById(req.params.id)
    //     .populate('author').populate('category')
    //     .exec()
    //     .then(res.send('/article/' + req.params.id), {articles})
    //     .catch(error => res.send(error.message))
    // });


    // blogRouter.get('/',(req, res) => {
    //     Author.find().then(authors => {
    //     res.render('index', {authors})
    //     }).catch(error => res.send(error.message))
    //     })


        // blogRouter.get('/',(req, res) => {
        //     Category.find().then(categories => {
        //     res.render('index', {categories})
        //     }).catch(error => res.send(error.message))
        //     })
    


module.exports = blogRouter;