const userModel = require("../model/User.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const userDB = await userModel.findOne({ email });
    var passwordIsValid = bcrypt.compareSync(password, userDB.password);
    if (passwordIsValid) {
      const token = jwt.sign(
        {
          user_id: userDB._id,
          fullname: userDB.name,
          email: userDB.email,
        },
        `SECRET`
      );
      res
        .status(200)
        .json({ payload: token, message: "Login Success", success: true });
    }
    res.json({
      payload: token,
      message: `user does not exist`,
      success: false,
    });
  } catch (err) {
    res.json({ payload: token, message: `failed to login!`, success: false });
  }
};

module.exports = { login };
