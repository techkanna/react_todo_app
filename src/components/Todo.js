import React from 'react';

export const Todo = ({ index, todo, getComplete, remTodo }) => {
  return (
    <div className="todo" id={index}>
      <input type="checkbox" onClick={() => getComplete(index)} />
      <p style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}>
        {todo.text}
      </p>

      <button onClick={() => remTodo(index)}>X</button>
    </div>
  );
};
