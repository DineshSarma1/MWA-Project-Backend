const jwt = require('jsonwebtoken');

const checkToken = async (req, res, next) => {
    if (req.headers['authorization'] != null) {
        const token = req.headers['authorization'].split(' ')[1];
        if (!token) {
            res.json({ auth: false, message: 'No token provided.' })
            return next({ auth: false, message: 'No token provided.' });
        }
        jwt.verify(token, "SECRET", function (err, decoded) {
            if (err) {
                res.json({ auth: false, message: 'Failed to authenticate token.' });
                return next({ auth: false, message: 'Failed to authenticate token.' });
            }
            req.user = decoded;
            return next();
        });

    } else {
        res.json({ 'message': 'No token provided.' });
        return next({ auth: false, message: 'No token provided.' });
    }
}

module.exports = { checkToken };