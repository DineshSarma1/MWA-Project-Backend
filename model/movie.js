const mongoose = require("mongoose");
ActorModel = require("./actors.js");
RatingModel = require("./feedback.js");

const Actor = mongoose.model("Actor");
const Rating = mongoose.model("Rating");

//create schema
const movieSchema = new mongoose.Schema({
  title: String,
  release_date: Date,
  length: String,
  description: String,
  image: String,
  director: {
    name: String,
    born_date: Date,
    born_place: String,
    contact: String,
  },
  writers: [
    {
      name: String,
      born_date: Date,
      born_place: String,
      contact: String,
    },
  ],
  actors: [
    {
      name: String,
      born_date: Date,
      born_place: String,
      contact: String,
    },
  ],
  ratings: [
    {
      user_email: String,
      rating_point: String,
    },
  ],
});

module.exports = mongoose.model("Movie", movieSchema);
