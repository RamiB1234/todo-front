import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import API from './api';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
      API.get('tasks/')
          .then((response) => setTasks(response.data))
          .catch((error) => console.error('Error fetching tasks:', error));
  }, []);

  const toggleCompleted = (id, completed) => {
    API.put('tasks/toggle/', { id, completed })
        .then(() =>
            setTasks(tasks.map((task) =>
                task.id === id ? { ...task, completed } : task
            ))
        )
        .catch((error) => console.error('Error updating task:', error));
};


  const addTask = (description) => {
    API.post('tasks/add/', { description })
        .then((response) => setTasks([...tasks, response.data]))
        .catch((error) => console.error('Error adding task:', error));
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
