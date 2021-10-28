const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connections");

class Comments extends Model {}

Comments.init(
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
      modelName: "Posts",
  });

module.exports = Comments;