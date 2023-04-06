import { useCallback, useEffect } from "react";
import commentsService from "../../../api/Services/CommentsService/CommentsService";
import { useDispatch, useSelector } from "react-redux";
import { getCommentData } from "../../../store/features/comments/selectors/comment";
import { initCommentAction } from "../../../store/features/comments/actions/commentActions";

export function useComment(commentId: number) {
  const dispatch = useDispatch();
  const data = useSelector(getCommentData);

  const getComment = useCallback(
    async (commentId: number) => {
      try {
        const comment = await commentsService.getCommentById(commentId);
        dispatch(initCommentAction(comment));
      } catch (error) {
        console.error(error);
      }
    },
    [dispatch]
  );

  useEffect(() => {
    if (!data.id || data.id !== commentId) {
      getComment(commentId);
    }
  }, [getComment, commentId, data.id]);

  return {
    getComment,
    comment: data,
  };
}
