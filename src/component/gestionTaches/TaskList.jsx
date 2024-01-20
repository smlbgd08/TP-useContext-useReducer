import { useTasks } from "./TaskContext";

const TaskList = () => {

    const {tasks} = useTasks();

    return (
        <div>
          <h2>Liste de Tâches</h2>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      );
    };

export default TaskList;