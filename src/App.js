
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

  const removeTodo = (event) => {
    console.log(event);


  }

  return (
    <div>
      <Input addTodo={addTodo} />
      <List tasks={tasks} removeTodo={removeTodo}/>
    </div >
  );
}

export default App;
