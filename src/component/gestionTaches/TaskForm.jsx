import { useState } from "react";
import { useTasks } from "./TaskContext";

const TaskForm = () => {

    const [newTask, setNewTask] = useState('');
    const { addTask } = useTasks();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim() !== '') {
          addTask(newTask.trim());
          setNewTask('');
        }
      };    

    return (
        <div>
          <h2>Ajouter une Tâche</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Ajouter</button>
          </form>
        </div>
      );

}

export default TaskForm;