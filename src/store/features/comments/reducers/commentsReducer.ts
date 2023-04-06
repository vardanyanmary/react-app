import { Comment } from "../../../../api/Services/CommentsService/type";
import {CommentsActionTypes } from "../types/comments";

type Payload = Comment[] | boolean | string;

interface ActionType {
  type: CommentsActionTypes;
  payload: Payload;
}

interface CommentsStateSchema {
  data: Comment[];
  isLoading: boolean;
  error?: string;
}

const initialState: CommentsStateSchema = {
  data: [],
  isLoading: false,
};


export function commentsReducer(
  state = initialState,
  action: ActionType
): CommentsStateSchema {
  switch (action.type) {
    case CommentsActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload as boolean };
    case CommentsActionTypes.INIT_COMMENTS:
      return { ...state, data: action.payload as Comment[] };
    case CommentsActionTypes.SET_ERROR:
      return { ...state, error: action.payload as string };
    default:
      return state;
  }
}
