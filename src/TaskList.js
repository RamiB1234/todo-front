import React from 'react';
import Task from './Task'; // Import the Task component (to be implemented next)

const TaskList = ({ tasks, onToggle }) => {
    return (
        <div className="task-list">
            {tasks.map((task) => (
                <Task 
                    key={task.id} 
                    task={task} 
                    onToggle={onToggle} 
                />
            ))}
        </div>
    );
};

export default TaskList;
