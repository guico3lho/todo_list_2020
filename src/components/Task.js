
import { useState } from "react";

import "../styles.css"
export const Task = ({ task, removeTodo, index, checkTodo }) => {

    const [checked, setChecked] = useState(false);

    const handleRemove = () => {
        removeTodo(index);
    }

    const handleChange = (event) => {
        setChecked(checkTodo(event))

    }
    return (
        <li key={task.id} >
            <input type="checkbox" onChange={handleChange} />
            < span style={{ textDecorationLine: checked ? "line-through" : "none" }}>{task.text}</span>
            <button className="removeButton" onClick={handleRemove} >Remover</button>
        </li>
    )
}