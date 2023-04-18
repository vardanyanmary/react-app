import PostDetail from "../pages/PostDetail/PostDetail";
import Posts from "../pages/PostsPage/PostsPage";
import ToDos from "../pages/ToDos/ToDos";
import ToDoSinglePage from "../pages/ToDoSinglePage/ToDoSinglePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import { NotFound } from "../pages/NotFound/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import CommentsPage from "../pages/CommentsPage/CommentsPage";
import CommentSinglePage from "../pages/CommentSinglePage/CommentSinglePage";
import { CounterPage } from "../pages/Counter/CounterPage";
import AlbumSinglePage from "../pages/AlbumSinglePage/AlbumSinglePage";
import AlbumsPage from "../pages/AlbumsPage/AlbumsPage";
import UsersPage from "../pages/UsersPage/UsersPage";
import UserSinglePage from "../pages/UserSinglePage/UserSinglePage";

export const privateRoutes = [
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
    path: "/comments",
    element: <CommentsPage />,
  },
  {
    path: "/comments/:id",
    element: <CommentSinglePage />,
  },
  {
    path: "/albums",
    element: <AlbumsPage />,
  },
  {
    path: "/albums/:id",
    element: <AlbumSinglePage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },
  {
    path: "/users/:id",
    element: <UserSinglePage />,
  },
  {
    path: "/counter",
    element: <CounterPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const publicRoutes = [
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
