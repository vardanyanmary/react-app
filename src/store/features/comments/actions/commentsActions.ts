import { Comment } from "../../../../api/Services/CommentsService/type"
import { CommentsActionTypes } from "../types/comments"

export const setLoading = (payload: boolean) => ({
    type: CommentsActionTypes.SET_LOADING,
    payload
})

export const initCommentsAction = (payload: Comment[] | undefined) => ({
    type: CommentsActionTypes.INIT_COMMENTS,
    payload
})

export const selectedCommentAction = (payload?: Comment) => ({
    type: CommentsActionTypes.SELECTED_COMMENT,
    payload
})

export const setGetAllCommentsErrorAction = (payload?: string) => ({
    type: CommentsActionTypes.SET_ERROR,
    payload
})


