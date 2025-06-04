const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema({

    imageURL:{
        type: String,
        trim: true
    },

    todo:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    },


},{ timestamps: true });    

const Image = mongoose.model('Image', ImageSchema);
module.exports = Image;
// default export


