const Sequelize = require('sequelize');

class Usuario extends Sequelize.Model {
    static init(sequelize)
    {
        super.init({
            email:
            {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                },
                unique : {
                    args: true,
                    msg: 'Email já cadastrado'
                }
            },
      
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