const express = require("express")
const multer = require("multer")
const Executive = require("../models/executives")
const Project = require("../models/project")
const Idea = require("../models/ideas")
const Join = require("../models/join")
const route = express.Router()
const fs = require("fs")
const path = require("path")
require('dotenv').config()
const AWS = require('aws-sdk')




route.get("/", (req,res) => {
    Executive.find()
    .then(data => {
        res.render('index', {title:'URC', Executive:data})
    })
})

route.get("/gallery", (req,res) => {
    res.render('gallery', {title:'URC - Gallery'})
})

route.get("/about", (req,res) => {
    Executive.find()
    .then(data => {
    res.render('about', {title:'URC - About', Executive:data})
    })
})

route.get("/project", (req,res) => {
    Project.find()
    .then(data => {
        res.render('project', {title:'URC - Projects' , Project:data})
    })
})

route.get("/contact", (req,res) => {
    res.render('contact', {title:'URC - Contact'})
})

route.get("/join", (req,res) => {
    res.render('join', {title:'URC - Join'})
})

route.get("/adminadd", (req,res) => {
    res.render('adminadd', {title:'URC ADMIN-ADD'})
})

//how to get the ideas
route.post("/submitidea", async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Ideas cannot be empty!"});
        return
    }
    const data = new Idea({
        name:req.body.name,
        email:req.body.email,
        contact:req.body.contact,
        comments:req.body.comments,
    })

    await Idea.insertMany([data])

    res.redirect('/index')
})

// to delete an idea
route.get('/deleteidea/:id', async (req,res) => {
    const id = req.params.id;
    Idea.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/formsviews")
        }
    })
    .catch(err=>{
        console.log(err)
    })
})


// how to join us code
route.post("/joinus", async (req,res) => {

    if(!req.body){
        res.status(400).send({message:"Ideas cannot be empty!"});
        return
    }
    const data = new Join({
        name:req.body.name,
        email:req.body.email,
        program:req.body.program,
        level:req.body.level,
        contact:req.body.contact,
    })

    await Join.insertMany([data])

    res.send("Your join request has been sent")
})

// to delete a join submit
route.get('/deletejoin/:id', async (req,res) => {
    const id = req.params.id;
    Join.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/formsviews")
        }
    })
    .catch(err=>{
        console.log(err)
    })
})


route.get("/adminviews",  async (req,res) => {
    Executive.find()
    .then(data => {
        Project.find()
        .then(data1 => {
    res.render('adminviews', {title:'URC ADMIN-VIEWS', Executive:data, Project:data1})
})
    }).catch(err => {
        console.log(err)
    })
})

route.get("/formviews", (req,res) => {
    Idea.find()
    .then(data => {
        Join.find()
        .then(data1 => {
            res.render('adminformsview', {title:'URC ADMIN-FORM VIEWS', Idea:data, Join:data1})
        })    
    })
})

//functon to handle image upload
var storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, "./uploads");
    },
    filename:function(req, file, cb){
      cb(null,file.fieldname + "_" + Date.now()+ "_" + file.originalname);
    },
  });
  
  var upload = multer({ storage: storage });

//the insert of image with the executives part
route.post("/addexecutive", upload.single('image'), async (req,res) => {
    
    const executive = new Executive({
        fullname:req.body.fullname,
        programofstudy:req.body.programofstudy,
        level:req.body.level,
        portfolio:req.body.portfolio,
        contact:req.body.contact,
        linkedin:req.body.linkedin,
        image:req.file.filename,
    })
    await Executive.insertMany([executive])
    res.redirect('/adminviews')
})
// to delete an image
route.get('/deleteexecutive/:id', async (req,res) => {
    const id = req.params.id;
    Executive.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/adminviews")
        }
    })
    .catch(err=>{
        console.log(err)
    })
})

//to insert a project
route.post("/addproject", upload.single('image'), async (req,res) => {
 
                const project = new Project({
                    projectname:req.body.projectname,
                    dateofcompletion:req.body.dateofcompletion,
                    description:req.body.description,
                    image:req.file.filename,
                });
                await Project.insertMany([project])
                res.redirect('/adminviews')
})

// to delete an project
route.get('/deleteproject/:id', async (req,res) => {
    const id = req.params.id;
    Project.findByIdAndDelete(id)
    .then(data => {
        if(!data){
            res.status(404).console.log("cannot delete")
        }else{
            res.redirect("/adminviews")
        }
    })
    .catch(err=>{
        console.log(err)
    })
})

module.exports = route;