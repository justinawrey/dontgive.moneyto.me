import type { VoidComponent } from "solid-js";
import Todo from "./components/Todo";

const App: VoidComponent = () => {
  return (
    <div class="flex flex-col">
      <Todo text="give me money" />
    </div>
  );
};

export default App;
