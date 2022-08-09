const mongoose = require("mongoose");
const Movie = require("../model/movie.js");
const jwt = require("jsonwebtoken");
const express = require("express");
const movie = require("../model/movie.js");

//adding single movie
const addMovie = async (req, res, next) => {
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
};

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

module.exports = { addMovie, getMovies, setRating, filterMovie };
