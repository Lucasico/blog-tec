'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('articles_tecs', { 
       id: { 
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull:false,
       },
       article_id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model:'articles', key:'id' },
        //atualizar id user atualizar aqui
        onUpdate:'CASCADE',
        //apagar id user apagar apagar endereco
        onDelete:'CASCADE'
       },
       tecs_id: { 
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model:'tecnologies', key:'id' },
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
   await queryInterface.dropTable('articles_tecs');
     
  }
};
