import PostDetail from "../pages/PostDetail/PostDetail";
import Posts from "../pages/PostsPage/PostsPage";
import ToDos from "../pages/ToDos/ToDos";
import ToDoSinglePage from "../pages/ToDoSinglePage/ToDoSinglePage";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { NotFound } from "../pages/NotFound/NotFound";

export const privateRoutes =[
  {
    path: "/",
    element: <HomePage />,
  }, 
  {
    path: "/posts",
    element: <Posts />,
  }, 
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/todos",
    element: <ToDos />,
  }, 
  {
    path: "/todos/:id",
    element: <ToDoSinglePage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]

export const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  }, 
  {
    path: "*",
    element: <NotFound />,
  },
]