import { useState } from 'react';
import './App.css';
import Tasks from './pages/Task';
import NewTaskModal from './components/NewTaskModal';

function App() {
  const [taskList, setTaskList] = useState([
    {id: 0, name: "Do Assignments", description: "Complete assignments", deadline: "17 April 2025", completed: false},
    {id: 1, name: "Study", description: "Study for exams", deadline: "20 April 2025", completed: false}
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);

  const [newTaskModalState, setNewTaskModalState] = useState(false);

  function handleAddTask() {

  }

  return (
    <>
      <div id="TopBar">
        <p id="TopBarText">Todo List</p>
        <button id="TopBarButton" onClick={() => {setNewTaskModalState(true)}}>New Task</button>
      </div>
      <NewTaskModal currentModalState={newTaskModalState} setCurrentModalState={setNewTaskModalState}/>
      <Tasks taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
    </>
  );
}

export default App;
