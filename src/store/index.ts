import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/posts";
import { commentReducer } from "./features/comments/commentSlice/commentSlice";

export const store = configureStore({
  reducer: {
    posts : postReducer,
    comments : commentReducer,
},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch