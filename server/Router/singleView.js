const express = require ('express');
const router = express.Router();
const Task = require('../Model/taskModel'); 

router.get('/:id', async (req, res) => {
  try {
    const taskId = req.params.id;

    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.status(200).json(task); 
  } catch (error) {
    console.error('Error fetching task by ID:', error);
    res.status(500).json({ error: 'An error occurred while fetching the task.' });
  }
});

module.exports = router;
