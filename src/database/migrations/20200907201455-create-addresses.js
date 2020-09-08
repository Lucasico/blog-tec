'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('addresses', { 
       id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull:false,
       },
       
       cep:{
         type:Sequelize.STRING,
         allowNull:false
       },
       street:{
         type:Sequelize.STRING,
         allowNull:false
       },
       number:{
        type:Sequelize.STRING,
        allowNull:false
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
  
      await queryInterface.dropTable('addresses');
     
  }
};
