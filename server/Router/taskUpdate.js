const express = require('express');
const router = express.Router();
const Task = require('../Model/taskModel');

router.put('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;
        const { title, task } = req.body;

        const taskToUpdate = await Task.findById(taskId);

        if (!taskToUpdate) {
            return res.status(404).json({ error: 'Task not found' });
        }

        taskToUpdate.title = title;
        taskToUpdate.task = task;

        await taskToUpdate.save();

        res.json(taskToUpdate);
    } catch (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ error: 'An error occurred while updating the task.' });
    }
});

module.exports = router;
