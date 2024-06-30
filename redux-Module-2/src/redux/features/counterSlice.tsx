import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type counterType = {
  count: number;
};
const initialState: counterType = {
  count: 0,
};

const counterslice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    decrementByValue: (state, action: PayloadAction<number>) => {
      state.count -= action.payload;
    },
    incrementByValue: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { decrement, increment, decrementByValue, incrementByValue } =
  counterslice.actions;
export default counterslice.reducer;
