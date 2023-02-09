const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ideaSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email: {
        type:String,
        required:true
    },
    contact: {
        type:Number,
        required:true
    },
    comments:{
        type:String,
        required:true
    }
})

const Idea = mongoose.model('Idea', ideaSchema);
module.exports = Idea