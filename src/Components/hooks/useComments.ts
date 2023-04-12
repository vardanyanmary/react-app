import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import commentsService from "../../api/Services/CommentsService/CommentsService";
import { getCommentsData, getCommentsError, getCommentsLoading, getSelectedComment } from "../../store/features/comments/selectors/comments";
import { Comment } from "../../api/Services/CommentsService/type";
import { commentAction } from "../../store/features/comments/commentSlice/commentSlice";

export function useComments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getCommentsData);
  const isLoading = useSelector(getCommentsLoading);
  const error = useSelector(getCommentsError);
  const selectedData = useSelector(getSelectedComment);

  const getAllComments = useCallback(async () => {
    dispatch(commentAction.setLoading(true));
    dispatch(commentAction.setError(undefined));
    try {
      const comments = await commentsService.getAllComments();
      dispatch(commentAction.initComments(comments));
    } catch (error) {
      console.log(error);
      dispatch(commentAction.setError("error massage"));
    } finally {
      dispatch(commentAction.setLoading(false));
    }
  }, [dispatch]);

  const selectComment = useCallback(
    (comment: Comment) => {
      dispatch(commentAction.selectComment(comment));
    },
    [dispatch]
  );

  const navigateSingleCommentPage = useCallback(
    (comment: Comment) => {
      navigate(`${comment.id}`);
      selectComment(comment);
    },
    [navigate]
  );

  const getComment = useCallback(async (commentId: number) => {
    dispatch(commentAction.setLoading(true));
    dispatch(commentAction.setError(undefined));
    try {
      const comment = await commentsService.getCommentById(commentId);
      selectComment(comment);
    } catch (error) {
      console.warn(error);
      dispatch(commentAction.setError("Not Found"));
    } finally {
      dispatch(commentAction.setLoading(false));
    }
  }, []);

  return {
    comments: data,
    navigateSingleCommentPage,
    isLoading,
    error,
    getAllComments,
    selectedData,
    getComment,
  };
}
