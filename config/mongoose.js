// Initializing mongodb using mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo_manager');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to Database!"));

db.once('open', ()=>{

    console.log("Connected to Database successfully!");
});