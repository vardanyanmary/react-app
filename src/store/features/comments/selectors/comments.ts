import { RootState } from "../../..";

export const getCommentsData = (store:RootState) => store.comments.data

export const getCommentsLoading = (store:RootState) => store.comments.isLoading

export const getSelectedComment = (store:RootState) => store.comments.selectedData

export const getCommentsError = (store:RootState) => store.comments.error