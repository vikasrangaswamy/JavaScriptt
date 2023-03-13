let User = require('../models/users.models')
const Router = require('express').Router()


Router.route("/").get((req,res)=>{
    User.find()
    .then((user)=>res.json(user))
    .catch((error)=>res.send(error))
})

Router.route("/add").post((req,res)=>{
    const user=req.body
    const newUser= new User(user)
    newUser.save()
    .then(()=>res.json("user added"))
    console.log(user)
})

module.exports= Router
