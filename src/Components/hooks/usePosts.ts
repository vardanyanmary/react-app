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
import { useAppDispatch } from "../../shared/hooks/useAppDispatch";
import { fetchPostById } from "../../store/features/posts/model/fetchPostById";

export function usePosts() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch(); // vor imana vor kara thunk el stana 

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



  const navigateSinglePostPage = useCallback(
    (post: Post) => {
      navigate(`${post.id}`);
      dispatch(postActions.selectPost(post));
    },
    [navigate]
  );

  const getPost = useCallback(

     (postId: number) => {
      dispatch(fetchPostById(postId))
    //   dispatch( postActions.setLoading(true) );
    //   try {
    //     const post = await postsService.getPostById(postId);
    //      dispatch(postActions.selectPosts(post));
    //   } catch (error) {
    //     console.error(error);
    //   } finally {
    //     dispatch(postActions.setLoading(false));
    //   }
    },
    [dispatch]
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
