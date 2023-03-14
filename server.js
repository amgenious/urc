require('dotenv').config()
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
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connected to database')
    })
    .catch((err) => {
        console.log(err)
    })
  



app.use("/", require('./routes/router'))

app.listen(4001, () =>{
    console.log("Started on port http://localhost:4001")
})