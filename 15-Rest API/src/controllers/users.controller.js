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
    const user=new newUser(req.body)
    console.log(req.body)
    Users.push(user)
}
// const userModel = [
//     id,
//     name,
//     profileImage,
//     introduction,
//     profileLink
// ]

const validateUser=(req, res, next)=>{
    // const result = userModel.every(Object.keys(req.body))
    // if(!result){
    //     res.status(400).json({
    //         message:"validation failed"
    //     })
    //     return
    // }
    // next()

}

module.exports={getUsers , getUserById , createUser , validateUser}