const express = require('express');
const routes = express.Router();
const cors = require('cors')
const LoginController = require('../controllers/LoginController');
const ContatoController = require('../controllers/ContatoController'); 

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

routes.get('/usuario/auth',cors(corsOptions), LoginController.authentication);
routes.post('/usuario/save',cors(corsOptions), LoginController.save);
routes.put('/usuario/update/:id',cors(corsOptions), LoginController.update);
routes.delete('/usuario/delete/:id',cors(corsOptions), LoginController.delete);

routes.post('/contato/save', cors(corsOptions), ContatoController.save);
routes.put('/contato/update/:id',cors(corsOptions), ContatoController.update);
routes.get('/contato/list',cors(corsOptions), ContatoController.findAll);
routes.get('/contato/findOne',cors(corsOptions), ContatoController.findById);
routes.delete('/contato/delete/:id',cors(corsOptions), ContatoController.delete);

module.exports = routes;  