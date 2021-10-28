const Users = require("./Users");
const Posts = require("./Posts");
const Comments = require("./Comments");

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
