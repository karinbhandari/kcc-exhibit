const mongoose = require("mongoose");

let whatPeopleSaySchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    quoete: {
        type: String,
        required: true
    },
    facebook: {
        type: String
    },
    instagram: {
        type: String
    },
    twitter: {
        type: String
    }
    
});

module.exports = mongoose.model("whatPeopleSayModel", whatPeopleSaySchema);