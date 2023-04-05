import { combineReducers, createStore } from "redux";
import { settingsReducer } from "./features/settings/reducers/settingsReducer";
import  {counterReducer}  from "./features/counter/reducers/counterReducer";
import { postsReducer } from "./features/posts/reducers/postsReducer";
import { postReducer } from "./features/posts/reducers/postReducer";

const reducers = combineReducers({
    settings : settingsReducer,
    counter: counterReducer ,
    posts: postsReducer , 
    post : postReducer
})

export const store = createStore(reducers)

export type RootState = ReturnType<typeof store.getState>
