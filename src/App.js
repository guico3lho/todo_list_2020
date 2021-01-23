
import { useState, useEffect } from "react";
import { Input } from "./components/Input"
import { List } from "./components/List"
import { itsDone } from "./components/functions"
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {

    const handleDelete = (event) => {
      if (event.key === "!") {
        console.log('Oi lindao')
        setTasks(tasks.filter(itsDone))
        // setTasks(tasks);
      }
      // setTasks(tasks.filter(itsDone));

    }
    document.addEventListener("keydown", handleDelete);

    return () => {
      document.removeEventListener("keydown", handleDelete);
    }

  }, [tasks]);






  const addTodo = text => {
    //Lida com a criação do componente Task (id, text, done, ..., etc)
    const newTodo = { id: tasks.length, text: text, done: false }
    setTasks([...tasks, newTodo]);
    console.log(tasks);

  }



  const checkTodo = (index) => {
    const newTodos = tasks.slice();
    newTodos[index].done = !newTodos[index].done
    setTasks(newTodos);
  }

  const removeTodo = (index) => {

    const beforeArray = tasks.slice(0, index);
    const afterArray = tasks.slice(index + 1);

    setTasks([...beforeArray, ...afterArray]);
  }

  return (
    <div>
      <h3>Bem-vindo ao todo-list do GuiK 😎</h3>
      <p>Pressione as teclas (Shift + !) para remover tarefas completadas</p>
      <Input addTodo={addTodo} />
      <List tasks={tasks}
        removeTodo={removeTodo}
        checkTodo={checkTodo} />
    </div >
  );
}

export default App;
