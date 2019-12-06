import React, { useContext } from 'react';
import { TodoContext } from './TodoContext';

export const StatusTodoList = () => {
  const [todos] = useContext(TodoContext);
  const comTodos = todos.filter(todo => todo.isCompleted);
  const notComTodos = todos.filter(todo => !todo.isCompleted);
  const statusStyles = {
    holeStyle: {
      backgroundColor: 'rgba(25, 203, 216, 0.923)',
      padding: '1rem 0rem'
    },
    ul: {
      display: 'flex',
      justifyContent: 'space-around',
      listStyle: 'none',
      padding: '0',
      margin: '0'
    },
    h3: {
      color: '#555',
      backgroundColor: '#FFD4D4',
      padding: '0.5rem 2rem',
      borderRadius: '1rem'
    }
  };
  return (
    <div className="status-todo-list" style={statusStyles.holeStyle}>
      <ul style={statusStyles.ul}>
        <li>
          <h3 style={statusStyles.h3}>No Of Todos : {todos.length}</h3>
        </li>
        <li>
          <h3 style={statusStyles.h3}>
            No Of Todos Completed : {comTodos.length}
          </h3>
        </li>
        <li>
          <h3 style={statusStyles.h3}>
            No Of Todos Not Completed : {notComTodos.length}
          </h3>
        </li>
      </ul>
    </div>
  );
};
