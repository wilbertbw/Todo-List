export default function TaskTile({ taskList, setTaskList, completedTasks, setCompletedTasks, taskData, taskCompleted, setEditTaskModalState, setEditTaskId, nameRef, descriptionRef, deadlineRef }) {
  function handleDeleteTask() {
    setTaskList(() => {
      return (taskList.filter(currTask => (currTask.id !== taskData.id)));
    });

    setCompletedTasks(() => {
      return (completedTasks.filter(currTask => (currTask.id !== taskData.id)));
    });
  }

  function handleTaskCompleted() {
    handleDeleteTask();
    setCompletedTasks(prevCompletedTasks => {
      return ([...prevCompletedTasks, taskData])
    });
  }

  function handlePreFillField() {
    setEditTaskModalState(true);
    setEditTaskId(taskData.id);

    const date = new Date(taskData.deadline);
    const iso = date.toISOString().split('T')[0];

    nameRef.current.value = taskData.name;
    descriptionRef.current.value = taskData.description;
    deadlineRef.current.value = iso;
  }

  return (
    <div id="TaskTile">
      <p id="TaskName">{taskData.name}</p>
      <p id="TaskDescription">{taskData.description}</p>
      <p id="TaskDeadline">Deadline: {taskData.deadline}</p>
      {!taskCompleted && <button id="TaskCompletedButton" onClick={handleTaskCompleted}>Mark as Completed</button>}
      {!taskCompleted && <button id="TaskEditButton" onClick={handlePreFillField}>Edit Task</button>}
      <button id="TaskDeleteButton" onClick={handleDeleteTask}>Delete Task</button>
    </div>
  )
}