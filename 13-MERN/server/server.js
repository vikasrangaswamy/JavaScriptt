
const express = require('express')
const cors = require('cors')
const dotevn = require('dotenv')
const mongoose = require('mongoose')
const userRouter = require("./api/user.routes")
dotevn.config()

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect(process.env.URI)  
const connection = mongoose.connection;
connection.once('open' , ()=>{
    console.log("mongoDB connection established")
})

app.listen(process.env.PORT,()=>{console.log(`server running on port ${process.env.PORT}`)})
  


app.use("/api/v1/users",userRouter)
app.use("*" , (req , res)=>{res.sendStatus(400).json({message:"page not found"})})






