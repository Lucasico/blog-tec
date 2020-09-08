const {Model, DataTypes} = require('sequelize')


class Article extends Model{
    static init(sequelize){
        super.init({
            title:DataTypes.STRING,
            description:DataTypes.TEXT,
            url:DataTypes.TEXT,
            like:DataTypes.INTEGER,
            deslike:DataTypes.INTEGER

        }, {
            sequelize
        })
    }
     //relacionamento entre os models
     static associate(models){
        this.belongsToMany(models.Tecnologies,{ foreignKey: 'article_id',through:'articles_tecs', as: 'article'})
        this.belongsTo(models.User,{foreignKey:'user_id', as:'user'})
        //
    }
}

module.exports = Article