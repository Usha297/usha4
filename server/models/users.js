const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    userName:String, 
    userPassword:String, 
    userEmail:String, 
    userPhoneno:String,
    quote: {type: String, default: 'you have no quote'}
})

const User = mongoose.model('User', UserSchema)

module.exports = User

