const express = require('express');
const movieController = require('../controllers/movieController.js');
const router = express.Router();

//movie
router.post('/', movieController.addMovie);



module.exports = router;