const Users = require("../../data/user.json")
const newUser=require("../model/user.model.js")

const getUsers = (req , res)=>{

    res.status(200).json({
        message:"fetched users ",
        data:[...Users]
    })

}


const getUserById= (req, res)=>{
    const id = req.params.id
    const user = Users.find((user)=> user.id ===id)
    if(user){
        return res.status(200).json({
            message:"successfull",
            data:{...user}     
        })
    }
    else{
        return res.status(404).json({
            message:"not found "
        })
    }

}

const createUser = (req , res) =>{
    res.send("Your message is received")
    // const newUser=new User()
    console.log(req.body)
    const newUser=req.body
    Users.push(newUser)
}

module.exports={getUsers , getUserById , createUser}