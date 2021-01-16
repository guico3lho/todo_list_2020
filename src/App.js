
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
          <div key={task.id} style={{ display: "flex" }}>

            < li>{task.value}</li>
          </div>
        ))}

      </ul>
    </div >
  );
}

export default App;
