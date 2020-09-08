'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('tecnologies', { 
       id: { 
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true,
        allowNull:false,
       },
       name:{
         type: Sequelize.STRING,
         allowNull1:false
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
   await queryInterface.dropTable('tecnologies');
     
  }
};
