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
      let loginData = {
        token: token,
        user_id: userDB._id,
        fullname: userDB.name,
        email: userDB.email,
      };
      res.json({ payload: loginData, message: "Login Success", success: true });
      return;
    }
    res.json({
      payload: null,
      message: `user does not exist`,
      success: false,
    });
    return;
  } catch (err) {
    res.json({ payload: null, message: `failed to login!`, success: false });
    return;
  }
};

module.exports = { login };
