const router = require("express").Router();
const { Comments, Posts, Users } = require("../models");

router.get("/", async (req, res) => {
  try {
    const postInfo = await Posts.findAll({
      include: [Users],
    });

    const postData = postInfo.map((post) => post.get({ plain: true }));

    res.render("posts", {
      layout: "homepage",
      postData,
    });
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

      res.render("onePost", {
        layout: "homepage",
        postData,
      });
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

  res.render("login", {
    layout: "homepage",
  });
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup", {
    layout: "homepage",
  });
});

module.exports = router;
