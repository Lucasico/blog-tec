const {Model, DataTypes} = require('sequelize')


class Tecnologies extends Model{
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
        }, {
            sequelize
        })
    }
    
     //relacionamento entre os models
     static associate(models){
        this.belongsToMany(models.Articles,{ foreignKey: 'tecs_id',through:'articles_tecs', as: 'tecs'})
    }
}

module.exports = Tecnologies