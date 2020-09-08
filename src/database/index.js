const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

//importando o model
const User = require('../model/User')
const Address = require('../model/Address')
const Article = require('../model/Articles')
const Tecnologies = require('../model/Tecnologies')


const connectionDB = new Sequelize(dbConfig)

//iniciando os models
Address.init(connectionDB)
User.init(connectionDB)
Article.init(connectionDB)
Tecnologies.init(connectionDB)

//passando os models para o relacinamento
User.associate(connectionDB.models)
Article.associate(connectionDB.models)

module.exports = connectionDB