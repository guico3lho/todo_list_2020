
import { useState } from "react";
import Styles from "./styles.css"
function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);

    // FIXME: Pq são diferentes seus resultados?
    // console.log(task);
    // console.log(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, {
      id: tasks.length,
      value: task,
      done: false
    }])

  }

  const handleBoxClick = (event) => {
    if(event.target.checked){
      // setTasks(tasks.filter(tarefa => tarefa.id != task.id));
      //TODO: Usar o atributo "done do setTasks"
      console.log("checado")
    }else {
      console.log("nao checado");
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleChange}>

        </input>
        <button type="submit">
          Adicionar
      </button>
      </form>
      <ul>
       {/* TODO: Remove task quando concluido */}
        {tasks.map(task => (
          <div key={task.id}style={{ display: "flex" }}>

            < li> {task.id} - {task.value}</li>
            <div>
              <input type="checkbox" id="done" name="done" onClick={handleBoxClick}
              />
              <label >done</label>
            </div>
          </div>
        ))}

      </ul>
    </div >
  );
}

export default App;
