import React, { useEffect, useState } from "react";
import { use } from "react";

const UpdateTodo = ({ todos, setTodos }) => {
  //   const handleSubmit = (e) => {};
  const [newText, setNewText] = useState("");
  const currentTodo = todos.find((todo) => todo.IsEditing);

  useEffect(() => {
    if (currentTodo) {
      setNewText(currentTodo.text);
    }
  }, [currentTodo]);

  const handleChange = (e) => {
    setNewText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        currentTodo.id == todo.id
          ? { ...todo, text: newText, IsEditing: false }
          : todo
      )
    );
  };

  return (
    <div className="fixed px-2 py-1 inset-15 items-center justify-center bg-white/20 backdrop-blur-lg text-white mt-4 w-[60%] flex mx-auto p-3 rounded-4xl z-10 .popup">
      <input
        type="text"
        value={newText}
        className=" bg-white w-[70%] rounded-2xl rounded-r-none p-3 text-black focus:outline-0 z-50"
        onChange={handleChange}
      />
      <button
        onClick={handleSubmit}
        className="bg-yellow-400 text-black rounded-2xl rounded-l-none p-3"
      >
        Update
      </button>
    </div>
  );
};

export default UpdateTodo;
