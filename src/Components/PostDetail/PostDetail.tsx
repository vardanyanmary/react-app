import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import postsService from "../../api/Services/PostsService/PostsService";
import { Post } from "../../api/Services/PostsService/types";
import "./PostDetail.scss";

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const singlePost = async () => {
      const post = await postsService.getPostById(Number(postId));
      setPost(post);
    };
    singlePost();
  }, [postId]);

  return (
    <div className="PostDetail">
      {post ? (
        <>
          <div >
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts`}> Back </Link>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PostDetail;
