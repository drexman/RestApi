const express = require('express');
const routes = express.Router();
const cors = require('cors')
const LoginController = require('../controllers/LoginController');
const ContatoController = require('../controllers/ContatoController'); 


routes.post('/usuario/auth', LoginController.authentication);
routes.post('/usuario/save', LoginController.save);
routes.put('/usuario/update/:id', LoginController.update);
routes.delete('/usuario/delete/:id', LoginController.delete);

routes.post('/contato/save', ContatoController.save);
routes.put('/contato/update/:id', ContatoController.update);
routes.get('/contato/list', ContatoController.findAll);
routes.get('/contato/findOne/:id', ContatoController.findById);
routes.delete('/contato/delete/:id', ContatoController.delete);

module.exports = routes;  