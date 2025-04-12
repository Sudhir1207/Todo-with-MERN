import React, { useEffect, useState } from "react";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newText.trim()) return;

    try {
      const res = await fetch(
        `http://localhost:8000/api/todos/${currentTodo._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: newText }),
        }
      );

      const updated = await res.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === updated._id ? { ...updated, IsEditing: false } : todo
        )
      );
    } catch (error) {
      console.log("Error in updating", error.message);
    }
  };

  return (
    <div className="fixed inset-0 items-center justify-center bg-white/20 backdrop-blur-lg text-white sm:w-[100%] md:w-[80%] flex mx-auto z-10 .popup">
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
