const userModel = require("../model/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const userDB = await userModel.findOne({ email });
  if (userDB == null) {
    res.json({
      payload: null,
      message: `user does not exist`,
      success: false,
    });
  } else {
    var passwordIsValid = bcrypt.compareSync(password, userDB.password);
    console.log(passwordIsValid);
    if (passwordIsValid) {
      // sign a token
      const token = jwt.sign(
        {
          user_id: userDB._id,
          fullname: userDB.name,
          email: userDB.email,
        },
        `SECRET`
      );
      res.status(200).json({
        payload: token,
        message: `user does not exist`,
        success: false,
      });
    }
  }
  res.json({
    payload: null,
    message: `user does not exist`,
    success: false,
  });
};

module.exports = { login };
