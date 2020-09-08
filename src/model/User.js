const {Model, DataTypes} = require('sequelize')


class User extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            email:DataTypes.STRING
        }, {
            sequelize
        })
    }
     //relacionamento entre os models
     static associate(models){
        this.belongsTo(models.Address, {foreignKey: 'address_id', as: 'address'});
        
    }
}

module.exports = User