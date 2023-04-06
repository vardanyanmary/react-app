import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import commentsService from "../../../api/Services/CommentsService/CommentsService";
import { useDispatch, useSelector } from "react-redux";
import {
  getCommentsData,
  getCommentsError,
  getCommentsLoading,
} from "../../../store/features/comments/selectors/comments";
import {
  initCommentsAction,
  setGetAllCommentsErrorAction,
  setLoading,
} from "../../../store/features/comments/actions/commentsActions";

export function useComments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getCommentsData);
  const isLoading = useSelector(getCommentsLoading);
  const error = useSelector(getCommentsError);

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

  const navigateSingleCommentPage = useCallback(
    (commentId: number) => {
      navigate(`${commentId}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (!data.length) {
      getAllComments();
    }
  }, [getAllComments, data]);

  return {
    comments: data,
    navigateSingleCommentPage,
    isLoading,
    error,
  };
}
