const express = require('express');
const routes = express.Router();

const LoginController = require('../controllers/LoginController');
const ContatoController = require('../controllers/ContatoController'); 

routes.get('/usuario/auth', LoginController.authentication);
routes.post('/usuario/save',    LoginController.save);
routes.put('/usuario/save/:id', LoginController.update);

module.exports = routes;  