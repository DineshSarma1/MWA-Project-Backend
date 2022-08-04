const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    user_email: String,
    rating_point: String
});

module.exports = mongoose.model('Rating', ratingSchema);