require('dotenv').config({
    path: process.env.NODE_ENV === "dev" ? ".env" : ".env.production"
});
var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var form = multer();
const app = express();
const routes = require('./routes');

require('./database');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use(require('cors')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form.array());
app.use(express.static('public'));

//Definir as rotas
app.use(routes);
app.listen(process.env.APP_PORT, () => {
    console.log('Backend ativo');
});

