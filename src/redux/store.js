import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "./slices/StudentSlice";

const store = configureStore({
  reducer: {
    students: StudentSlice,
  },
});

export default store;
