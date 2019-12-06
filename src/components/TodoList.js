import React, { useContext } from 'react';
import { Todo } from './Todo';
import { AddTodo } from './AddTodo';
import { TodoContext } from './TodoContext';
export const TodoList = () => {
  const [todos, getTodos] = useContext(TodoContext);
  const getCompleteTodo = index => {
    const newArr = [...todos];
    newArr[index].isCompleted = !newArr[index].isCompleted;
    getTodos(newArr);
  };

  const removeTodo = index => {
    const temArr = [...todos];
    temArr.splice(index, 1);
    getTodos(temArr);
  };

  const getTodosfhome = (e, getNewTodo, newTodo) => {
    e.preventDefault();

    if (newTodo === '') return;
    getTodos(prevTodos => {
      return [...prevTodos, { text: newTodo, isCompleted: false }];
    });
    getNewTodo('');
  };

  return (
    <div className="todoList">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          getComplete={getCompleteTodo}
          remTodo={removeTodo}
        />
      ))}
      <AddTodo updateTodoList={getTodosfhome} />
    </div>
  );
};
