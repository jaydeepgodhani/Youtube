import appSlice from "./appSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    app2: appSlice
  }
})

export default store;