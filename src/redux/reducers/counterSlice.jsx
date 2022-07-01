import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
};

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    incrementAction: (state) => {
      state.counter = state.counter + 1;
      console.log(state.counter);
    },
    decrementAction: (state) => {
      state.counter = state.counter > 0 ? state.counter - 1 : state.counter;
      console.log(state.counter);
    },
  },
});

export const { incrementAction, decrementAction } = counterSlice.actions;
