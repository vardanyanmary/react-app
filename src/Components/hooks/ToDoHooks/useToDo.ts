import { useCallback, useState, useEffect } from "react";
import postsService from "../../../api/Services/PostsService/PostsService";
import { Post } from "../../../api/Services/PostsService/types";

export function useToDo(todoId: number) {
  const [todo, setToDo] = useState<Post>();

  const getToDo = useCallback(async (todoId: number) => {
    try {
      const todo = await postsService.getPostById(todoId);
      setToDo(todo);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    getToDo(todoId);
  }, [getToDo, todoId]);

  return {
    getToDo,
    todo,
  };
}
