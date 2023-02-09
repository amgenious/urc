const mongoose = require('mongoose')
const Schema = mongoose.Schema

const joinSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    program: {
        type:String,
        required:true
    },
    level: {
        type:String,
        required:true
    },
    contact: {
        type:Number,
        required:true
    },
})

const Join = mongoose.model('Join', joinSchema);
module.exports = Join