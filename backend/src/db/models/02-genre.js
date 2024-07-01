const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Genre = sequelize.define('Genre', {
    genre_id: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
      primaryKey: true,
    },
    genre_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Genre;
};
