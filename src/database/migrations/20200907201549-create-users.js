'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.createTable('users', { 
       id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull:false,
        defaultValue: Sequelize.UUIDV4
       },
       address_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references: { model:'addresses', key:'id' },
        //atualizar id user atualizar aqui
        onUpdate:'CASCADE',
        //apagar id user apagar apagar endereco
        onDelete:'CASCADE'
       },
       name:{
         type:Sequelize.STRING,
         allowNull:false
       },
       email:{
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
  
      await queryInterface.dropTable('users');
     
  }
};
