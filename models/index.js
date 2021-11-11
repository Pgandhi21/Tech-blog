const Users = require("./User");
const Posts = require("./Post");
const Comments = require("./Comment");

Users.hasMany(Posts, {
  foreignKey: "postId",
  onDelete: "CASCADE",
});

Posts.belongsTo(Users, {
  foreignKey: "usersId",
  onDelete: "CASCADE",
});

Posts.hasMany(Comments, {
  foreignKey: "commentId",
  onDelete: "CASCADE",
});

Comments.belongsTo(Users, {
  foreignKey: "usersId",
  onDelete: "CASCADE",
});

module.exports = {
  Users,
  Comments,
  Posts,
};
