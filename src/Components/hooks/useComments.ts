import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import commentsService from "../../api/Services/CommentsService/CommentsService";
import {
  getCommentsData,
  getCommentsError,
  getCommentsLoading,
  getSelectedComment,
} from "../../store/features/comments/selectors/comments";
import {
  initCommentsAction,
  setGetAllCommentsErrorAction,
  setLoading,
} from "../../store/features/comments/actions/commentsActions";
import { Comment } from "../../api/Services/CommentsService/type";
import { selectedCommentAction } from "../../store/features/comments/actions/commentsActions";

export function useComments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getCommentsData);
  const isLoading = useSelector(getCommentsLoading);
  const error = useSelector(getCommentsError);
  const selectedData = useSelector(getSelectedComment);

  const getAllComments = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setGetAllCommentsErrorAction(undefined));
    try {
      const comments = await commentsService.getAllComments();
      dispatch(initCommentsAction(comments));
    } catch (error) {
      console.log(error);
      dispatch(setGetAllCommentsErrorAction("error massage"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const selectComment = useCallback(
    (comment: Comment) => {
      dispatch(selectedCommentAction(comment));
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
    dispatch(setLoading(true));
    dispatch(setGetAllCommentsErrorAction(undefined));
    try {
      const comment = await commentsService.getCommentById(commentId);
      selectComment(comment);
    } catch (error) {
      console.warn(error);
        dispatch(setGetAllCommentsErrorAction("Not Found"));
    } finally {
      dispatch(setLoading(false));
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
