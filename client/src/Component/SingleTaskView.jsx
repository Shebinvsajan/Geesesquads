import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function SingleTaskView() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

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

  return (
    <div className="text-center">
      {task ? (
        <div className="card mt-5 mx-auto" style={{ width: '18rem' }}>
          <div className="card-body">
            <h2 className="card-title">{task.title}</h2>
            <p className="card-text">{task.task}</p>
            <Link to={`/edit/${id}`} className="btn btn-primary">
              Edit
            </Link>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SingleTaskView;
