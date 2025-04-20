export default function TaskTile({ taskList, setTaskList, completedTasks, setCompletedTasks, taskData, taskCompleted, setEditTaskModalState, setEditTaskId }) {
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

  return (
    <div id="TaskTile">
      <p id="TaskName">{taskData.name}</p>
      <p id="TaskDescription">{taskData.description}</p>
      <p id="TaskDeadline">Deadline: {taskData.deadline}</p>
      {!taskCompleted && <button id="TaskCompletedButton" onClick={handleTaskCompleted}>Mark as Completed</button>}
      <button id="TaskEditButton" onClick={() => {setEditTaskModalState(true); setEditTaskId(taskData.id);}}>Edit Task</button>
      <button id="TaskDeleteButton" onClick={handleDeleteTask}>Delete Task</button>
    </div>
  )
}