import Checkbox from "@mui/material/Checkbox";

import Delete from "../assets/delete.svg";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Todo = () => {
  return (
    <section className="pt-4">
      <h1 className="mb-3 text-[48px] font-bold">Todo list</h1>
      <form id="todo-form" className="mb-4 flex w-full items-center rounded-lg">
        <input
          type="text"
          id="todo-input"
          className=" flex-grow rounded-l-lg border px-3 py-2 text-[16px] outline-none"
          placeholder="Add a new purchase..."
        />
        <button
          type="submit"
          className="rounded-r-lg bg-blue-500 px-4 py-2 text-[16px] font-medium text-white transition duration-300 hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      <ul className="flex w-full flex-col items-start justify-start gap-2">
        <li className="flex w-full items-center justify-between rounded-lg bg-white px-3 py-1">
          <label className="flex flex-grow items-center gap-2">
            <Checkbox
              {...label}
              defaultChecked
              sx={{ "& .MuiSvgIcon-root": { fontSize: 28 }, padding: "4px" }}
              id="todo"
            />
            <div className="space-y-1">
              <h4 className="text-[16px]">Hello</h4>
              <p className="text-[12px]">22.50 26.03.2024</p>
            </div>
          </label>
          <button className="rounded-md bg-[red] p-2 active:opacity-80">
            <img src={Delete} alt="delete img" width={20} height={20} />
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Todo;
