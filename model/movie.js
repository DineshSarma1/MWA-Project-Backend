const mongoose = require('mongoose');
ActorModel = require('./actors.js');
RatingModel = require('./feedback.js');

const Actor = mongoose.model('Actor');
const Rating = mongoose.model('Rating');

//create schema
const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    release_date: Date,
    length: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    video: { type: String, required: true },
    director: {
        name: { type: String, required: true },
        born_date: Date,
        born_place: { type: String, required: true },
        contact: { type: String }
    },
    writers: [
        {
            name: { type: String, required: true },
            born_date: Date,
            born_place: { type: String, required: true },
            contact: { type: String }
        }
    ],
    actors: [
        {
            name: { type: String, required: true },
            born_date: Date,
            born_place: { type: String, required: true },
            contact: { type: String }
        }
    ],
    ratings: [
        {
            user_email: { type: String, unique: true, required: true },
            rating_point: { type: Number, required: true }
        }
    ]
});

module.exports = mongoose.model('Movie', movieSchema);