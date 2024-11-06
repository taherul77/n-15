import { createSlice } from "@reduxjs/toolkit";

interface TestState {
  add: boolean;
  val: string[];
}

const initialState: TestState = {
  add: false,
  val: [],
};

export const TestSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    handleAddModalOpen: (state) => {
      state.add = true;
    },
    rowValue: (state, action) => {
      state.val = action.payload;
    },
  },
});

export const { handleAddModalOpen, rowValue } = TestSlice.actions;

export default TestSlice.reducer;
