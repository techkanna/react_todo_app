import React from 'react';
import './App.css';
import { TodoList } from './components/TodoList';
import Nav from './components/Nav';
import { TodoProvider } from './components/TodoContext';
import { StatusTodoList } from './components/StatusTodoList';

function App() {
  return (
    <TodoProvider>
      <div className="App">
        <Nav />
        <StatusTodoList />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
