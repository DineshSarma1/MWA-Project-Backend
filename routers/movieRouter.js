const express = require('express');
const movieController = require('../controllers/movieController.js');
const validateToken = require('../validators/validateToken.js');
const uploadFileController = require('../controllers/uploadFileController')
const router = express.Router();
const { upload } = require('../controllers/uploadFileController.js');
const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
//const multer = require('multer');


//movie
router.post('/', validateToken.checkToken, movieController.addMovie);
//router.post('/uploadImage', upload.array(), movieController.uploadImage);
//router.post('/uploadImage', upload.single('image'));
router.get('/', movieController.getMovies);
router.put('/rating/:movie_id', validateToken.checkToken, movieController.setRating);
router.get('/filter/:movie_type', validateToken.checkToken, movieController.filterMovie);



module.exports = router;