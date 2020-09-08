const Address = require('../model/Address')
const Yup = require('yup')

module.exports = {

    async store(req,res){
        const schema = Yup.object().shape({
            number: Yup.number().required(),
            cep: Yup.string().required(),
            street: Yup.string().required(),
          });
      
          if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Todos os campos são obrigatorios' });
          }
        const {cep, street, number} = req.body
        const address = await Address.create({cep, street, number})
        return res.status(200).json(address)
    },

    async index(req,res){
        const addresses = await Address.findAll()
        return res.status(200).json(addresses)
    }

}