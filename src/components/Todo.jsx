import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTodo, deleteTodo } from "../todoSlicer";

import Delete from "../assets/delete.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Todo = () => {
  const todos = useSelector((state) => state.todos);
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ text: inputValue }));
    setInputValue("");
  };
  
  return (
    <section className="pt-4">
      <h1 className="mb-3 text-[48px] font-bold">Todo list</h1>
      <form
        id="todo-form"
        className="mb-4 flex w-full items-center rounded-lg"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" flex-grow rounded-l-lg border px-3 py-2 text-[16px] outline-none"
          placeholder="Add a new purchase..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-r-lg bg-blue-500 px-4 py-2 text-[16px] font-medium text-white transition duration-300 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <ul className="flex w-full flex-col items-start justify-start gap-2">
        {todos.map((todo) => (
          <li
            className="flex w-full items-center justify-between rounded-lg bg-white px-3 py-1"
            key={todo.id}
          >
            <label className="flex flex-grow items-center gap-2">
              <Checkbox
                sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, padding: "4px" }}
                id="todo"
              />
              <div className="space-y-1">
                <h4 className="text-[16px]">{todo.text}</h4>
                <p className="text-[12px]">{todo.createdAt}</p>
              </div>
            </label>
            <button
              className="rounded-md bg-[red] p-2 active:opacity-80"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              <img src={Delete} alt="delete img" width={20} height={20} />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Todo;
