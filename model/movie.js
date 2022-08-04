const mongoose = require('mongoose');
ActorModel = require('./actors.js');
RatingModel = require('./feedback.js');

const Actor = mongoose.model('Actor');
const Rating = mongoose.model('Rating');

//create schema
const movieSchema = new mongoose.Schema({
    title: String,
    release_date: Date,
    length: String,
    description: String,
    director: Actor,
    writers: [
        Actor
    ],
    actors: [
        Actor
    ],
    ratings: [
        Rating
    ]
});

module.exports = mongoose.model('Movie', movieSchema);