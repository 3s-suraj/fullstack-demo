'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const authors = await queryInterface.sequelize.query('SELECT author_id FROM authors;');
    const genres = await queryInterface.sequelize.query('SELECT genre_id FROM genres;');

    const authorIds = authors[0].map(author => author.author_id);
    const genreIds = genres[0].map(genre => genre.genre_id);

    await queryInterface.bulkInsert('books', [
      {
        title: 'Book Title 1',
        author_id: authorIds[0], // Use the first author ID
        genre_id: genreIds[0],   // Use the first genre ID
        price: 19.99,
        publication_date: '2023-01-01',
      },
      {
        title: 'Book Title 2',
        author_id: authorIds[1], // Use the second author ID
        genre_id: genreIds[1],   // Use the second genre ID
        price: 29.99,
        publication_date: '2022-06-15',
      },
    ], {});
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('books', null, {});
  }
};
