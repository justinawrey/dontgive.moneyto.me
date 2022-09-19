import { createSignal, VoidComponent } from "solid-js";

const Todo: VoidComponent<{ text: string }> = ({ text }) => {
  const [completed, setCompleted] = createSignal(false);
  function complete() {
    setCompleted((completed) => !completed);
  }

  return (
    <button class={completed() ? "line-through" : ""} onClick={complete}>
      {text}
    </button>
  );
};

export default Todo;
