const express = require("express")
const app = express()
// console.log(app)
// handling requests 

app.get("/", (req , res)=>{
    console.log("Request received on /")
    res.send("hello from server")
})

app.get("/users", (req, res)=>{
    req.json({"name":"somename"})
})

app.listen(3000)