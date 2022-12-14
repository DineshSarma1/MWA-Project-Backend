const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    authType: String,
    dob: Date,
    interests: [String]
});

module.exports = mongoose.model('User', userSchema);