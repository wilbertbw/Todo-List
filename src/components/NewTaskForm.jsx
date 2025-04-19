import Input from "./Input";
import { useState, useRef } from "react";

export default function NewTaskForm({ setTaskList, setNewTaskModalState }) {
  const [currTaskId, setCurrTaskId] = useState(0);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  function handleAddNewTask(name, description, deadline) {
    setTaskList(prevTaskList => {
      return ([...prevTaskList, {id: currTaskId, name: name, description: description, deadline: deadline, completed:false}])
    });

    setCurrTaskId((prevTaskId) => {return prevTaskId++});
  }

  return (
    <>
      <Input ref={nameRef} inputType="name" labelText="Name"/>
      <Input ref={descriptionRef} inputType="description" labelText="Description"/>
      <Input ref={deadlineRef} inputType="date" labelText="Deadline"/>
      <div id="NewTaskButtonContainer">
        <button onClick={() => {setNewTaskModalState(false)}}>Save Task</button>
        <button onClick={() => {setNewTaskModalState(false)}}>Cancel</button>
      </div>
    </>
  )
}