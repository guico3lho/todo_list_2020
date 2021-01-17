export const Task = ({task}) => {
    return (
        <li key={task.id} >

            < span>{task.text}</span>
            <button key={task.id} style={{ height: "2vh", verticalAlign: "middle", alignSelf: "center", paddingBottom: "3vh" }}>Remover</button>
        </li>
    )
}