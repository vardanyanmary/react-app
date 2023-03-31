import { useCallback, useState, useEffect } from "react";
import postsService from "../../api/Services/PostsService/PostsService";
import { Post } from "../../api/Services/PostsService/types";

export function usePost(postId: number) {
  // const [post, setPost] = useState<Post>()

  // const getPost = useCallback(async (postId: number) => {
  //     try {
  //         const post = await postsService.getPostById(postId)
  //         setPost(post)
  //     } catch (error) {
  //         console.error(error)
  //     }
  // }, [])

  // useEffect(() => {
  //     getPost(postId)
  // }, [getPost, postId])

  const [post, setPost] = useState<Post>();

  const getPost = useCallback(async (postId: number) => {
    try {
      const post = await postsService.getPostById(postId);
      setPost(post);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getPost(postId);
  }, [getPost, postId]);

  return {
    getPost,
    post,
  };
}
