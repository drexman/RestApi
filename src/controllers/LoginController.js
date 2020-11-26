const Usuario = require('../models/Usuario');

class LoginController {

    async save(req, res, next)
    {
        console.log(req.body);
        try {
            const usuario = Usuario.create(req.body);
            return res.status(400).json({mensagem: 'Cadastro realizado com sucesso'});
        } catch (error) {
            res.status(error.status).json({mensagem: error.message});
        }
    }

    async update(req, res, next)
    {
        const id = req.params.id;
        try {
            let usuario = await Usuario.findByPk(req.params.id);
            usuario = usuario.update(req.body);
        } catch (error) {
            res.status(error.status).json({mensagem: error.message});
        }
    }

    async authentication(req, res, next)
    {

        try {
            const usuario = req.params.usuario;
            const senha = req.params.senha;

            

        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensagem: error.message
            })
        }
    }
}

module.exports = new LoginController();