import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import commentsService from "../../api/Services/CommentsService/CommentsService";
import {
  getCommentsData,
  getCommentsError,
  getCommentsLoading,
  getSelectedComment,
} from "../../store/features/comments/selectors/comments";
import { Comment } from "../../api/Services/CommentsService/type";
import { commentAction } from "../../store/features/comments/commentSlice/commentSlice";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { fetchAllComments } from "../../store/features/comments/model/fetchAllComments";
import { fetchCommentById } from "../../store/features/comments/model/fetchCommentById";

export function useComments() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = useSelector(getCommentsData);
  const isLoading = useSelector(getCommentsLoading);
  const error = useSelector(getCommentsError);
  const selectedData = useSelector(getSelectedComment);

  const getAllComments = useCallback(async () => {
    dispatch(fetchAllComments());
    // dispatch(commentAction.setLoading(true));
    // dispatch(commentAction.setError(undefined));
    // try {
    //   const comments = await commentsService.getAllComments();
    //   dispatch(commentAction.initComments(comments));
    // } catch (error) {
    //   console.log(error);
    //   dispatch(commentAction.setError("error massage"));
    // } finally {
    //   dispatch(commentAction.setLoading(false));
    // }
  }, [dispatch]);

  // const selectComment = useCallback(
  //   (comment: Comment) => {
  //     dispatch(commentAction.selectComment(comment));
  //   },
  //   [dispatch]
  // );

  const navigateSingleCommentPage = useCallback(
    (comment: Comment) => {
      navigate(`${comment.id}`);
      dispatch(commentAction.selectComment(comment));
    },
    [navigate]
  );

  const getComment = useCallback(
    (commentId: number) => {
      dispatch(fetchCommentById(commentId));
      // dispatch(commentAction.setLoading(true));
      // try {
      //   const comment = await commentsService.getCommentById(commentId);
      //   selectComment(comment);
      // } catch (error) {
      //   console.warn(error);
      // } finally {
      //   dispatch(commentAction.setLoading(false));
      // }
    },
    [dispatch]
  );

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
