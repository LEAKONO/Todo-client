import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import './App.css'; 
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://todos-wrbg.onrender.com/todos')
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = (todo) => {
    fetch('https://todos-wrbg.onrender.com/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    })
      .then(response => response.json())
      .then(newTodo => setTodos([...todos, newTodo]));
  };

  const updateTodo = (id, updatedTodo) => {
    fetch(`https://todos-wrbg.onrender.com/todos/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo),
    })
      .then(response => response.json())
      .then(() => setTodos(todos.map(todo => (todo.id === id ? updatedTodo : todo))));
  };

  const deleteTodo = (id) => {
    fetch(`https://todos-wrbg.onrender.com/todos/${id}`, { method: 'DELETE' })
      .then(() => setTodos(todos.filter(todo => todo.id !== id)));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
