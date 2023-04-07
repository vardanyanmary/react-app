import { Post } from "../../../../api/Services/PostsService/types";
import { PostsActionTypes } from "../types/posts";

type Payload = Post | Post[] | boolean | string;

interface ActionType {
  type: PostsActionTypes;
  payload: Payload;
}

interface PostsStateSchema {
  data: Post[];
  selectedData?: Post;
  isLoading: boolean;
  error?: string;
}

const initialState: PostsStateSchema = {
  data: [],
  isLoading: false,
};

export function postsReducer(
  state = initialState,
  action: ActionType
): PostsStateSchema {
  switch (action.type) {
    case PostsActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload as boolean };
    case PostsActionTypes.INIT_POSTS:
      return { ...state, data: action.payload as Post[] };
    case PostsActionTypes.SELECTED_POST:
      return { ...state, selectedData: action.payload as Post };
    case PostsActionTypes.SET_ERROR:
      return { ...state, error: action.payload as string };
    default:
      return state;
  }
}
