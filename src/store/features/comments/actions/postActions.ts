import { Post } from "../../../../api/Services/PostsService/types";
import { PostActionTypes } from "../types/post";

export const initPostAction = (payload: Post | undefined) => ({
    type: PostActionTypes.INIT_POST,
    payload
})