
import { useState } from "react";
import { Input } from "./components/Input"
import { List } from "./components/List"
function App() {

  const [tasks, setTasks] = useState([]);

  const addTodo = text => {
    //Lida com a criação do componente Task (id, text, done, ..., etc)
    const newTodo = {id: tasks.length, text: text, done: false}
    setTasks([...tasks, newTodo]);
  }

  const checkTodo = event => {
    
    if(event.target.checked){
      return true;
      
    }else {
      return false;
    }
    // const newTodo = {...newTodo, done: event.target.checked}
  }

  const removeTodo = (index) => {
    
    const beforeArray = tasks.slice(0, index);
    const afterArray = tasks.slice(index + 1);

    setTasks([...beforeArray, ...afterArray]);
  }

  return (
    <div>
      <Input addTodo={addTodo} />
      <List tasks={tasks} removeTodo={removeTodo} checkTodo={checkTodo}/>
    </div >
  );
}

export default App;
