import { useContext, useState } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);
  // const valor = useContext(TaskContext);
  // console.log(valor);

  const handleSubmit = (e) => {
    e.preventDefault();

    // const newTask = {
    //   title,
    //   id:4,
    //   descripcion: "algo nuevo"
    // };

    //le pasamos mejor el titulo al App.jsx y allá insertamos el obj con title id y descripcion para poder acceder a los datos del array (id = lenght of the array)

    // console.log(title, description);

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");

    // console.log(newTask);
  };

  return (
    <div className="max-w-fit mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
        <h1 className="text-2xl font-bold text-white mb-6 text-center" >Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} //lo agrego para que no solo actualice el state, pero tambien lo refleje en el input de html
          autoFocus //permite que siempre se posicione el cursor en el input, al refrescar sin click
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          placeholder="Escribe la descripcion de la tarea."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
          ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white w-full" >Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
