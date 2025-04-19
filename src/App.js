import { useState } from 'react';
import './App.css';
import Tasks from './pages/Task';
import NewTaskModal from './components/NewTaskModal';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [taskList, setTaskList] = useState([]);

  const [completedTasks, setCompletedTasks] = useState([]);

  const [newTaskModalState, setNewTaskModalState] = useState(false);

  return (
    <>
      <div id="TopBar">
        <p id="TopBarText">Todo List</p>
        <button id="TopBarButton" onClick={() => {setNewTaskModalState(true)}}>New Task</button>
      </div>
      <NewTaskModal id="NewTaskModal" open={newTaskModalState} onClose={() => {setNewTaskModalState(false)}}>
        <NewTaskForm setTaskList={setTaskList} setNewTaskModalState={setNewTaskModalState}/>
      </NewTaskModal>
      <Tasks taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
    </>
  );
}

export default App;
