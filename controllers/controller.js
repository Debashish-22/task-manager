// acquiring model to perform some action and display data
const Task = require('../models/task');

// Home page will only display tasks available in the database
const home = (req, res) =>{

    Task.find({}, (err, task) =>{
        
        if(err){
            console.log('Error in fetching tasks!');
            return;
        };
        return res.render('home', {task});
    });
};

// card creation will create task and redirect again to home page which will further display our created tasks
const createTask = (req, res) =>{
  
    Task.create(req.body, (err, task) =>{

        if(err){
            console.log('Error in creating Task!');
            return;
        };
    });
    return res.redirect('/');
};

// sort task will fetch params(category) from req and sort it and again render home page with soretd tasks
const sortTask = (req, res) =>{

    let category = req.params.category;

    // if 'all' is selected then redirect back to home page which all show all available tasks
    if(category === 'all'){

        return res.redirect('/');
    };

    // finding tasks with user category and database key category
    Task.find({category : category}, (err, task)=>{
        if(err){
            console.log('error in finding task');
            return;
        };
  
        return res.render('home', {task});
    });
};

// delete task will only take checked input IDs and using deleteMany method to delete single or multiple tasks.
const deleteTask = (req, res) =>{

    const taskId = req.body.checkbox;

    Task.deleteMany({_id : taskId}, (err,task)=>{

        if(err){
            console.log("Error in deleting task!")
        };
    });
    // after deleting redirecting to home page
    return res.redirect('/');
};

// exporting all controller action to be used in specific route's
module.exports = { home, createTask, sortTask, deleteTask }