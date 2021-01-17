
import {Task} from "./Task"
export const List = ({ tasks ,removeTodo}) => {

    const handleRemove = (event ) => {
        // console.log(event.target.getAttribute("reactFiber$5qdat6zojqv"))
        
    }
    return (
        <ul>
            {/* TODO: Remove task quando concluido */}
            {
                
                tasks.map(task => (
                    //Função map funciona apenas com Arrays!
                    <Task task={task}/>
                    
                ))}

        </ul>
    )
}