import React from 'react';
import TodoItem from '../../components/todo/TodoItem';

function TodoList({todoList}) {

    const tpl = todoList.map((todo, key) =>{
        return <TodoItem todo={todo} key={key} />
    });

    return (
        <ul>{ tpl }</ul>
    );
}

export default TodoList;
