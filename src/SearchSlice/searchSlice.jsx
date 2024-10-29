import { createSlice } from "@reduxjs/toolkit";

let initialState = "";
const searchSlice = createSlice({
  name: "search",
  initialState: initialState,
  reducers: {
    searchString: (state, action) => ({
      state: action.payload,
    }),
  },
});

export const { searchString } = searchSlice.actions;
export default searchSlice.reducer;
