const mongoose = require("mongoose");

let lastYearMemorySchema = new mongoose.Schema({
    id: {
        type: String,
        required: false,
        default: "5dbc34f596611331f8166638"
    },
    galleryNames: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("lastYearMemoryModel", lastYearMemorySchema);

