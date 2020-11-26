const Sequelize = require('sequelize');

class Usuario extends Sequelize.Model {
    static init(sequelize)
    {
        super.init({
            email: Sequelize.STRING(150),
            senha: Sequelize.STRING(150),

            created_at: {
                field: 'created_at',
                type: Sequelize.DATE
            },
            updated_at : {
                field: 'updated_at',
                type:Sequelize.DATE
            }
        },{
            sequelize : sequelize,
            timestamps: true ,
            tableName: 'usuarios'
        })

        return this;
    }

    static associate(models)
    {

    }
    
}

module.exports = Usuario;