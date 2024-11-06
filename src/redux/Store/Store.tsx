import { configureStore } from "@reduxjs/toolkit";

import TestReducer from "../Reducer/TestSlice";

export const store = configureStore({
  reducer: {
    test: TestReducer,
  },
});
