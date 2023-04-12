import { Comment } from "../../../../api/Services/CommentsService/type";

export interface CommentsStateSchema {
    data: Comment[];
    isLoading: boolean;
    error?: string;
    selectComment?: Comment;
  }