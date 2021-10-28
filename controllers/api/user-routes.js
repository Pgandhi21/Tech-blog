const router = require("express").Router();
const { Users } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newUser = await Users.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(newUser);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json(err);
      return;
    }

    const checkedPassword = user.checkPassword(req.body.password);

    if (!checkedPassword) {
      res.status(400).json(err);
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json("You are now logged in!");
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204);
    });
  } else {
    res.status(404).json(err);
  }
});

module.exports = router;
