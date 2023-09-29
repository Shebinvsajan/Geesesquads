import React, { useState } from 'react';

const TaskForm = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setTaskDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: taskTitle,
          task: taskDescription,
        }),
      });

      if (response.ok) {
        // Reset the form fields if the task was successfully saved
        setTaskTitle('');
        setTaskDescription('');
        setSuccessMessage('Task saved successfully!');
        setErrorMessage('');
      } else {
        setSuccessMessage('');
        setErrorMessage('Error saving task: ' + response.statusText);
      }
    } catch (error) {
      console.error('Error saving task:', error);
      setSuccessMessage('');
      setErrorMessage('An error occurred while saving the task.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Task</h2>
      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="taskTitle" className="form-label">
            Task Title
          </label>
          <input
            type="text"
            className="form-control"
            id="taskTitle"
            value={taskTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="taskDescription" className="form-label">
            Task Description
          </label>
          <textarea
            className="form-control"
            id="taskDescription"
            rows="3"
            value={taskDescription}
            onChange={handleDescriptionChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
