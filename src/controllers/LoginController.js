const Usuario = require('../models/Usuario');

class LoginController {

    async save(req, res, next)
    {
        const { email } = req.body;
        const usuario = await Usuario.findOne({ where: {email : email}});
        if(usuario)
        {
            return res.status(409).json({
                mensagem : 'Email já está cadastrado' 
            });
        }
        
        Usuario.create(req.body).then(() => {
            return res.status(200).json({mensagem: 'Cadastro realizado com sucesso'});
        }).catch((err) => {
            return res.status(400).json({mensgem : err.message});
        })
    }

    async update(req, res, next)
    {
        let usuario = await Usuario.findByPk(req.params.id);
        if(!usuario) {
            return res.status(404).json({mensagem: "Usuario não encontrado"})
        }
    
        usuario.update(req.body).then(() => {
            return res.status(200).json({mensagem: 'Usuário alterando com sucesso'});
        }).catch((err) => {
            return res.status(400).json({mensagem: err.message}); 
        });
        
    }

    async delete(req, res, next)
    {
        let usuario = await Usuario.findByPk(req.params.id);
        if(!usuario)
        {
            return res.status(404).json({mensagem: "Usuario não encontrado"});
        }

        usuario.destroy().then(() => {
            return res.status(200).json({mensagem: 'Usuário removido com sucesso'});
        }).catch((err) => {
            return res.status(400).json({mensagem: err.message});
        })
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