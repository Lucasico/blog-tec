const User = require('../model/User')
const { v4: uuidv4 } = require('uuid');
const Yup = require('yup')

module.exports = {
    async store(req, res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            name: Yup.string().required(),
            address_id: Yup.number().required(),
          });
      
          if (!(await schema.isValid(req.body))) {
            return res.status(400).json({ error: 'Todos os campos são obrigatorios' });
          }
        const {name, email, address_id} = req.body
        const id = uuidv4()
        const user = await User.create({id,name, email, address_id})
        return res.status(200).json(user)
    },

    async showUser(req, res){
       const {user_id} = req.params
       const user = await User.findByPk(user_id,{
           //incluindo associação ao retorno
           include: {association:'address', attributes:['cep','street','number']}
       })
       return res.status(200).json(user)
    },

    async deleteUser(req,res){
        const {user_id} = req.params
        const user = await User.destroy( {where:{ id : user_id } })
        return res.status(200).json()
    } ,

    async updateUser(req, res){
        const {user_id} = req.params
        const {name, email, address_id} = req.body
        const updateUser = await User.update({name,email,address_id}, {where:{id:user_id}})
        if(updateUser){
            const user = await User.findByPk(user_id,{
                attributes:['id','name','email'],
                //incluindo associação ao retorno
                include: {association:'address', attributes:['cep','street','number']}
            })
            return res.status(200).json(user)
        }
        
    }
}