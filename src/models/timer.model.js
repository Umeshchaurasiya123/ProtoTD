const mongoose = require('mongoose');

const TimerSchema = new mongoose.Schema({

    startDate: {
        type: Date,
        required: true,
        default: Date.now
    },

    startTime: {
        type: String,
        required: true,
        trim: true
    },

    Repete:{
        type: Boolean,
        default: false
    },

    todoBelong: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo',
        required: true
    },

},{ timestamps: true });    


const Timer = mongoose.model('Timer', TimerSchema);
module.exports = Timer;



