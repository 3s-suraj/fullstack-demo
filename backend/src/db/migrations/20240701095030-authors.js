'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('authors', {
      author_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      biography: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('authors');
  }
};
