const express = require("express");
const router = express.Router();
const Feed = require("../models/Feed");

router.get("/", (req, res) => {
  res.send("We are on Feed");
});

router.post("/", async (req, res) => {
  try {
    const feed = new Feed(req.body);
    const savedFeed = await feed.save();
    res.json(savedFeed);
  } catch (err) {
    return res.json(err.message);
  }
});

module.exports = router;
