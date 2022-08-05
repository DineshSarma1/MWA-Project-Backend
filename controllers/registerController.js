const mongoose = require('mongoose');
const User = require('../model/User.js');
const jwt = require("jsonwebtoken");

//adding single user
const createUser = async (req, res, next) => {

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        authType: req.body.authType,
        dob: req.body.dob,
        interests: req.body.interests
    });

    if (user === null) {
        res.send({ "error": "Unable to create User!" });
    } else {
        // sign a token
        const token = jwt.sign({
            user_id: user._id,
            fullname: user.name,
            email: user.email
        }, `SECRET`);

        console.log({ 'token': token, 'data': user });
        res.send({ 'token': token, 'data': user });
    }

};

module.exports = { createUser }