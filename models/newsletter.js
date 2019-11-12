const mongoose = require("mongoose");

let newsletterSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: (v) => {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Email format doesn't matched"
        },
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    message: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("newsletterModel", newsletterSchema);

