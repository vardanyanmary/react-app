import CommentCard from "Components/UI/CommentCard/CommentCard";
import { useComments } from "Components/hooks/useComments";
import { useEffect } from "react";
import cls from "./CommentsPage.module.scss";

const CommentsPage = () => {
  const {
    comments,
    getAllComments,
    navigateSingleCommentPage,
    isLoading,
    error,
  } = useComments();

  useEffect(() => {
    if (!comments.length) {
      getAllComments();
    }
  }, [getAllComments, comments]);

  if (isLoading) {
    return <div className={cls.CommentsPage}>Loading...</div>;
  }

  if (error) {
    return <div className={cls.CommentsPage}>{error}</div>;
  }

  return (
    <div className={cls.CommentsList}>
      <h2> Comments List </h2>
      <div>
        {comments.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}
            navigateSingleCommentPage={navigateSingleCommentPage}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentsPage;
