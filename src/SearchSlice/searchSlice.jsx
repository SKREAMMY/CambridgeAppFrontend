import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

let initialState = {
  query: "",
  results: [],
  movieResults: [],
};
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchString(state, action) {
      return {
        ...state,
        query: action.payload,
      };
      // state.query = action.payload;
    },
    setResults(state, action) {
      // console.log(action.payload);
      return {
        ...state,
        results: [...state.results, action.payload],
      };
      // state.results.push(action.payload);
    },
    setMovieResults(state, action) {
      return {
        ...state,
        movieResults: [...action.payload],
      };
    },
    clearResults(state) {
      return {
        ...state,
        results: [],
        query: "",
        movieResults: [],
      };
      // state.results = [];
    },
  },
});

export const { searchString, setResults, clearResults, setMovieResults } =
  searchSlice.actions;
export default searchSlice.reducer;
