import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app2: appSlice,
    search: searchSlice
  }
})

export default store;