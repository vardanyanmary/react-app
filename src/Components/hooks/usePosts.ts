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
import {
  initPostsAction,
  selectedPostAction,
  setGetAllPostsErrorAction,
  setLoading,
} from "../../store/features/posts/actions/postsActions";
import { Post } from "../../api/Services/PostsService/types";

export function usePosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getPostsData);
  const isLoading = useSelector(getPostsLoading);
  const error = useSelector(getPostsError);
  const selectedData = useSelector(getSelectedPost);

  const getAllPosts = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setGetAllPostsErrorAction(undefined));
    try {
      const posts = await postsService.getAllPosts();
      dispatch(initPostsAction(posts));
    } catch (error) {
      console.warn(error);
      dispatch(setGetAllPostsErrorAction("error message"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const selectPost = useCallback(
    (post: Post) => {
      dispatch(selectedPostAction(post));
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
      dispatch(setLoading(true));
      dispatch(setGetAllPostsErrorAction(undefined));
      try {
        const post = await postsService.getPostById(postId);
        selectPost(post);
      } catch (error) {
        console.error(error);
        dispatch(setGetAllPostsErrorAction('Not Found'));
      } finally {
        dispatch(setLoading(false));
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
