const mongoose = require("mongoose");

let ourSponserSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    thumb: {
        type: String,
        required: true
    },
    websiteLink: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("ourSponserModel", ourSponserSchema);

