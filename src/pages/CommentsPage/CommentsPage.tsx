import CommentCard from "../../Components/CommentCard/CommentCard";
import { useComments } from "../../Components/hooks/CommentHooks/useComments";
import "./CommentsPage.scss";

const CommentsPage = () => {
  const { comments, navigateSingleCommentPage } = useComments();

  if (!comments) {
    return <p className="commentsP">Loading...</p>;
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
