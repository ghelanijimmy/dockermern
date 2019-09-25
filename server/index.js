const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const router = require("./routes/routes");
const express = require("express");

// const Schema = mongoose.Schema;

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const dburl = process.env.DBURL;
const port = process.env.PORT || 5001;

console.log(dburl);

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

//
// app.post("/check", (req, res) => {
//   User.findOne({ name: req.body.name }, (err, data) => {
//     res.json(data);
//   });
// });


app.use("/", router);

app.listen(port, () => console.log(`Express started on port ${port}`));
