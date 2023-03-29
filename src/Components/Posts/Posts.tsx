import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import postsService, {
  Post,
} from "../../api/Services/PostsService/PostsService";
import Button from "../UI/Button/Button";
import "./Posts.scss";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>();

  const handleGetAllPosts = async () => {
    try {
      const posts = await postsService.getAllPosts();
      setPosts(posts);
    } catch (error) {}
  };

  // useEffect(() => {
  //   handleGetAllPosts();
  // }, []);

  return (
    <div className="PostsList">
      <h2> Posts List </h2>

      <div className="Posts">
        <Button type="secondary" onClick={handleGetAllPosts}>
          Get Posts
        </Button>

        {posts?.map((post) => {
          return (
            <div key={post.id} className="PostId">
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
