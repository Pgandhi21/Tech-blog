const router = require("express").Router();
const { Comments, Posts, Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postInfo = await Posts.findAll({
      include: [Users],
    });

    const postData = postInfo.map((post) => post.get({ plain: true }));

    res.render("posts", { postData });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/posts/:id", async (req, res) => {
  try {
    const postInfo = await Posts.findByPk(req.params.id, {
      include: [
        Users,
        {
          model: Comments,
          include: [Users],
        },
      ],
    });

    if (postInfo) {
      const postData = postInfo.get({ plain: true });

      res.render("onePost", { postData });
    } else {
      res.status(404).json(err);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
