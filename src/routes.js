const express = require('express')
const routes = express.Router()
const UserController = require('./controllers/UserController')
const AddressController = require('./controllers/AddressController')
const ArticleController = require('./controllers/ArticleController')
const TecnologieController = require('./controllers/TecnologiesController')
const asyncHandler = require('express-async-handler')

//address routes
routes.post('/addresses',asyncHandler(AddressController.store))
routes.get('/addresses',asyncHandler(AddressController.index))

//users routes
routes.post('/users',asyncHandler(UserController.store))
routes.get('/users/:user_id',asyncHandler(UserController.showUser))
routes.delete('/users/:user_id',asyncHandler(UserController.deleteUser))
routes.put('/users/:user_id',asyncHandler(UserController.updateUser))

//tecnologies routes
routes.post('/tecnologies',asyncHandler(TecnologieController.store))
routes.get('/tecnologies/:tech_id',asyncHandler(TecnologieController.searchTech))
routes.delete('/tecnologies/:tech_id',asyncHandler(TecnologieController.deleteTech))

//articles routes
routes.post('/users/:user_id/tecnologi/:tec_id/articles', asyncHandler(ArticleController.create))
routes.get('/articles',asyncHandler(ArticleController.index))

module.exports = routes
