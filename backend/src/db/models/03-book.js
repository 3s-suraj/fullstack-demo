const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Book = sequelize.define('Book', {
    book_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'author_id',
      },
    },
    genre_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'genre_id',
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    publication_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  Book.belongsTo(sequelize.models.Author, { foreignKey: 'author_id' });
  Book.belongsTo(sequelize.models.Genre, { foreignKey: 'genre_id' });

  return Book;
};
