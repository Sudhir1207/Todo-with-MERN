import React from "react";
import { Badge, Trash, BadgeCheck } from "lucide-react";

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

  return (
    <div className="flex justify-center items-center mt-[100px] font-prp">
      <ul className="min-w-[70%] flex flex-col gap-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="p-3 bg-black text-white flex justify-between gap-2 text-[17px]"
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
              {todo.text}
            </div>
            <span
              onClick={() => handleDelete(todo.id)}
              className="cursor-pointer pointer-events-auto"
            >
              <Trash className="hover:text-red-700" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
