const mongoose=require('mongoose')

const ContactSchema=mongoose.Schema({
    name:{
        type:'String',
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
})

const ContactModel=new mongoose.model('contact',ContactSchema)
module.exports=ContactModel