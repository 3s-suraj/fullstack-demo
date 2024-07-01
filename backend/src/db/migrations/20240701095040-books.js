'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      book_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'authors', // Name of the Authors table
          key: 'author_id'  // Primary key in the Authors table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      genre_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres', // Name of the Genres table
          key: 'genre_id'  // Primary key in the Genres table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      publication_date: {
        type: Sequelize.DATE,
        allowNull: true
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('books');
  }
};
