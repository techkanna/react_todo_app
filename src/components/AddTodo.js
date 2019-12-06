import React, { useState } from 'react';

export const AddTodo = ({ updateTodoList }) => {
  const [newTodo, getNewTodo] = useState('');
  const getTodo = e => {
    getNewTodo(e.target.value);
  };
  return (
    <form
      className="form"
      onSubmit={e => updateTodoList(e, getNewTodo, newTodo)}
    >
      <input
        type="text"
        placeholder="Enter new Todo"
        value={newTodo}
        onChange={getTodo}
      />
    </form>
  );
};
