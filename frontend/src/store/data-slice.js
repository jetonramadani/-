import {createSlice} from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    places: [],
    cities: [],
    categories: [],
  },
  reducers: {
    addPlaces(state, action) {
      state.places = [...action.payload];
    },
    addCities(state, action) {
      state.cities = [...action.payload];
    },
    addCategories(state, action) {
      state.categories = [...action.payload];
    },
  },
});
export default dataSlice.reducer;
export const dataActions = dataSlice.actions;
