const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(bodyParser.json());

const feedRoute = require("./routes/feeds");
app.use("/feed", feedRoute);

app.get("/", (req, res) => {
  res.send("Feed Burner API is here! ❤️");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log(`Conneted to DB!`);
  }
);

app.listen(3000);
