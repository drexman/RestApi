require('dotenv').config({
    path : process.env.NODE_ENV === "dev" ? ".env" : ".env.production"
});
var express = require('express');
var bodyParser = require('body-parser'); 
var multer = require('multer');
var cors = require('cors');
var form = multer();
const app = express();
const routes = require('./routes');

require('./database');

var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
}

app.use(cors(corsOptions));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(form.array());
app.use(express.static('public'));

//Definir as rotas
app.use(routes);
app.listen(process.env.APP_PORT, () => {
    console.log('Backend ativo');
});

