import Input from "./Input";
import { useState, useRef } from "react";

export default function NewTaskForm({ setTaskList, setNewTaskModalState}) {
  const [currTaskId, setCurrTaskId] = useState(0);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  function handleAddNewTask() {
    const enteredName = nameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDeadline = deadlineRef.current.value;

    if (enteredName.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
        console.log("there are empty fields");
        return;
    }

    setCurrTaskId((prevTaskId) => {return prevTaskId + 1});

    setTaskList((prevTaskList) => {
      return [...prevTaskList, {id: currTaskId, name: enteredName, description: enteredDescription, deadline: enteredDeadline}];
    });

    setNewTaskModalState(false);
  }

  return (
    <>
      <Input ref={nameRef} inputType="name" labelText="Name"/>
      <Input ref={descriptionRef} inputType="description" labelText="Description"/>
      <Input ref={deadlineRef} inputType="date" labelText="Deadline"/>
      <div id="NewTaskButtonContainer">
        <button onClick={() => {handleAddNewTask()}}>Save Task</button>
        <button onClick={() => {setNewTaskModalState(false)}}>Cancel</button>
      </div>
    </>
  )
}