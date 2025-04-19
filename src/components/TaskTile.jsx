export default function TaskTile({ taskList, setTaskList, completedTasks, setCompletedTasks, taskData }) {
  function handleDeleteTask() {
    setTaskList(() => {
      return (taskList.filter(currTask => (currTask.id !== taskData.id)));
    });

    setCompletedTasks(() => {
      return (completedTasks.filter(currTask => (currTask.id !== taskData.id)));
    })
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
      <button id="TaskCompletedButton" onClick={handleTaskCompleted}>Mark as Completed</button>
      <button id="TaskDeleteButton" onClick={handleDeleteTask}>Delete Task</button>
    </div>
  )
}