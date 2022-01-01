const express = require("express");
const router = express.Router();
const Feed = require("../models/Feed");

router.get("/", async (req, res) => {
  try {
    const feeds = await Feed.find();
    res.json(feeds);
  } catch (err) {
    return res.json({ message: err });
  }
});
router.get("/:feedId", async (req, res) => {
  const { feedId } = req.params;
  try {
    const feeds = await Feed.findById(feedId);
    res.json(feeds);
  } catch (err) {
    return res.json({ message: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const feed = new Feed(req.body);
    const savedFeed = await feed.save();
    res.json(savedFeed);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
