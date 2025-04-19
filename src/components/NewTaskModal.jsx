export default function NewTaskModal({ currentModalState, setCurrentModalState }) {
  if (currentModalState === false) {
    return null;
  }

  return (
    <div id="ModalContainer">
      <p>test</p>
      <button onClick={() => {setCurrentModalState(false)}}>Save Task</button>
    </div>
  );
}