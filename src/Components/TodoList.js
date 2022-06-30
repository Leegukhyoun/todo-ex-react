import React from 'react';
import './TodoList.css'

const TodoList = ({ todo, onDelete, onToggle }) => {
    return (
        <div id='List1'>
            <span id="ListMessage" className={todo.isDone ? 'on' : null} onClick={() => {onToggle(todo.id)}}>{todo.todotext}</span>
            <button onClick={()=>onDelete(todo.id)} id="ListBtn">X</button>
        </div>
    );
};

export default TodoList;