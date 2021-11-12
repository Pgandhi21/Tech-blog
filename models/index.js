const Users = require("./Users");
const Posts = require("./Posts");
const Comments = require("./Comments");

Posts.belongsTo(Users, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Posts.hasMany(Comments, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

module.exports = {
  Users,
  Comments,
  Posts,
};
