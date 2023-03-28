const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    projectname:{
        type:String,
        required: true
    },
    dateofcompletion: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    imageName:{
        type:String,
        required: true
    },
    image:{
        type:String,
        required:true
     }
})

const Project = mongoose.model('Project', projectSchema);
module.exports = Project