import { Post } from "../../../../api/Services/PostsService/types";

export interface PostsStateSchema {
  data: Post[];
  selectedData?: Post;
  isLoading: boolean;
  error?: string;
}