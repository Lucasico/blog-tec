const Tecnologies = require('../model/Tecnologies')
const Yup = require('yup')

module.exports = {
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
          });
      
          if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Todos os campos são obrigatorios' });
          }
        const {name} = req.body
        const tecnologi = await Tecnologies.create({name})
        return res.status(200).json(tecnologi)
    },
    
    async searchTech(req, res){
        const {tech_id} = req.params
        const tecnologi = await Tecnologies.findByPk(tech_id)
        return res.status(200).json(tecnologi)
    },

    async deleteTech(req, res){
        const {tech_id} = req.params
        const deleted = await Tecnologies.destroy({
            where: { id: tech_id }
        });
        if (deleted) {
            return res.status(200).send({"res":"Excluido com sucesso"});
        }   
    },
        
}