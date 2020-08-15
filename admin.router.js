const express = require('express');
const Article = require('./models/Article.model.js');
const Author = require('./models/Author.model.js');
const Category = require('./models/Category.model.js');


let adminRouter = express.Router();


adminRouter.get('/', (req, res)=>{
    Article.find()
    .populate('author').populate('category')
    .exec()
    .then(articles => {
    res.render('admin/admin', {articles})
    })
    .catch(error => res.send(error.message))

})


adminRouter.get('/write', (req, res) => {
    // Va récupérer la liste des auteurs et des categories en base, et les passent à la vue
    Promise.all([
    Author.find().sort('name'),
    Category.find().sort('title')
    ])
    .then(([authors, categories]) => res.render('admin/write', {authors,
    categories}))
    .catch(error => res.send(error.message))
    });

    



module.exports = adminRouter;