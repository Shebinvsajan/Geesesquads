import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TasksView from './Component/TasksView'
import TaskForm from './Component/TaskForm'
import SingleTask from './Component/SingleTaskView';
import EditTaskForm from './Component/EditTaskForm';

import './App.css'

function App() {

  return (
    <>
  <BrowserRouter>
        <Routes>
          
        <Route path="/" element={<TasksView />} />
          <Route path="/task" element={<TaskForm />} />
          <Route path="/view/:id" element={<SingleTask />} />
          <Route path="/edit/:id" element={<EditTaskForm />} />
      
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
