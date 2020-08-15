require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');


const app = express()

app.set('view engine', 'pug')
app.set('views', './views'); 

const PORT = 9000
const HOST = 'localhost'


const blogRouter = require('./blog.router.js');
const adminRouter = require('./admin.router.js');


// Middlewares
app.use(express.static('./public'));
app.use('/', blogRouter);
app.use('/article', blogRouter);
app.use('/admin', adminRouter);


// ==================

const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


const DB_USER     = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST     = process.env.DB_HOST;
const DB_NAME     = process.env.DB_NAME;


const connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;



async function run() {
    try {
        // Connexion à MongoDB avec mongoose
        await mongoose.connect(connectionString, mongooseConfig);
        console.log('✅  Connexion MongoDB établie !');

        // Démarrage de l'application
        await startApp(app);
        console.log(`✅  L'application Express a démarré sur http://${HOST}:${PORT}`);
    } catch (error) {
        console.log(`❌  Erreur : ${error.message}`);
    }
}
run();





function startApp(app) {
    return new Promise(function(resolve, reject) {
        const server = app.listen(PORT, HOST, resolve);
        server.on('error', reject);
    });
}







// app.get('/', function (req, res) {
//     res.render('article')
//   })



// app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`));


