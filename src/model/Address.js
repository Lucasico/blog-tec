const {Model, DataTypes} = require('sequelize')


class Address extends Model{
    static init(sequelize){
        super.init({
            cep:DataTypes.STRING,
            street:DataTypes.STRING,
            //31A, 22e
            number:DataTypes.STRING
        }, {
            sequelize
        })
    }
    
}

module.exports = Address