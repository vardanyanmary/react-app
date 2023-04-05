import { ToDo } from "../../../../api/Services/ToDosService/types"
import { ToDosActionTypes } from "../types/todos"

export const setLoading = (payload: boolean) => ({
    type: ToDosActionTypes.SET_LOADING,
    payload
})

export const initToDosAction = (payload: ToDo[] | undefined) => ({
    type: ToDosActionTypes.INIT_TODOS,
    payload
})

export const setGetAllToDosErrorAction = (payload?: string) => ({
    type: ToDosActionTypes.SET_ERROR,
    payload
})


