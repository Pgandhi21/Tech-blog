const Users = require("./User");
const Posts = require("./Post");
const Comments = require("./Comment");

Users.hasMany(Posts, {
    foreignKey: "postsId",
    onDelete: "CASCADE",
  });

Posts.belongsTo(Users, {
  foreignKey: "usersId",
  onDelete: "CASCADE",
});

Posts.hasMany(Comments, {
  foreignKey: "postsId",
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
