import React from "react";
import { Badge, Trash, BadgeCheck, Pencil } from "lucide-react";

const List = ({ todos, setTodos }) => {
  const toggleChange = async (id, currentStatus) => {
    try {
      const res = await fetch(`http://localhost:8000/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ IsDone: !currentStatus }),
      });

      const updated = await res.json();
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === id ? { ...todo, IsDone: updated.IsDone } : todo
        )
      );
    } catch (error) {
      console.log("Error updating", error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:8000/api/todos/${id}`, {
        method: "DELETE",
      });
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error("Error deleting todo", error.message);
    }
  };

  const handleUpdate = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo._id == id
          ? { ...todo, IsEditing: true }
          : { ...todo, IsEditing: false }
      )
    );
  };

  return (
    <div className="flex justify-center items-center mt-[100px] font-prp ">
      <ul className="min-w-[70%] flex flex-col gap-y-2">
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="p-3 bg-black text-white flex justify-between gap-2 text-[17px] rounded-2xl"
          >
            <div className="flex gap-2">
              <span
                onClick={() => toggleChange(todo._id, todo.IsDone)}
                className={`cursor-pointer pointer-events-auto`}
              >
                {!todo.IsDone ? (
                  <Badge size={22} />
                ) : (
                  <BadgeCheck size={22} className="text-blue-400" />
                )}
              </span>{" "}
              <span
                className={`${
                  !todo.IsDone
                    ? "no-underline"
                    : "line-through decoration-3 decoration-red-700"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <span className="flex gap-4">
              <Pencil
                onClick={() => handleUpdate(todo._id)}
                className="hover:text-yellow-300 cursor-pointer"
              />
              <Trash
                onClick={() => handleDelete(todo._id)}
                className="hover:text-red-700 cursor-pointer"
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
