import { useState } from 'react';
import './App.css';
import TaskPage from './pages/Task';

function App() {
  const taskList = [
    {name: "Do Assignments", description: "Complete assignment from courses", deadline: "17 April 2025", completed: false},
    {name: "Study", description: "Study for final exam", deadline: "20 April 2025", completed: false},
  ];

  return (
    <>
      <div id="TopBar">
        <p id="TopBarText">Todo List</p>
        <button id="TopBarButton">New Task</button>
      </div>
      <TaskPage />
    </>
  );
}

export default App;
