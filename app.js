const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//const movieRouter = require('./routers/movieRouter');

const movieRouter = require("./routers/movieRouter");

const userRouter = require("./routers/userRouter.js");
const app = express();
const cors = require("cors");

// connect to a MongoDB database
mongoose.connect("mongodb://0.0.0.0:27017/movie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.disable("x-powered-by");

//used for post method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//router

app.use("/movie", movieRouter);
app.use("/user", userRouter);

/// log all requests to access.log
app.use(
  morgan("common", {
    stream: fs.createWriteStream(path.join(__dirname, "access.log"), {
      flags: "a",
    }),
  })
);

//listening to port
const PORT_NUMBER = 8899;
app.listen(PORT_NUMBER, function () {
  console.log(`listening to post number ${PORT_NUMBER}`);
});
