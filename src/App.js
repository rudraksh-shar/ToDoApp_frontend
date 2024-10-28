// src/App.js
import React, { useState, useEffect } from 'react';
import { getTodos, createTodo, updateTodo, deleteTodo } from './api';
import './styles.css'; // Import the CSS file here

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const response = await getTodos();
    setTodos(response.data);
  };

  const handleAddTodo = async () => {
    if (newTodo.trim()) {
      await createTodo(newTodo);
      setNewTodo('');
      loadTodos();
    }
  };

  const handleToggleComplete = async (id, completed) => {
    await updateTodo(id, !completed);
    loadTodos();
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    loadTodos();
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New to-do"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              className={`todo-text ${todo.completed ? 'completed' : ''}`}
              onClick={() => handleToggleComplete(todo.id, todo.completed)}
            >
              {todo.title}
            </span>
            <button className="delete-button" onClick={() => handleDelete(todo.id)}>✕</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
