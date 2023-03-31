import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postsService from "../../api/Services/PostsService/PostsService";
import { Post } from "../../api/Services/PostsService/types";

export function usePosts() {

  const navigate = useNavigate()
  const [posts, setPosts] = useState<Post[]>()

  const getAllPosts = useCallback(async () => {
    try {
      const posts = await postsService.getAllPosts();
      setPosts(posts);
    } catch (error) {
      console.error(error)
    }
  }, []);

  const navigateSinglePostPage = useCallback((postId: number) => {
    // console.log(postId, 'postId');
    navigate(`${postId}`)
}, [navigate])

useEffect(() => {
    getAllPosts()
}, [])

  return{
    posts,
    navigateSinglePostPage,
  }
}
