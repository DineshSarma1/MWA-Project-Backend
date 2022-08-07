const express = require('express');
const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');
const registerValidator = require('../validators/userValidator.js');

const router = express.Router();


//user
router.post('/register', registerValidator.validateRegistration, registerController.createUser);
router.post('/login', registerValidator.validateLogin, loginController.login)


module.exports = router;