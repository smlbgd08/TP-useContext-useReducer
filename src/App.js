import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './component/gestionTaches/TaskContext';
import TaskList from './component/gestionTaches/TaskList';
import TaskForm from './component/gestionTaches/TaskForm';
import Reduce from './component/Reduce/Reduce';
import Reduce2 from './component/Reduce/Reduce2';
import FonctionList from './component/gestionFonction-reducer/FonctionList';

function App() {
  return (
    <TaskProvider>
    <div className="App">
      <FonctionList />
      <Reduce2 />
      <Reduce />
      <TaskList />
      <TaskForm />
    </div>
    </TaskProvider>
  );
}

export default App;
