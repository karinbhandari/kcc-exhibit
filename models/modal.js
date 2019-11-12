const mongoose = require("mongoose");

let modalSchema = new mongoose.Schema({
    unique: {
        type: String,
        required: false,
        default: "modal_001"
    },
    thumb: {
        type: String,
        required: true
    },
    showModal: {
        type: Boolean
    }
});

module.exports = mongoose.model("modalModel", modalSchema);