import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../SearchSlice/searchSlice";

export const store = configureStore({
  devTools: false,
  reducer: {
    search: searchReducer,
  },
});
