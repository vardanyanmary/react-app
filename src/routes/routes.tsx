import PostDetail from "../Components/PostDetail/PostDetail";
import Posts from "../Components/Posts/Posts";

export const routes =[
  {
    path: "/posts",
    element: <Posts />,
  }, 
  {
    path: "/posts/:postId",
    element: <PostDetail />,
  },

]