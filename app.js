const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const mongoose = require('mongoose');
const movieRouter = require('./routers/movieRouter');
const userRouter = require('./routers/userRouter.js');
const app = express();

// connect to a MongoDB database
mongoose.connect('mongodb://0.0.0.0:27017/movie').then(function () {
    console.log('connect successfully!');
}).catch(function (err) {
    console.log(`problem with db, `, err);
=======
const mongoose = require("mongoose");
//const movieRouter = require('./routers/movieRouter');
const userRouter = require("./routers/userRouter.js");
const app = express();

// connect to a MongoDB database
mongoose.connect("mongodb://0.0.0.0:27017/movie", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
>>>>>>> f6c2c199f163ebf75fb018b993ea6612ff2be0b4
});

app.disable("x-powered-by");

//used for post method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
<<<<<<< HEAD
app.use('/movie', movieRouter);
app.use('/user', userRouter);
=======
//app.use('/movie', movieRouter);
app.use("/user", userRouter);
>>>>>>> f6c2c199f163ebf75fb018b993ea6612ff2be0b4

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
<<<<<<< HEAD
    console.log(`listening to post number ${PORT_NUMBER}`);
})

=======
  console.log(`listening to post number ${PORT_NUMBER}`);
});
>>>>>>> f6c2c199f163ebf75fb018b993ea6612ff2be0b4
