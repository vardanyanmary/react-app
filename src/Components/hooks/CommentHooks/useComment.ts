import { useCallback, useState, useEffect } from "react";
import postsService from "../../../api/Services/PostsService/PostsService";
import { Post } from "../../../api/Services/PostsService/types";
import { Comment } from "../../../api/Services/CommentsService/type";
import commentsService from "../../../api/Services/CommentsService/CommentsService";

export function useComment(commentId: number) {

const [comment, setComment] = useState<Comment>()

  const getComment= useCallback(async (commentId: number) => {
    try {
      const comment = await commentsService.getCommentById(commentId);
      setComment(comment);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getComment(commentId);
  }, [getComment, commentId]);

  return {
    getComment,
    comment,
  };
}