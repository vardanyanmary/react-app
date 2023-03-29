import { useState } from "react";
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

  return (
    <div className="PostsList">
      <h2> Posts List </h2>

      <div className="Posts">
        <Button type="secondary" onClick={handleGetAllPosts}>
          Get Posts
        </Button>

        {posts?.map((post) => {
          return (
            <p key = {post.id}>
              {post.id} - {post.title}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
