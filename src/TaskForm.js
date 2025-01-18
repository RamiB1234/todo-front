import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        if (description.trim() !== '') {
            onAdd(description); // Call the onAdd function with the task description
            setDescription(''); // Clear the input field
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex align-items-center mb-4">
            {/* Text Input */}
            <input
                type="text"
                className="form-control me-2"
                placeholder="Enter a new task"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            {/* Add Button */}
            <button type="submit" className="btn btn-primary">
                Add
            </button>
        </form>
    );
};

export default TaskForm;
