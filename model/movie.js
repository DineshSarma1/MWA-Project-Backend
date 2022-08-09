const mongoose = require('mongoose');
ActorModel = require('./actors.js');
RatingModel = require('./feedback.js');

const Actor = mongoose.model('Actor');
const Rating = mongoose.model('Rating');

//create schema
const movieSchema = new mongoose.Schema({
    title: { type: String },
    release_date: Date,
    length: { type: String },
    description: { type: String },
    image: { type: String },
    video: { type: String },
    movie_type: [String],
    director: {
        name: { type: String },
        born_date: Date,
        born_place: { type: String },
        contact: { type: String }
    },
    writers: [
        {
            name: { type: String },
            born_date: Date,
            born_place: { type: String },
            contact: { type: String }
        }
    ],
    actors: [
        {
            name: { type: String },
            born_date: Date,
            born_place: { type: String },
            contact: { type: String }
        }
    ],
    ratings: [
        {
            user_email: { type: String },
            rating_point: { type: Number }
        }
    ]
});

module.exports = mongoose.model('Movie', movieSchema);