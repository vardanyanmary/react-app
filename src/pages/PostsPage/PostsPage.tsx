import { useEffect } from "react";
import { usePosts } from "../../Components/hooks/usePosts";
import PostCard from "../../Components/PostCard/PostCard";
import "./PostsPage.scss";

const Posts = () => {
  const { posts, navigateSinglePostPage, isLoading, error , getAllPosts} = usePosts();

  useEffect(() => {
    if (!posts.length) {
        getAllPosts()
    }
}, [getAllPosts, posts])

  if (isLoading) {
    return <div className="PostsPage">loading...</div>;
  }
  if (error) {
    return <div className="PostsPage">{error}</div>;
  }

  {
    // <div className="Posts">
    /* <Button type="secondary" onClick={handleGetAllPosts}>
          Get Posts
        </Button> */
  }

  return (
    <div className="PostsList">
      <h2> Posts List </h2>
      <div className="Posts">
        {posts?.map((post) => (
          <PostCard
            post={post}
            key={post.id}
            navigateSinglePostPage={navigateSinglePostPage}
          />
        ))}
      </div>
    </div>
  );
};

export default Posts;
