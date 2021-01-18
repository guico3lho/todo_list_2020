
import {Task} from "./Task"
export const List = ({ tasks ,removeTodo, checkTodo}) => {

    const handleRemove = (event ) => {
        // console.log(event.target.getAttribute("reactFiber$5qdat6zojqv"))
        
    }
    return (
        <ul>
            {/* TODO: Remove task quando concluido */}
            {
                
                tasks.map((task, index) => (
                    //Função map funciona apenas com Arrays!
                    <Task key={task.id} index={index} task={task} removeTodo={removeTodo} checkTodo={checkTodo}/>
                    
                ))}

        </ul>
    )
}