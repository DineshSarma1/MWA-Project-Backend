
const userModel = require('../model/User.js');

const validateRegistration = async (req, res, next) => {

    if (req.body.name == null) {
        res.send({ 'message': `name field can not be empty` });
    } else if (req.body.email == null) {
        res.send({ 'message': `email field can not be empty` });
    } else if (req.body.password == null) {
        res.send({ 'message': `password field can not be empty` });
    } else if (req.body.authType == null) {
        res.send({ 'message': `authentication type field can not be empty` });
    } else if (req.body.authType != 'Admin' && req.body.authType != 'User') {
        res.send({ 'message': `authentication type should be Admin or User` });
    } else if (req.body.dob == null) {
        res.send({ 'message': `Date of Birth field can not be empty` });
    }

    const email = req.body.email;
    const userDB = await userModel.findOne({ email });

    if (userDB === null) {
        return next();
    }
    return next();
    //res.status(200).json({ 'message': `user with email ${email} is already exist!` });
}

const validateLogin = async (req, res, next) => {
    if (req.body.email == null) {
        res.send({ 'message': `email field can not be empty` });
    } else if (req.body.password == null) {
        res.send({ 'message': `password field can not be empty` });
    } else {
        return next();
    }
}

module.exports = { validateRegistration, validateLogin };