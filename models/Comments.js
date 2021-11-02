const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Comment extends Model {}

Comment.init(
  {
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
      modelName: "comments",
  });

module.exports = Comment;