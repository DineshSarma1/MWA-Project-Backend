const express = require('express');
const movieController = require('../controllers/movieController.js');
const validateToken = require('../validators/validateToken.js');
const router = express.Router();

//movie
router.post('/', validateToken.checkToken, movieController.addMovie);



module.exports = router;