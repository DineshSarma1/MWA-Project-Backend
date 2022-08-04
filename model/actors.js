const mongoose = require('mongoose');

const actorSchema = new mongoose.Schema(
    {
        name: String,
        born_date: Date,
        born_place: String,
        contact: String
    }
);

module.exports = mongoose.model('Actor', actorSchema);