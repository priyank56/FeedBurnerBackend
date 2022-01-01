const express = require("express");
const router = express.Router();
const Feed = require("../models/Feed");

router.get("/", (req, res) => {
  res.send("We are on Feed");
});

router.post("/", async (req, res) => {
  const feed = new Feed({
    title: req.body.title,
    description: req.body.description,
  });
  const savedFeed = await feed.save();
  res.json(savedFeed);
});

module.exports = router;
