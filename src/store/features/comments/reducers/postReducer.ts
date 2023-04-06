import { Post } from "../../../../api/Services/PostsService/types";
import { PostActionTypes } from "../types/post";

type Payload = Post;

interface ActionType {
  type: PostActionTypes;
  payload: Payload;
}

interface PostStateSchema {
  data: Post;
}

const initialState: PostStateSchema = {
  data: { id: 0, body: "", title: "" },
};

export function postReducer(
  state = initialState,
  action: ActionType
): PostStateSchema {
  switch (action.type) {
    case PostActionTypes.INIT_POST:
      return { ...state, data: action.payload as Post };
    default:
      return state;
  }
}
