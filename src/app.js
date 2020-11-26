var express = require('express');
var bodyParser = require('body-parser'); 
var multer = require('multer');
var form = multer();

const app = express();
const routes = require('./routes');

require('./database');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form.array());
app.use(express.static('public'));

//Definir as rotas
app.use(routes);

app.listen(3000, () => {
    console.log('Backend ativo');
});

