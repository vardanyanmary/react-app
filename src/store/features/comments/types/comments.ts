import { Comment } from "../../../../api/Services/CommentsService/type";
import { ErrorMessage } from "../../../../shared/constants/errorMassages";

export interface CommentsStateSchema {
    data: Comment[];
    isLoading: boolean;
    error?: ErrorMessage;
    selectComment?: Comment;
  }