export default function TaskTile({ taskData }) {
  return (
    <div id="TaskTile">
      <p id="TaskName">{taskData.name}</p>
      <p id="TaskDescription">{taskData.description}</p>
      <p id="TaskDeadline">{taskData.deadline}</p>
      <button id="TaskCompletedButton">Mark as Completed</button>
    </div>
  )
}