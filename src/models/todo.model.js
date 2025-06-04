const mongoose= require("mongoose");


const TodoSchema=new mongoose.Schema({

    title:{
        type:String,
        required:true,
        trim:true
    },

    description:{
        type:String,
        default:"",
        trim:true
    },

    status:{
        type:Boolean,
        default:false
    },

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },

     
},{timestamps:true});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
// default export






