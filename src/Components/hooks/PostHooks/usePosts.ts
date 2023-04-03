import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postsService from "../../../api/Services/PostsService/PostsService";
import { Post } from "../../../api/Services/PostsService/types";
import { useDispatch, useSelector } from "react-redux";
import { initPosts } from "../../../store/features/post/reducers/postReducer";

export function usePosts() {
  const navigate = useNavigate();
  // console.log("1");
  // const [posts, setPosts] = useState<Post[]>()

  const dispatch = useDispatch();
  // console.log("2");

  const posts = useSelector(
    (state: { post: { posts: Post[] } }) => state.post.posts
  );
  // console.log("3");

  const getAllPosts = useCallback(async () => {
    try {
      const posts = await postsService.getAllPosts();
      dispatch({
        type: initPosts,
        payload: posts,
      });
      // setPosts(posts);
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  const navigateSinglePostPage = useCallback(
    (postId: number) => {
      navigate(`${postId}`);
    },
    [navigate]
  );

  useEffect(() => {
    // console.log(posts);
    getAllPosts();
  }, []);

  return {
    posts,
    navigateSinglePostPage,
  };
}
