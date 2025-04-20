import Input from "./Input";
import { useState, useRef } from "react";

export default function NewTaskForm({ taskList, setTaskList, setNewTaskModalState, setEditTaskModalState, mode, editTaskId }) {
  const [currTaskId, setCurrTaskId] = useState(0);

  const nameRef = useRef();
  const descriptionRef = useRef();
  const deadlineRef = useRef();

  function clearInputFields() {
    nameRef.current.value = null;
    descriptionRef.current.value = null;
    deadlineRef.current.value = null;
  }

  function handleAddNewTask() {
    const enteredName = nameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDeadline = deadlineRef.current.value;
    const enteredDeadlineFormatted = new Date(enteredDeadline).toLocaleDateString("en-US");

    if (enteredName.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
        return;
    }

    setCurrTaskId((prevTaskId) => {return prevTaskId + 1});

    setTaskList((prevTaskList) => {
      return [...prevTaskList, {id: currTaskId, name: enteredName, description: enteredDescription, deadline: enteredDeadlineFormatted}];
    });

    clearInputFields();

    setNewTaskModalState(false);
  }

  function handleEditTask() {
    const enteredName = nameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDeadline = deadlineRef.current.value;
    const enteredDeadlineFormatted = new Date(enteredDeadline).toLocaleDateString("en-US");

    if (enteredName.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
        return;
    }

    setCurrTaskId((prevTaskId) => {return prevTaskId + 1});

    setTaskList(() => {
      return (taskList.filter(currTask => (currTask.id !== editTaskId)));
    });

    setTaskList((prevTaskList) => {
      return [...prevTaskList, {id: editTaskId, name: enteredName, description: enteredDescription, deadline: enteredDeadlineFormatted}];
    });

    clearInputFields();

    setEditTaskModalState(false);
  }

  return (
    <>
      <Input ref={nameRef} inputType="name" labelText="Name"/>
      <Input ref={descriptionRef} inputType="description" labelText="Description"/>
      <Input ref={deadlineRef} inputType="date" labelText="Deadline"/>
      <div id="NewTaskButtonContainer">
        <button onClick={() => {mode === "newTask" ? handleAddNewTask() : handleEditTask()}}>Save Task</button>
        <button onClick={() => {setNewTaskModalState(false); setEditTaskModalState(false); clearInputFields();}}>Cancel</button>
      </div>
    </>
  )
}