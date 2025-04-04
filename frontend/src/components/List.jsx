import React from "react";
import { Badge, Trash, BadgeCheck, Pencil } from "lucide-react";

const List = ({ todos, setTodos }) => {
  const toggleChange = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id ? { ...todo, IsDone: !todo.IsDone } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleUpdate = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id == id
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
            key={todo.id}
            className="p-3 bg-black text-white flex justify-between gap-2 text-[17px] rounded-2xl"
          >
            <div className="flex gap-2">
              <span
                onClick={() => toggleChange(todo.id)}
                className={`cursor-pointer pointer-events-auto`}
              >
                {todo.IsDone ? (
                  <Badge size={22} />
                ) : (
                  <BadgeCheck size={22} className="text-blue-400" />
                )}
              </span>{" "}
              <span
                className={`${
                  todo.IsDone
                    ? "no-underline"
                    : "line-through decoration-3 decoration-red-700"
                }`}
              >
                {todo.text}
              </span>
            </div>

            <span className="flex gap-4">
              <Pencil
                onClick={() => handleUpdate(todo.id)}
                className="hover:text-yellow-300 cursor-pointer"
              />
              <Trash
                onClick={() => handleDelete(todo.id)}
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
