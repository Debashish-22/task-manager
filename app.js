const express = require('express');
const path = require('path');
const port = 8000;
// acquiring db and router
const db = require('./config/mongoose');
const router = require('./routes/route.js');

const app = express();

// views and assets path
const viewPath = path.join(__dirname, './views/');
const assetsPath = path.join(__dirname, './assets');

// setting view engine and providing view path to look for views
app.set('view engine', 'ejs');
app.set('views', viewPath);

// telling express to use assestspath to look for static files
app.use(express.static(assetsPath));
// middleware to decode encoded data from browser extended false to prevent deprecation error
app.use(express.urlencoded({extended:false}));
// router containing all routes
app.use(router);

// our server will run on port 8000
app.listen(port, (err)=>{

    if(err){
        console.log("Error!, connecting to server...");
        return;
    }
    console.log(`Server running on port : ${port}`);
});