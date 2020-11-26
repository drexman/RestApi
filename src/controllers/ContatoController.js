const Contato = require('../models/Contato');
const helpers =  require('../helpers');
const { condition } = require('sequelize');

class ContatoController {
    async save(req, res, next) {
        Contato.create(req.body).then(() => {
            return res.status(200).json({ mensagem: 'Cadastro realizado com sucesso' });
        }).catch((err) => {
            res.status(400).json({ mensagem: err.message });
        })
    }

    async update(req, res, next) {
        
        const contato = await Contato.findByPk(req.params.id);
        if(!contato)
        {
            return res.status(404).json({mensagem: "Contato não encontrado"});
        }

        contato.update(req.body).then(() => {
            return res.status(200).json({mensagem: 'Contato alterando com sucesso'});
        }).catch((err) => {
            return res.status(400).json({mensagem: err.message }); 
        })
    }

    async delete(req, res, next)
    {
        const contato = await Contato.findByPk(req.params.id);
        if(!contato)
        {
            return res.status(404).json({mensagem: "Contato não encontrado"});
        }
        contato.destroy().then(() => {
            return res.status(200).json({mensagem: 'Contato removido com sucesso'});
        }).catch((err) => {
            return res.status(400).json({mensagem: err.message});
        })
    }

    async findById(req, res, next)
    {
        
    }

    async findAll(req, res, next)
    {
        const {page, size} = req.query;

        let codition = null;
        const { limit, offset } = helpers.getPagination(page,size);


        Contato.findAndCountAll({ where: condition, limit, offset})
        .then(data => {
            const response = helpers.getPagingData(data, page, limit);
            return res.status(200).json(response);
        }).catch(err => {
            return res.status(500).json({
                mensagem: err.message
            })
        })
    }
}

module.exports = new ContatoController();