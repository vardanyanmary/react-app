import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Comment } from "../../../api/Services/CommentsService/type";
import commentsService from "../../../api/Services/CommentsService/CommentsService";

export function useComments() {
  const navigate = useNavigate();
  const [comments, setComments] = useState<Comment[]>();

  const getAllComments = useCallback(async () => {
    try {
      const comments = await commentsService.getAllComments();
      setComments(comments);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const navigateSingleCommentPage = useCallback(
    (commentId: number) => {
      navigate(`${commentId}`);
    },
    [navigate]
  );

  useEffect(() => {
    getAllComments();
  }, []);

  return {
    comments,
    navigateSingleCommentPage,
  };
}
