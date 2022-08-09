const mongoose = require("mongoose");
const User = require("../model/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

//adding single user
const createUser = async (req, res, next) => {
  console.log("Is here");
  debugger;
  try {
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
      return res.json({
        payload: null,
        message: `User already exist!`,
        success: false,
      });
    } else {
      return res.json({
        payload: null,
        message: `User Created success!`,
        success: true,
      });
    }
  } catch (err) {
    return res.json({
      payload: null,
      message: `Unable to create User!`,
      success: false,
    });
  }
};

module.exports = { createUser };
