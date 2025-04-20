import Input from "./Input";
import { useState } from "react";

export default function NewTaskForm({ taskList, setTaskList, setNewTaskModalState, setEditTaskModalState, mode, editTaskId, nameRef, descriptionRef, deadlineRef }) {
  const [currTaskId, setCurrTaskId] = useState(0);

  function clearInputFields() {
    nameRef.current.value = null;
    descriptionRef.current.value = null;
    deadlineRef.current.value = null;
  }

  function handleAddNewTask() {
    const enteredName = nameRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDeadline = deadlineRef.current.value;
    
    const [year, month, day] = deadlineRef.current.value.split('-');
    const enteredDeadlineFormatted= `${month}/${day}/${year}`;

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

    const [year, month, day] = deadlineRef.current.value.split('-');
    const enteredDeadlineFormatted= `${month}/${day}/${year}`;

    if (enteredName.trim() === '' || enteredDescription.trim() === '' || enteredDeadline.trim() === '') {
        return;
    }

    const newTaskList = taskList.map(task => {
      if (task.id === editTaskId) {
        return {...task, name: enteredName, description: enteredDescription, deadline: enteredDeadlineFormatted};
      } else {
        return task;
      }
    });

    setTaskList(newTaskList);

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