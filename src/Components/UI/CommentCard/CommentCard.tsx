import { Comment } from "api/Services/CommentsService/type";
import cls from "./CommentCard.module.scss";

interface CommentCardProps {
  comment: Comment;
  navigateSingleCommentPage?: (comment: Comment) => void;
}

const CommentCard = ({
  comment,
  navigateSingleCommentPage,
}: CommentCardProps) => {
  if (navigateSingleCommentPage) {
    return (
      <p
        className= {`${cls.CommentCard} ${cls.withNavigation}`}
        onClick={() => navigateSingleCommentPage(comment)}
      >
        {comment.name}
      </p>
    );
  }

  return (
    <div className={cls.CommentCard}>
      <h2>{comment.name}</h2>
      <h3>{comment.email}</h3>

      <p>{comment.body}</p>
    </div>
  );
};

export default CommentCard;
