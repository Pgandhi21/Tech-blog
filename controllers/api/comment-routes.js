const router = require("express").Router();
const { Comments } = require("../../models/");
const withAuth = require("../../utils/withAuth");

router.post("/", async (req, res) => {

  const body = req.body;

  console.log(body);
  try {
    const newComment = await Comments.create({
      ...body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
