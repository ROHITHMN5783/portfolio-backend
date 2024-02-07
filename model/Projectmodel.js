const mongoose=require('mongoose')

const ProjectSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    imageurl:{
        type:String,
        required:true
    },
    demolink:{
        type:String,
        required:true
    },
    githublink:{
        type:String,
        required:true
    }
})
const Projectmodel=new mongoose.model('project',ProjectSchema)
module.exports=Projectmodel