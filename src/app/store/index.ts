import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./baseApi";
import { quizSlice } from "@/features/quiz/model/quizSlice";
import { quizConfigSlice } from "@/features/quiz/model/quizConfigSlice";

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    [quizConfigSlice.name]: quizConfigSlice.reducer,
    [quizSlice.name]: quizSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});
