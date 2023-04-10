import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postsService from "../../api/Services/PostsService/PostsService";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsData,
  getPostsError,
  getPostsLoading,
  getSelectedPost,
} from "../../store/features/posts/selectors/posts";
import { Post } from "../../api/Services/PostsService/types";
import { postActions } from "../../store/features/posts";

export function usePosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getPostsData);
  const isLoading = useSelector(getPostsLoading);
  const error = useSelector(getPostsError);
  const selectedData = useSelector(getSelectedPost);

  const getAllPosts = useCallback(async () => {
    dispatch(postActions.setLoading(true));
    dispatch(postActions.setError(undefined));
    try {
      const posts = await postsService.getAllPosts();
      dispatch(postActions.initPosts(posts));
    } catch (error) {
      console.warn(error);
      dispatch(postActions.setError("error message"));
    } finally {
      dispatch(postActions.setLoading(false));
    }
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
      dispatch(postActions.setError(undefined));
    
      try {
        const post = await postsService.getPostById(postId);
        selectPost(post);
      } catch (error) {
        console.error(error);
        dispatch(postActions.setError('Not Found'));
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
