const express = require("express");
const movieController = require("../controllers/movieController.js");
const validateToken = require("../validators/validateToken.js");
const router = express.Router();

//movie
router.post("/", validateToken.checkToken, movieController.addMovie);
router.get("/", movieController.getMovies);
router.get("/:id", movieController.getMoviesById);

module.exports = router;
