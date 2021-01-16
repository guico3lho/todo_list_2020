
export const List = ({ tasks }) => {
    return (

        <ul>
            {/* TODO: Remove task quando concluido */}
            {
                console.log(tasks),
                tasks.map(task => (
                    //Função map funciona apenas com Arrays!
                    <div key={task.id} style={{ display: "flex" }}>

                        < li>{task.text}</li>
                    </div>
                ))}

        </ul>
    )
}