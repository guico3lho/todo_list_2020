import "../styles.css"
export const Task = ({ task, removeTodo, index }) => {
    const handleRemove = () => {
        removeTodo(index);
    }

    return (
        <li key={task.id} >

            < span>{task.text}</span>
            <button className="removeButton" onClick={handleRemove} >Remover</button>
        </li>
    )
}