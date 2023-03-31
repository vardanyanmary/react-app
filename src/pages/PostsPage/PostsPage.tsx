import { usePosts } from "../../Components/hooks/PostHooks/usePosts";
import PostCard from "../../Components/PostCard/PostCard";
import "./PostsPage.scss";

const Posts = () => {
  const { posts, navigateSinglePostPage } = usePosts()

  if (!posts) {
      return (
          <p className="postsP">
              Loading...
          </p>
      )
  }

  // <div className="Posts">
  {
    /* <Button type="secondary" onClick={handleGetAllPosts}>
          Get Posts
        </Button> */
  }

  return (
    <div className="PostsList">
      <h2> Posts List </h2>
      <div className="Posts">
        {posts.map((post) =>
                <PostCard post={post} key={post.id} navigateSinglePostPage={navigateSinglePostPage} />
            )}
      </div>
    </div>
  );

};

export default Posts;
