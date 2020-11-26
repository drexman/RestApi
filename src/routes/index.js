const express = require('express');
const routes = express.Router();

const LoginController = require('../controllers/LoginController')

routes.get('/usuario/auth', LoginController.authentication);
routes.post('/usuario/save',    LoginController.save);
routes.put('/usuario/save/:id', LoginController.update);

module.exports = routes;  