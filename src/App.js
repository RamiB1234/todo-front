import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Learn Django', completed: false },
    { id: 2, description: 'Build a To-Do App', completed: true },
  ]);

  const toggleCompleted = (id, completed) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed } : task
    ));
  };

  const addTask = (description) => {
    const newTask = {
        id: tasks.length + 1, // Generate a simple ID for now
        description,
        completed: false,
    };
    setTasks([...tasks, newTask]); // Add the new task to the state
};

  return (
    <div className="container">
      <h1 className="text-center my-4">To-Do List</h1>
      <TaskList tasks={tasks} onToggle={toggleCompleted} />
      <TaskForm onAdd={addTask} />
    </div>
  );
}

export default App;
