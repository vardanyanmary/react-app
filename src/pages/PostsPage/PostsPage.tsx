import { useEffect } from "react";
import { usePosts } from "Components/hooks/usePosts";
import PostCard from "Components/UI/PostCard/PostCard";
import cls from "./PostsPage.module.scss";

const Posts = () => {
  const { posts, navigateSinglePostPage, isLoading, error , getAllPosts} = usePosts();

  useEffect(() => {
    if (!posts.length) {
        getAllPosts()
    }
}, [getAllPosts, posts])

  if (isLoading) {
    return <div className={cls.PostsPage}>loading...</div>;
  }
  if (error) {
    return <div className={cls.PostsPage}>{error}</div>;
  }
  
  return (
    <div className={cls.PostsList}>
      <h2> Posts List </h2>
      <div className={cls.Posts}>
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


  {
    // <div className="Posts">
    /* <Button type="secondary" onClick={handleGetAllPosts}>
          Get Posts
        </Button> */
  }