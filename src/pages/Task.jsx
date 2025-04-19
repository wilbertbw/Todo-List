import TaskTile from "../components/TaskTile";

export default function Tasks({ taskList }) {
  return (
    <div>
      {taskList.length === 0 && <p>No tasks. Add some!</p>}
      {taskList.length > 0 &&
        taskList.map((taskData) => (
          <TaskTile taskData={taskData} />
        ))
      }
    </div>
  );
}