const mongoose = require("mongoose");

let gallerySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    galleryNames: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("galleryModel", gallerySchema);