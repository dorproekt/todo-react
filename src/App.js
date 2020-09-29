import React from 'react';
import './App.css';
import TodoList from './components/todo/TodoList';

function App() {
  const todoList = [
    {id:1, title: 'Купить хлеб', completed: false},
    {id:2, title: 'Купить молоко', completed: false},
    {id:3, title: 'Купить колбасу', completed: false},
  ];

  return (
    <div className='wrap'>
      <h1>TodoList</h1>
      <TodoList todoList={todoList} />
    </div>
  );
}

export default App;
