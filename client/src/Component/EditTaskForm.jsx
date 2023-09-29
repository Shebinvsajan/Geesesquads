import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditTaskForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    task: '',
  });
  
  const [message, setMessage] = useState(null); 

  useEffect(() => {
    fetch(`http://localhost:8000/api/tasks/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTask(data);
      })
      .catch((error) => {
        console.error('Error fetching task:', error);
      });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({
      ...prevTask,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8000/api/update/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    })
      .then((response) => {
        if (response.status === 200) {
          setMessage({ type: 'success', text: 'Task updated successfully' });
          navigate(`/view/${id}`);
        } else {
          setMessage({ type: 'error', text: 'Error updating task' });
          console.error('Error updating task:', response.statusText);
        }
      })
      .catch((error) => {
        setMessage({ type: 'error', text: 'Error updating task' });
        console.error('Error updating task:', error);
      });
  };

  return (
    <div className="container mt-5">
      <h2>Edit Task</h2>
      {message && (
        <div
          className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-danger'}`}
        >
          {message.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={task.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="task">Task</label>
          <textarea
            className="form-control"
            id="task"
            name="task"
            value={task.task}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default EditTaskForm;
