const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./db')

const createTask = require('./Router/TaskRoute')
const getTask = require('./Router/getTask')
const single = require('./Router/singleView')
const update = require('./Router/taskUpdate')
const taskDelete = require('./Router/deleteTask')

require('dotenv').config();

const port = process.env.PORT || 8000; 



app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.use('/api/tasks', createTask);
app.use('/api/get', getTask);
app.use('/api/tasks', single);
app.use('/api/update', update);
app.use('/api/delete', taskDelete);




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
