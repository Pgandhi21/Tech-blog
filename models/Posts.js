const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Post extends Model {}

Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize
  }
);

module.exports = Post;
