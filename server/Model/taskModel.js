const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    task: String,
  });
  

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
