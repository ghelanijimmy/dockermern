const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const dburl = process.env.DBURL;
const port = process.env.PORT || 5001;

mongoose
  .connect("mongodb://mongodb:27017/dockermern", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .catch(err => console.log(err));

const connection = mongoose.connection;

connection.on("open", () => {
  console.log("MongoDB database connection established successfully!");
});

connection.on("error", err => {
  console.log(err);
  // mongoose.connect(dburl, { useNewUrlParser: true });
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => res.json("test"));

app.post("/add", (req, res) => {
  let newName = new User({
    name: "Jimmy"
  });
  newName
    .save()
    .then(data => res.json(data))
    .catch(err => res.json(err));
});

app.post("/check", (req, res) => {
  User.findOne({ name: req.body.name }, (err, data) => {
    res.json(data);
  });
});

app.listen(port, () => console.log(`Express started on port ${port}`));
