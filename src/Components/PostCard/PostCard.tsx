import { Post } from "../../api/Services/PostsService/types";
import "./PostCard.scss";

interface PostCardProps {
  post: Post;
  navigateSinglePostPage?: (post: Post) => void;
}

const PostCard = ({ post, navigateSinglePostPage }: PostCardProps) => {
  if (navigateSinglePostPage) {
    return (
      <p
        className="PostCard withNavigation"
        onClick={() => navigateSinglePostPage(post)}
      >
        {post.title}
      </p>
    );
  }

  return (
    <div className="PostCard">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostCard;
