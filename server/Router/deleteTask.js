const express = require('express');
const router = express.Router();
const Task = require('../Model/taskModel');

router.delete('/:id', async (req, res) => {
    try {
        const taskId = req.params.id;

        const deletedTask = await Task.findByIdAndRemove(taskId);

        if (!deletedTask) {
            return res.status(404).json({ error: 'Task not found' });
        }

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ error: 'An error occurred while deleting the task.' });
    }
});

module.exports = router;
