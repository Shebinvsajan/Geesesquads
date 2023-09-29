import React from 'react';

function SingTask({ task }) { // Receive task as a prop
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card border-primary mt-4">
            <div className="card-header bg-primary text-white">
              <h5 className="card-title">{task.title}</h5>
            </div>
            <div className="card-body">
              <p className="card-text">{task.task}</p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingTask;
