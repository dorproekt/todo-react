import React from 'react';

function TodoItem({todo}, key) {
    return (
        <li key={key}>{ todo.title }</li>
    );
}

export default TodoItem;