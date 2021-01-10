
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
      value: task
    }])

  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <input type="text" onChange={handleChange}>
          {/* TODO: write the task */}

        </input>
        <button type="submit">
          {/* TODO: when pressed, add task to the task list */}
        Adicionar
      </button>
      </form>
      <ul>
        {/* TODO: Map para renderizar as tasks */}
        {tasks.map(task => (
          < li key={ task.id}> {task.id} - {task.value}</li>
        ))}

      </ul>
    </div >
  );
}

export default App;
