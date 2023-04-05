import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postsService from "../../../api/Services/PostsService/PostsService";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsData,
  getPostsError,
  getPostsLoading,
} from "../../../store/features/posts/selectors/posts";
import {
  initPostsAction,
  setGetAllPostsErrorAction,
  setLoading,
} from "../../../store/features/posts/actions/postsActions";

export function usePosts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useSelector(getPostsData);
  const isLoading = useSelector(getPostsLoading);
  const error = useSelector(getPostsError);

  const getAllPosts = useCallback(async () => {
    dispatch(setLoading(true));
    dispatch(setGetAllPostsErrorAction(undefined));
    try {
      const posts = await postsService.getAllPosts();
      // console.log(posts);
      dispatch(initPostsAction(posts));
    } catch (error) {
      console.warn(error);
      dispatch(setGetAllPostsErrorAction("error message"));
    } finally {
      dispatch(setLoading(false));
    }
  }, [dispatch]);

  const navigateSinglePostPage = useCallback(
    (postId: number) => {
      navigate(`${postId}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (!data.length) {
      getAllPosts();
    }
  }, [getAllPosts, data]);

  return {
    posts: data,
    navigateSinglePostPage,
    isLoading,
    error,
  };
}

