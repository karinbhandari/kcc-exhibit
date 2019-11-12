var mongoose = require("mongoose");

loginSchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
        default: "default-id"
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {_id: String});

module.exports = mongoose.model('loginModel', loginSchema);
