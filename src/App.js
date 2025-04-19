import { useState } from 'react';
import './App.css';
import Tasks from './pages/Task';

function App() {
  const [taskList, setTaskList] = useState([
    {id: 0, name: "Do Assignments", description: "Complete assignments", deadline: "17 April 2025", completed: false},
    {id: 1, name: "Study", description: "Study for exams", deadline: "20 April 2025", completed: false}
  ]);

  const [completedTasks, setCompletedTasks] = useState([]);

  return (
    <>
      <div id="TopBar">
        <p id="TopBarText">Todo List</p>
        <button id="TopBarButton">New Task</button>
      </div>
      <Tasks taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks}/>
    </>
  );
}

export default App;
