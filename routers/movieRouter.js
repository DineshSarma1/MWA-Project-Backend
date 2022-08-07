const express = require('express');
const movieController = require('../controllers/movieController.js');
const validateToken = require('../validators/validateToken.js');
const router = express.Router();

//movie
router.post('/', validateToken.checkToken, movieController.addMovie);
router.get('/', movieController.getMovies);
router.put('/rating/:movie_id', validateToken.checkToken, movieController.setRating);
router.get('/filter/:movie_type', validateToken.checkToken, movieController.filterMovie);



module.exports = router;