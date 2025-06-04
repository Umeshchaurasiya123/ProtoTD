const mongoose= require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");




const UserSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
        lowercase:true
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
    },

    avatar:{
        type:String,
        required:true,
        trim:true
    },

    coverImage:{
        type:String // clouldinary url

    },
    phonNo:{
        type:Number,
        required:true,
        unique:true,
        trim:true
    },

    password:{
        type:String,
        required:[true, "Password is required"],
        
    },
    
    refreshToken:{
        type:String,
        default:""
    },

},{timestamps:true});

UserSchema.pre("save", async function (next) {
    if (!this.isModified("password")){return next();}
    
    this.password = await bcrypt.hash(this.password, 10);
    next();

})

UserSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.generateAccessToken = function () {

    const token = jwt.sign(
        { _id: this._id,
         username: this.username,
         email: this.email,
        fullName: this.fullName,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { 
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    );
    return token;
};


UserSchema.methods.generateRefreshToken = function () {
    const token = jwt.sign(
        { 
            _id: this._id 
        },
        process.env.REFRESH_TOKEN_SECRET,
        { 
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    );
    return token;
}

const User= mongoose.model("User", UserSchema);
module.exports = User;  
// default export
