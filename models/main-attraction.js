const mongoose = require("mongoose");

let mainAttractionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    projectNamesList: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("mainAttractionModel", mainAttractionSchema);

