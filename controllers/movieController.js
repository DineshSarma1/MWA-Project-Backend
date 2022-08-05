const mongoose = require('mongoose');
const Movie = require('../model/movie.js');
const jwt = require("jsonwebtoken");

//adding single user
const addMovie = async (req, res, next) => {

    const movie = await Movie.create(req.body);

    if (movie === null) {
        res.send({ "error": "Unable to add a movie!" });
    } else {
        res.send({ 'data': movie });
    }

};

module.exports = { addMovie }