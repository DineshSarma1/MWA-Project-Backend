const userModel = require('../model/User.js');
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
    const { email, password } = req.body;
    const userDB = await userModel.findOne({ email });

    if (userDB.password === password) {
        // sign a token
        const token = jwt.sign({
            user_id: userDB._id,
            fullname: userDB.name,
            email: userDB.email
        }, `SECRET`);
        res.status(200).json({ token })
    }
    next({ error: `user does not exist` });

};

module.exports = { login }