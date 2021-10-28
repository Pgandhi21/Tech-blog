const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Posts extends Model {}

Posts.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
      sequelize
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: "Posts",
  });

module.exports = Posts;
