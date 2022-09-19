import type { VoidComponent } from "solid-js";
import Todo from "./components/Todo";

const App: VoidComponent = () => {
  return (
    <div class="flex flex-col">
      <Todo text="get groceries" />
      <Todo text="cook" />
      <Todo text="sell taco" />
    </div>
  );
};

export default App;
