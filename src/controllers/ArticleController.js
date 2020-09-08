const Article = require('../model/Articles')
const Tecnolgie = require('../model/Tecnologies')
module.exports = {
    async create(req, res){
        const {user_id, tec_id} = req.params
        const {title, description, url} = req.body
        const tecnologie = await Tecnolgie.findByPk(tec_id)
        if(!tecnologie){
            return res.status(200).json({"res":"Tecnologia não encontrada"})
        }
        const [ article ] = await Article.findOrCreate({
            where:{ title, description, url, user_id }
        })

        await Tecnolgie.addArticle(article)
        return res.status(200).json(article)

    },

    async index(req,res){
        const article = await Article.findAll()
        return res.status(200).json(article)

    }
        
}