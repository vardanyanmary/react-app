import { combineReducers, createStore } from "redux";
import { settingsReducer } from "./features/settings/reducers/settingsReducer";
import  {counterReducer}  from "./features/counter/reducers/counterReducer";
import { postReducer } from "./features/post/reducers/postReducer";

const reducers = combineReducers({
    settings : settingsReducer,
    counter: counterReducer ,
    post: postReducer
})

export const store = createStore(reducers)