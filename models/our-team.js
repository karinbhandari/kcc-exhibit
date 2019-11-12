const mongoose = require("mongoose");

let ourTeamSchema = new mongoose.Schema({
    memberName: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    memberRole: {
        type: String,
        required: true
    },
    memberContact: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ourTeamModel", ourTeamSchema);

