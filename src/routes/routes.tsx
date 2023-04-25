import { NotFound } from "../pages/NotFound/NotFound";
import { HomePage } from "../pages/HomePage/HomePage";
import { CounterPage } from "../pages/Counter/CounterPage";
import RegistrationPage from "pages/RegistrationPage/RegistrationPage";
import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage/LoginPage"));
const PostsPage = lazy(() => import("../pages/PostsPage/PostsPage"));
const PostDetail = lazy(() => import("../pages/PostDetail/PostDetail"));
const ToDosPage = lazy(() => import("../pages/ToDos/ToDos"));
const ToDoSinglePage = lazy(
  () => import("../pages/ToDoSinglePage/ToDoSinglePage")
);
const CommentsPage = lazy(() => import("../pages/CommentsPage/CommentsPage"));
const CommentSinglePage = lazy(
  () => import("../pages/CommentSinglePage/CommentSinglePage")
);
const AlbumsPage = lazy(() => import("../pages/AlbumsPage/AlbumsPage"));
const AlbumSinglePage = lazy(
  () => import("../pages/AlbumSinglePage/AlbumSinglePage")
);
const UsersPage = lazy(() => import("../pages/UsersPage/UsersPage"));
const UserSinglePage = lazy(
  () => import("../pages/UserSinglePage/UserSinglePage")
);

export const privateRoutes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/posts/:id",
    element: <PostDetail />,
  },
  {
    path: "/todos",
    element: <ToDosPage />,
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
    path: "/registration",
    element: <RegistrationPage />,
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
