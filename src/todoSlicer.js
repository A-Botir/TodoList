import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      text: "First Todo element",
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    },
    {
      id: 2,
      text: "Second Todo element",
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    },
    {
      id: 3,
      text: "Third Todo element",
      createdAt: new Date().toLocaleString(),
      isCompleted: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        createdAt: new Date().toLocaleString(),
        isCompleted: false,
      };
      state.push(newTodo);
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
