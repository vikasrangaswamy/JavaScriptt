const express = require("express")
const usersRouter= require("./routes/users.route.js")
const app = express()


app.use(express.json())
app.use("/users",usersRouter)


app.listen(3000, ()=>{
    console.log("server started")
})