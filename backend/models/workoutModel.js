const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true });

// make and export a new model based on this schema
module.exports = mongoose.model('Workout', workoutSchema); // will help create a new collection in the db as well