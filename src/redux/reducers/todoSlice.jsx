import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      title: "learn node js",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "go to the sea",
      content: "Lorem ipsum dolor sit amet.",
    },
    {
      title: "walk the dog",
      content: "Lorem ipsum dolor sit amet.",
    },
  ],
};

// export reducer to store
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoAction: (state, action) => {
      state.todos.push(action.payload);
      console.log(action);
    },
    deleteTodoAction: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
  },
});

//export action to component
export const { addTodoAction, deleteTodoAction } = todoSlice.actions;
