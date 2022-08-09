const mongoose = require("mongoose");
const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//adding single user
const createUser = async (req, res, next) => {
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  const user = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
    authType: req.body.authType,
    dob: req.body.dob,
    interests: req.body.interests,
  });

  if (user === null) {
    res.send({
      payload: null,
      success: false,
      message: "Unable to create User!",
    });
  } else {
    // sign a token
    const token = jwt.sign(
      {
        user_id: user._id,
        fullname: user.name,
        email: user.email,
      },
      `SECRET`
    );
    res.send({
      payload: token,
      success: true,
      message: "User Created!",
    });
  }
};

module.exports = { createUser };
