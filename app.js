const express = require("express");
const fs = require("fs");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const movieRouter = require('./routers/movieRouter');
const userRouter = require('./routers/userRouter.js');
const app = express();
const cors = require('cors');


//configuring environment file
const dotenv = require('dotenv');
dotenv.config();
const MONGO_URL = process.env.MONGO_URL;

// connect to a MongoDB database
//mongodb://0.0.0.0:27017/movie
mongoose.connect(MONGO_URL).then(function () {
    console.log('connect successfully!');
}).catch(function (err) {
    console.log(`problem with db, `, err);
});

app.disable('x-powered-by');
app.use(cors());


//used for post method
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//router
app.use('/movie', movieRouter);
app.use('/user', userRouter);

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

