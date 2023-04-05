import { useCallback, useEffect } from "react";
import postsService from "../../../api/Services/PostsService/PostsService";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../../store/features/posts/selectors/post";
import { initPostAction } from "../../../store/features/posts/actions/postActions";

export function usePost(postId: number) {
  const dispatch = useDispatch();
  const data = useSelector(getPostData);

  const getPost = useCallback(async (postId: number) => {
    try {
      const post = await postsService.getPostById(postId);
      // console.log(post);
      dispatch(initPostAction(post));
    } catch (error) {
      console.error(error);
    }
  }, [dispatch]);

  useEffect(() => {
    if (!data.id || data.id !== postId) {
      getPost(postId);
    }
  }, [getPost, postId, data.id]);

  return {
    getPost,
    post: data,
  };
}

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