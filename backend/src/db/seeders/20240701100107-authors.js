'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('authors', [
      {
        name: 'Jane Doe',
        biography: 'Jane Doe is a prolific author with many published works.'
      },
      {
        name: 'John Smith',
        biography: 'John Smith is an acclaimed writer known for his novels.'
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('authors', null, {});
  }
};
