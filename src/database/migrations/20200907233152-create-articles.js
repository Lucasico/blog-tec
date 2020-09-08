'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('articles', {
        id:{ 
          type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey: true,
          allowNull:false,
        },
        user_id:{
          type: Sequelize.UUID,
          allowNull:false,
          references: { model:'users', key:'id' },
          //atualizar id user atualizar aqui
          onUpdate:'CASCADE',
          //apagar id user apagar apagar endereco
          onDelete:'CASCADE'
         },
        title:{
          type: Sequelize.STRING,
          allowNull:false,
        },
        description:{
          type: Sequelize.TEXT,
          allowNull:false,
        },
        url:{
          type: Sequelize.TEXT,
        },
        like:{
          type: Sequelize.INTEGER,
          allowNull:false,
          defaultValue: 0
        },
        deslike:{
          type: Sequelize.INTEGER,
          allowNull:false,
          defaultValue: 0
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
          defaultValue: new Date(),
        },
       });
  },

  down: async (queryInterface, Sequelize) => {
   
      await queryInterface.dropTable('articles');
     
  }
};
