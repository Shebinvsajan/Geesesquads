const express = require('express');
const router = express.Router();
const Task = require('../Model/taskModel'); 

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks); 
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'An error occurred while fetching tasks.' });
  }
});

module.exports = router;
