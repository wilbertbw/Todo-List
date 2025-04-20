import TaskTile from "../components/TaskTile";

export default function Tasks({ taskList, setTaskList, completedTasks, setCompletedTasks, setEditTaskModalState, setEditTaskId }) {
  return (
    <div id="AllTasksContainer">
      <div id="TaskTileContainer">
        {taskList.length === 0 && <p id="NoTasksText">No tasks. Add some!</p>}
        {taskList.length > 0 &&
          taskList.map((taskData) => {
            return (<TaskTile key={taskData.id} taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} taskData={taskData} setEditTaskModalState={setEditTaskModalState} setEditTaskId={setEditTaskId}/>)
          })
        }
      </div>
      <div id="TaskTileContainer">
        {completedTasks.length === 0 && <p id="NoTasksText">No completed tasks.</p>}
        {completedTasks.length > 0 &&
          completedTasks.map((taskData) => {
            return(<TaskTile key={taskData.id} taskList={taskList} setTaskList={setTaskList} completedTasks={completedTasks} setCompletedTasks={setCompletedTasks} taskData={taskData} taskCompleted setEditTaskModalState={setEditTaskModalState} setEditTaskId={setEditTaskId}/>)
          })
        }
      </div>
    </div>
  );
}