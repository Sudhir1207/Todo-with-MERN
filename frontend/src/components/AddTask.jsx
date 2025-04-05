import React, { useEffect, useState } from "react";

const AddTask = ({ value, setValue, todos, setTodos }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value);
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const handleKeydown = (e) => {
    if (e.key == "Enter") {
      handleClick(e);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: prevTodos.length + 1,
        text: value,
        IsDone: true,
        IsEditing: false,
      },
    ]);
    setValue("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-9">
      <h1 className="font-prp font-extrabold text-3xl p-2 border-2 rounded-3xl">
        <span className="text-white">Task</span>Hive
      </h1>
      <div className="flex justify-center w-[100%] md:w-[80%] mt-4">
        <input
          type="text"
          className="bg-white w-[50%] rounded-3xl rounded-r-none p-3 font-prp text-gray-900 focus:outline-none border-4 border-r-0"
          placeholder="enter todos"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeydown}
        />
        <button
          onClick={handleClick}
          className="bg-black text-white p-4 rounded-l-none rounded-3xl font-prp hover:text-yellow-400"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
