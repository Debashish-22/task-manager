const mongoose = require('mongoose');

// creating Task schema
const taskSchema = new mongoose.Schema({

    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
    },
    due_date:{
        type:Date,
    }
});

// creating Task Model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;