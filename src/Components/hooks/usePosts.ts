import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import postsService from "../../api/Services/PostsService/PostsService";
import { useSelector } from "react-redux";
import {
  getPostsData,
  getPostsError,
  getPostsLoading,
  getSelectedPost,
} from "../../store/features/posts/selectors/posts";
import { Post } from "../../api/Services/PostsService/types";
import { postActions } from "../../store/features/posts";
import { fetchAllPosts } from "../../store/features/posts/model/fetchAllPosts";
import { useAppDispatch } from "../../hooks/useAppDispatch";

export function usePosts() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const data = useSelector(getPostsData);
  const isLoading = useSelector(getPostsLoading);
  const error = useSelector(getPostsError);
  const selectedData = useSelector(getSelectedPost);

  const getAllPosts = useCallback(() => {
    //fetchAllPosts-n arden dursa galis useAppDispatchic , vory arden mer src-i meji hook-i mej avelacrel enq
    dispatch(fetchAllPosts());
    // dispatch(postActions.setLoading(true))
    // dispatch(postActions.setError(undefined))
    // try {
    //     const posts = await postService.getAllPosts()
    //     dispatch(postActions.initPosts(posts))
    // } catch (error) {
    //     console.warn(error)
    //     dispatch(postActions.setError('error message'))
    // } finally {
    //     dispatch(postActions.setLoading(false))
    // }
  }, [dispatch]);

  const selectPost = useCallback(
    (post: Post) => {
      dispatch(postActions.selectPosts(post));
    },
    [dispatch]
  );

  const navigateSinglePostPage = useCallback(
    (post: Post) => {
      navigate(`${post.id}`);
      selectPost(post);
    },
    [navigate]
  );

  const getPost = useCallback(
    async (postId: number) => {
      dispatch(postActions.setLoading(true));
      try {
        const post = await postsService.getPostById(postId);
        selectPost(post);
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(postActions.setLoading(false));
      }
    },
    [dispatch, selectPost]
  );

  return {
    posts: data,
    navigateSinglePostPage,
    isLoading,
    error,
    selectedData,
    getPost,
    getAllPosts,
  };
}
