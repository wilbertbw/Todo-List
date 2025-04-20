import { useState, useRef } from 'react';
import './App.css';
import Tasks from './pages/Task';
import NewTaskModal from './components/NewTaskModal';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newTaskModalState, setNewTaskModalState] = useState(false);
  const [editTaskModalState, setEditTaskModalState] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  function handleCloseModal() {
    setNewTaskModalState(false);
    setEditTaskModalState(false);
  }

  return (
    <>
      <div id="TopBar">
        <p id="TopBarText">Todo List</p>
        <button id="TopBarButton" onClick={() => {setNewTaskModalState(true)}}>New Task</button>
      </div>
      <NewTaskModal id="NewTaskModal" open={newTaskModalState || editTaskModalState} onClose={handleCloseModal}>
        <NewTaskForm taskList={taskList} setTaskList={setTaskList} setNewTaskModalState={setNewTaskModalState} setEditTaskModalState={setEditTaskModalState} mode={newTaskModalState ? "newTask" : "editTask"} editTaskId={editTaskId} nameRef={nameRef} descriptionRef={descriptionRef} deadlineRef={deadlineRef}/>
      </NewTaskModal>
      <Tasks taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} setEditTaskModalState={setEditTaskModalState} setEditTaskId={setEditTaskId} nameRef={nameRef} descriptionRef={descriptionRef} deadlineRef={deadlineRef}/>
    </>
  );
}

export default App;
