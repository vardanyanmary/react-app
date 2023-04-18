import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./features/posts";
import { commentReducer } from "./features/comments/commentSlice/commentSlice";
import { todoReducer } from "./features/todos/todoSlice/todoSlice";
import { albumReducer } from "./features/albums/albumSlice/albumSlice";
import { userReducer } from "./features/users/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    posts : postReducer,
    comments : commentReducer,
    todos : todoReducer,
    albums : albumReducer,
    users : userReducer

},
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)

})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch