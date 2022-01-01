const mongoose = require("mongoose");

const FeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Feed = mongoose.model("Feed", FeedSchema);
module.exports = Feed;
