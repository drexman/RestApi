const Sequelize = require('sequelize');

const Usuario = require('../models/Usuario');
const Contato = require('../models/Contato');

const databaseConfig = require('../config/database');

const models = [Usuario, Contato];

class Database {
    constructor()
    {
        this.init();
    }

    init()
    {
        this.connection = new Sequelize(databaseConfig);
        models
        .map((model) => model.init(this.connection))
        .map((model) => model.associate  && model.associate(this.connection.models))
    }
}

module.exports = new Database();