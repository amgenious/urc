const mongoose = require('mongoose')
const Schema = mongoose.Schema

const executiveSchema = new Schema({
    fullname:{
        type: String,
        // required: true,
    },
    programofstudy: {
        type: String,
        // required: true,
    },
    level: {
        type: String,
        // required: true,
    },
    portfolio:{
        type: String,
        // required: true,
    },
    contact: {
        type: Number,
        // required: true,
    },
    exe_image:{
        type: String,
        // required: true,
     },
    linkedin: {
        type: String,
    }
    
}, {timestamps: true})

const Executive = mongoose.model('Executive', executiveSchema);
module.exports = Executive;