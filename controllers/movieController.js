const mongoose = require("mongoose");
const Movie = require("../model/movie.js");
const jwt = require("jsonwebtoken");

//adding single movie
const addMovie = async (req, res, next) => {
  const movie = await Movie.create(req.body);
  if (movie === null) {
    res.send({
      payload: null,
      message: `Data not saved`,
      success: false,
    });
  } else {
    res.send({
      payload: movie,
      message: `Data saved success`,
      success: true,
    });
  }
};

//returns list of movies - no need of token
const getMovies = async (req, res, next) => {
  Movie.find((err, docs) => {
    if (!err) {
      res.send({
        payload: docs,
        message: `Data Found!`,
        success: true,
      });
    } else {
      res.send({
        payload: null,
        message: `Data not Found!`,
        success: false,
      });
    }
  });
};

//returns list of movies - no need of token
const getMoviesById = async (req, res, next) => {
  let movieId = req.params;
  Movie.find({ _id: movieId }, (err, docs) => {
    if (!err) {
      res.send({
        payload: docs,
        message: `Data Found!`,
        success: true,
      });
    } else {
      res.send({
        payload: null,
        message: `Data not Found!`,
        success: false,
      });
    }
  });
};

module.exports = { addMovie, getMovies, getMoviesById };
