import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let initialState = {
  query: "",
  results: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchString(state, action) {
      state.query = action.payload;
    },
    setResults(state, action) {
      // console.log("recieved data array ", action.payload);

      // state = {
      //   ...state,
      //   results: state.results.concat(action.payload),
      // };
      state.results.push(action.payload);

      console.log("------ results ----- ", state);
    },
    clearResults(state) {
      state.results = [];
    },
  },
});

export const { searchString, setResults, clearResults } = searchSlice.actions;
export default searchSlice.reducer;
