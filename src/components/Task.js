
import { useState } from "react";

import "../styles.css"
export const Task = ({ task, removeTodo, index, checkTodo }) => {


    const handleRemove = () => {
        removeTodo(index);
    }

    const handleChange = (event) => {
        checkTodo(index);

    }
    return (
        <li key={task.id} >
            <input type="checkbox" onChange={handleChange} />
            < span style={{ textDecorationLine: task.done ? "line-through" : "none" }}>{task.text}</span>
            <button className="removeButton" onClick={handleRemove} >Remover</button>
        </li>
    )
}