const mongoose = require('mongoose');
const Movie = require('../model/movie.js');
const jwt = require("jsonwebtoken");
const express = require('express');

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
};

const setRating = async (req, res, next) => {
    // user_email: String,
    // rating_point: String
    const { movie_id } = req.params;
    const { user_email, rating_point } = req.body;

    // const oldRating = await Movie.findOne({ $and: [{ _id: movie_id }, { 'ratings.$.user_email': user_email }] });

    // console.log("old rating " + oldRating);

    // console.log('end');

    const updateDocument = {
        //$push: {"ratings":{ "user_email": user_email, "rating_point": rating_point }}
        $push: { "ratings": req.body }
    }

    await Movie.updateOne({ _id: movie_id }, updateDocument);

    res.send({ 'status': true, 'message': 'rating added successfully!' });

};

const filterMovie = async (req, res, next) => {

    const { movie_type } = req.params;

    const movies = await Movie.find({ 'movie_type': movie_type });

    if (movies.length != 0) {
        res.send({ 'status': true, 'movies': movies });
    } else {
        res.send({ 'status': false, 'message': 'unable to find movie!' });
    }
};

module.exports = { addMovie, getMovies, setRating, filterMovie }