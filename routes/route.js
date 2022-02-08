const express = require('express');

// we are using express Router here
const router = express.Router();

// controller will provide logics to handle following routes
const controller = require('../controllers/controller');

// home page
router.get('/', controller.home);

// creation of task
router.post('/create-task', controller.createTask);

// sorting task which will take category as a string to sort
router.get('/sort-task/:category', controller.sortTask);

// deletion of tasks
router.post('/delete-tasks', controller.deleteTask);

// for any else route error will be shown
router.get('*', (req,res) =>{

   res.send("Page doesn't Exist");
});

module.exports = router;