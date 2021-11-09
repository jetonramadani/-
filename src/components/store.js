import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./data-slice";
const store = configureStore({
  reducer: {
    dataSlice,
  },
});
export default store;
