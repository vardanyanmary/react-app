import CommentCard from "../../Components/CommentCard/CommentCard";
import { useComments } from "../../Components/hooks/useComments";
import "./CommentsPage.scss";
import { useEffect } from "react";

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
    return <div className="CommentsPage">Loading...</div>;
  }

  if (error) {
    return <div className="CommentsPage">{error}</div>;
  }

  return (
    <div className="CommentsList">
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
