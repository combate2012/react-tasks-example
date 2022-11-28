import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []); //[] es para que lo ejecute una sola vez el useEffect, si no lo tiene se ejecuta cada que cambien algo, pero resetea el data (datos iniciales)

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        descripcion: task.description,
      },
    ]);

    // console.log(tasks);
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //filtrando el arreglo generamos eliminacion
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
      //ESTO ES LO MISMO
      //   value={{
      //     tasks: tasks,
      //     deleteTask: deleteTask,
      //     createTask: createTask,
      //   }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
