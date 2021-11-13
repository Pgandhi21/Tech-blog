const router = require("express").Router();
const { Comments } = require("../../models/");
const withAuth = require("../../utils/withAuth");

router.post("/", withAuth, async (req, res) => {
  const body = req.body;
  
  try {
    const newComment = await Comments.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
