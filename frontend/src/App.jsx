import AddTask from "./components/AddTask";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="sm:w-[70%] md:w-[80%] min-h-screen mx-auto bg-gray-400">
      <AddTask
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
