const express = require('express');
const userController = require('../controllers/userController.js');
const loginController = require('../controllers/loginController.js');
const registerController = require('../controllers/registerController.js');

const router = express.Router();


//user
router.post('/register', registerController.createUser);
router.post('/login', loginController.login)

// router.get('/:name', studentController.getStudent);
// router.put('/', studentValidator.validateData, studentController.updateStudent);
// router.delete('/:name', studentController.deleteStudent);
//router.post('/picture', studentController.uploadStudentImage);

module.exports = router;