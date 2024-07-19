import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const toggleComplete = () => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  return (
    <li className="todo-item">
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}: {todo.description}
      </span>
      <div className="buttons">
        <button className="complete-btn" onClick={toggleComplete}>
          {todo.completed ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
