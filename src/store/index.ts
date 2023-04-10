import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/posts";
import { commentReducer } from "./features/comments/commentSlice/commentSlice";
import { todoReducer } from "./features/todos/todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    posts : postReducer,
    comments : commentReducer,
    todos : todoReducer
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch