const mongoose = require("mongoose");

const ClientSchema = mongoose.Schema(({
    name:{
        type: String,
        required: true,
        lowercase: true,
        maxLength: 100,
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        maxLength: 100,
        unique: true
    },
    subject:{
        type: String,
        required: true,
        maxLength: 200,
    },
    textarea:{
        type: String,
        maxLength: 200,
    }

}))

module.exports = mongoose.model("Cliente", ClientSchema);