import { Comment } from "../../../../api/Services/CommentsService/type";
import { CommentActionTypes } from "../types/comment";

export const initCommentAction = (payload: Comment | undefined) => ({
  type: CommentActionTypes.INIT_COMMENT,
  payload,
});
