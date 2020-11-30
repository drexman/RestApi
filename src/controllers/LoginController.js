const Usuario = require('../models/Usuario');
var jwt = require('jsonwebtoken');

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
            const email = req.body.email;
            const senha = req.body.senha;

            const user = await Usuario.findOne({
                where : {
                    email : email
                }
            });

            if(!user)
            {
                return res.status(404).json({ mensagem : "Usuario não encontrado"});
            }

            if(user.senha == senha)
            {
                let id = user.id;
                let token = jwt.sign({id}, process.env.SECRET_API, {
                    expiresIn: 64000
                });

                return res.status(200).json({token : token});
            } else {
                return res.status(401).json({mensagem : "Login inválido!"});
            }

        } catch (error) {
            return res.status(400).json({
                status: "error",
                mensagem: error.message
            })
        }
    }
}

module.exports = new LoginController();