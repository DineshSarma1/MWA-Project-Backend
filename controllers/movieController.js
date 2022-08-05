const mongoose = require('mongoose');
const Movie = require('../model/movie.js');
const jwt = require("jsonwebtoken");

//adding single movie
const addMovie = async (req, res, next) => {

    const movie = await Movie.create(req.body);

    if (movie === null) {
        res.send({ "error": "Unable to add a movie!" });
    } else {
        res.send({ 'data': movie });
    }

};

//returns list of movies - no need of token
const getMovies = async (req, res, next) => {
    Movie.find((err, docs) => {
        if (!err) {
            console.log(docs);
            res.send(docs);
        } else {
            res.send({ 'error': err });
        }
    });
}

module.exports = { addMovie, getMovies }