import { applyMiddleware, combineReducers, createStore } from "redux";
import { settingsReducer } from "./features/settings/reducers/settingsReducer";
import { counterReducer } from "./features/counter/reducers/counterReducer";
import { postsReducer } from "./features/posts/reducers/postsReducer";
import { todosReducer } from "./features/todos/reducers/todosReducer";
import { commentsReducer } from "./features/comments/reducers/commentsReducer";

import thunk from "redux-thunk";
// @ts-ignore
import logger from "redux-logger";

const reducers = combineReducers({
  settings: settingsReducer,
  counter: counterReducer,
  posts: postsReducer,
  todos: todosReducer,
  comments: commentsReducer,
});

const middlewareEnhancer = applyMiddleware(thunk,logger)

const composeWithDevTools =
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = createStore(reducers, composedEnhancers)

export type RootState = ReturnType<typeof store.getState>;
