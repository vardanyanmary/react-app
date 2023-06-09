import { Post } from "api/Services/PostsService/types";
import { ErrorMessage } from "shared/constants/errorMassages";

export interface PostsStateSchema {
  data: Post[];
  selectedData?: Post;
  isLoading: boolean;
  error?: ErrorMessage;
}