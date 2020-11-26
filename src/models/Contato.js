const Sequelize = require('sequelize');

class Contato extends Sequelize.Model {
    static init(sequelize)
    {
        super.init({
            nome: Sequelize.STRING,
            email: Sequelize.STRING(150),
            telefone: Sequelize.STRING(50)
        },{
            sequelize : sequelize,
            tableName: 'contatos'
        })

        return this;
    }

    static associate(models)
    {

    }
}

module.exports = Contato;