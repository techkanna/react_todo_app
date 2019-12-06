import React, { useState, createContext } from 'react';

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, getTodos] = useState([
    {
      text: 'explore Reactjs hooks',
      isCompleted: false
    },
    {
      text: 'explore Reactjs',
      isCompleted: false
    },
    {
      text: 'explore Reactjs hooks some more',
      isCompleted: false
    },
    {
      text: 'explore Reactjs context',
      isCompleted: false
    }
  ]);

  return (
    <TodoContext.Provider value={[todos, getTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
