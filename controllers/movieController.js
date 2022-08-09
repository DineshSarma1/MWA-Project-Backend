const mongoose = require("mongoose");
const Movie = require("../model/movie.js");
const jwt = require("jsonwebtoken");
<<<<<<< HEAD
const express = require('express');
const movie = require('../model/movie.js');
const fs = require('fs');
const multer = require('multer');
const util = require("util");
const { uploadFile } = require("./uploadFileController");
const unlinkFile = util.promisify(fs.unlink);
// const AWS = require('aws-sdk');
// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
// });
=======
const express = require("express");
const movie = require("../model/movie.js");
>>>>>>> 864b8a5557562910384b71bd4b92a153e6e00cef

//adding single movie
const addMovie = async (req, res, next) => {

<<<<<<< HEAD
    const movie = await Movie.create(req.body);

    if (movie === null) {
        res.send({ "error": "Unable to add a movie!" });
    } else {
        res.send({ 'data': movie });
    }

=======
  const movie = await Movie.create(req.body);
  if (movie === null) {
    res.send({
      payload: null,
      message: "Unable to add a movie!",
      success: false,
    });
  } else {
    res.send({ payload: movie, message: "Movie Added!", success: true });
  }
>
>>>>>>> 864b8a5557562910384b71bd4b92a153e6e00cef
};

const uploadImage = async (req, res, next) => {

    console.log(req.files);
    //console.log(req.file.path);

    // const imagePath = req.file;
    // const blob = fs.readFileSync(imagePath);

    // const uploadedImage = await s3.upload({
    //     Bucket: process.env.AWS_S3_BUCKET_NAME,
    //     Key: req.files[0].originalFilename,
    //     Body: blob,
    // }).promise();


    // console.log(`image path from aws ${uploadedImage.Location}`);
    // res.send({ 'status': true, 'image_url': uploadedImage.Location })
}

//returns list of movies - no need of token
const getMovies = async (req, res, next) => {
  Movie.find((err, docs) => {
    if (!err) {
      res.send({ payload: docs, message: "Movie Found!", success: true });
    } else {
      res.send({ payload: null, message: "Movie not Found!", success: false });
    }
  });
};

const setRating = async (req, res, next) => {
  // user_email: String,
  // rating_point: String
  const { movie_id } = req.params;
  const { user_email, rating_point } = req.body;

  Movie.findOne({ _id: movie_id }, async (err, movie) => {
    try {
      const oldRating = movie.ratings.filter(
        (rating) => rating.user_email === user_email
      );
      if (oldRating.length === 0) {
        const updateDocument = {
          //$push: {"ratings":{ "user_email": user_email, "rating_point": rating_point }}
          $push: { ratings: req.body },
        };

        await Movie.updateOne({ _id: movie_id }, updateDocument);

        res.send({
          payload: null,
          success: true,
          message: "rating added successfully!",
        });
      } else {
        res.send({
          payload: null,
          success: false,
          message: "You have alread provided the rating",
        });
      }
    } catch (err) {
      console.log(`error while filtering ${err}`);
    }
  });

  //const oldEmail = movie.ratings.filter(rating => rating.user_email === user_email);

  //console.log(`old rating ${oldRating}`);

  // console.log('end');
};

const filterMovie = async (req, res, next) => {
  const { movie_type } = req.params;
  const movies = await Movie.find({ movie_type: movie_type });
  if (movies.length != 0) {
    res.send({ payload: null, success: true, message: "Movie Found!" });
  } else {
    res.send({
      payload: movies,
      success: false,
      message: "unable to find movie!",
    });
  }

};

<<<<<<< HEAD
module.exports = { addMovie, getMovies, setRating, filterMovie, uploadImage }
=======
module.exports = { addMovie, getMovies, setRating, filterMovie };
>>>>>>> 864b8a5557562910384b71bd4b92a153e6e00cef
