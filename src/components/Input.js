
import { useState } from "react";

export const Input = ({ addTodo }) => {

    const [text, setText] = useState();


    const handleSubmit = (event) => {
        event.preventDefault();

        addTodo(text);

        setText("");

    }

    return (


        <form onSubmit={handleSubmit}>

            <input type="text" name={text} value={text} onChange={event => setText(event.target.value)} />


            <button type="submit">
                Adicionar
                 </button>
        </form>
    )
}



        // FIXME: Não é recomendado usar setTasks aki pois é meio estranho modificar o vetor
        // De tasks aki nesse componente pois ele cuida apenaas de cada input individualmente
       // setTasks([...tasks, {
        //     id: tasks.length,
        //     text: text,
        //     done: false
        // }])  


    // const handleChange = (event) => {
    //     setText(event.target.value);

    //     // FIXME: Pq são diferentes seus resultados?
    //     // console.log(text);
    //     // console.log(event.target.value);
    // }