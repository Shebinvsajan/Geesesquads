const express = require('express');
const router = express.Router();
const Task = require('../Model/taskModel');

router.post('/', async (req, res) => {
    try {
        const { title, task } = req.body;

        const newTask = new Task({
         
            title,
            task,
        });

        const savedTask = await newTask.save(); 

        res.status(201).json(savedTask); 
    } catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ error: 'An error occurred while creating the task.' });
    }
});


module.exports = router;
