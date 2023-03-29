import PostDetail from "../Components/PostDetail/PostDetail";
import Posts from "../Components/Posts/Posts";
import ToDos from "../Components/ToDos/ToDos";
import ToDoSinglePage from "../Components/ToDoSinglePage/ToDoSinglePage";

export const routes =[
  {
    path: "/posts",
    element: <Posts />,
  }, 
  {
    path: "/posts/:postId",
    element: <PostDetail />,
  },
  {
    path: "/todos",
    element: <ToDos />,
  }, 
  {
    path: "/todos/:todoId",
    element: <ToDoSinglePage />,
  }
]