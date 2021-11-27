import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    places: [],
    markers: [],
    categories: [],
  },
  reducers: {
    addPlaces(state, action) {
      state.places = [...action.payload];
    },
  },
});
export default dataSlice.reducer;
export const dataActions = dataSlice.actions;
