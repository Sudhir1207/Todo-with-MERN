import AddTask from "./components/AddTask";
import List from "./components/List";
import { useState, useEffect } from "react";
import UpdateTodo from "./components/UpdateTodo";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log("Error fetching todos", error.message);
      }
    };

    fetchTodos();
  }, []);
  return (
    <div className="sm:w-[70%] md:w-[80%] min-h-screen mx-auto bg-gray-400">
      <AddTask
        value={value}
        setValue={setValue}
        todos={todos}
        setTodos={setTodos}
      />
      <List todos={todos} setTodos={setTodos} />
      {todos.some((todo) => todo.IsEditing) && (
        <UpdateTodo
          value={value}
          setValue={setValue}
          todos={todos}
          setTodos={setTodos}
        />
      )}
    </div>
  );
}

export default App;
