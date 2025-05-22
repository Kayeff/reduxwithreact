import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./counter";
import authSliceReducer from "./authentication";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    authentication: authSliceReducer,
  },
});

export default store;
