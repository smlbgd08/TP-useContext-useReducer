import { useContext, useState } from "react";
import { createContext } from "react";

const TaskContext = createContext(null);


export const TaskProvider = ({children})=> {
    const [tasks, setTasks] = useState([]);

    const addTask = (task)=>{
        setTasks([...tasks,task]);
    }

    return (
    <TaskContext.Provider value={{ tasks , addTask}}>
        {children}
      </TaskContext.Provider>);

}




export const useTasks = ()=>{
    const context = useContext(TaskContext);
    if (context === undefined) {
        throw new Error('useTasks must be used within a TaskProvider');
     }
    return context;
}