const mongoose = require("mongoose");
const express = require("express");
const { json } = require("express");
const User = require("../model/User.js");

const createUser = async (req, res, next) => {};

//returns list of movies - no need of token
const getUser = async (req, res, next) => {
  User.find(
    {
      authType: "User",
    },
    {
      name: 1,
      email: 1,
      authType: 1,
      interests: 1,
    },
    (err, docs) => {
      if (!err) {
        res.send({ payload: docs, message: "User Found!", success: true });
      } else {
        res.send({ payload: null, message: "User not Found!", success: false });
      }
    }
  );
};

module.exports = { createUser, getUser };
