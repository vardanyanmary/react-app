import { Post } from "../../../../api/Services/PostsService/types"
import { PostsActionTypes } from "../types/posts"

export const setLoading = (payload: boolean) => ({
    type: PostsActionTypes.SET_LOADING,
    payload
})

export const initPostsAction = (payload: Post[] | undefined) => ({
    type: PostsActionTypes.INIT_POSTS,
    payload
})

export const setGetAllPostsErrorAction = (payload?: string) => ({
    type: PostsActionTypes.SET_ERROR,
    payload
})


