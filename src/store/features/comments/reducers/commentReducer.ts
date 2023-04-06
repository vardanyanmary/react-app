import { Comment } from "../../../../api/Services/CommentsService/type";
import { CommentActionTypes } from "../types/comment";

type Payload = Comment;

interface ActionType {
  type: CommentActionTypes;
  payload: Payload;
}

interface CommentStateSchema {
  data: Comment;
}

const initialState: CommentStateSchema = {
  data: { id: 0, body: "", email: "", name: "", postId: 0 },
};

export function commentReducer(
  state = initialState,
  action: ActionType
): CommentStateSchema {
  switch (action.type) {
    case CommentActionTypes.INIT_COMMENT:
      return { ...state, data: action.payload as Comment };
    default:
      return state;
  }
}
