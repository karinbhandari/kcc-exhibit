const mongoose = require("mongoose");

let landingPageSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    startingEnglishDate: {
        type: Date,
        required: true
    },
    endingEnglishDate: {
        type: Date,
        required: true
    },
    startingEnglishTime: {
        type: Date,
        required: true
    },
    endingEnglishTime:{
        type: Date,
        required: true
    }
});

module.exports = mongoose.model("landingPageModel", landingPageSchema);