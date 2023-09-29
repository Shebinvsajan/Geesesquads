import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function TasksView() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/get') 
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const handleDelete = (taskId) => {
    fetch(`http://localhost:8000/api/delete/${taskId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.status === 200) {
          setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));

          window.alert('Task deleted successfully');
        } else {
          console.error('Error deleting task:', response.statusText);
        }
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };


  return (
    <div>
      <div className="container mt-5">
        <Link to={'task'}>      <button className="btn btn-success"  >Add New User</button></Link>
      </div>

      <div >
        {tasks.map((task, index) => (
          <div key={index} className="card w-100 container d-flex justify-content-center  mt-5">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.task}</p> 
                </div>
                <div className="col-auto">
                  <Link to={`/view/${task._id}`}> 
                    <button className="btn btn-primary m-1">View</button>
                  </Link>
                  <button className="btn btn-primary " onClick={() => handleDelete(task._id)}>Delete</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TasksView;
