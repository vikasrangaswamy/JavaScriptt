const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{type:String,required:true},
    roll:{type:Number,required:true},
    
},{timeStamps:true})

const User = mongoose.model('User', userSchema);

module.exports = User
