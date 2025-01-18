import React from 'react';

const Task = ({ task, onToggle }) => {
    return (
        <div className="d-flex align-items-center mb-3">
            {/* Task Description */}
            <span 
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                className="flex-grow-1"
            >
                {task.description}
            </span>

            {/* Checkbox for Completed */}
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => onToggle(task.id, !task.completed)} 
                className="ms-2"
            />
        </div>
    );
};

export default Task;
