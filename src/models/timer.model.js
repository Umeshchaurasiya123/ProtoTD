const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({

    dateAndTime: {
        type: Date,
        required: true,
        default: Date.now
    },

    Repete:{
        type: Boolean,
        default: false
    },

    duration: {
        type: Number,
        default: 0 // Duration in minutes
    },

    todoBelong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    },

},{ timestamps: true });    


const Timer = mongoose.model('Timer', TimerSchema);
module.exports = Timer;



