'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('genres', [
      { genre_name: 'Fantasy' },
      { genre_name: 'Science Fiction' },
      { genre_name: 'Mystery' },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('genres', null, {});
  }
};
