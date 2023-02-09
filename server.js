const express = require("express")
const morgan = require("morgan")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()





app.set('view engine', 'ejs')
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.static('uploads'))
app.use (bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())

// database connection
mongoose.set('strictQuery', true)
const dbURL = "mongodb+srv://amgenious:0123456789@firstnode.tegei7z.mongodb.net/urcbackend?retryWrites=true&w=majority";
mongoose.connect(dbURL)
.then(()=>{
    console.log('database connected')
})
.catch((err) => {
    console.log(err)
})



app.use("/", require('./routes/router'))

app.listen(4001, () =>{
    console.log("Started on port http://localhost:4001")
})