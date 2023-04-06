import CommentCard from "../../Components/CommentCard/CommentCard";
import { useComments } from "../../Components/hooks/CommentHooks/useComments";
import "./CommentsPage.scss";

const CommentsPage = () => {
  const { comments, navigateSingleCommentPage, isLoading, error } = useComments();


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
