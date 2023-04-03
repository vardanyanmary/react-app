import { Post } from "../../../../api/Services/PostsService/types";

export const initPosts = "initPosts";

interface ActionType {
  type: string;
  payload: Post[];
}

interface PostStateSchema {
  posts: Post[]
}

const initialState: PostStateSchema = {
  posts:[]
};

export function postReducer( state = initialState, action: ActionType): PostStateSchema {
  switch (action.type) {
    case initPosts:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
