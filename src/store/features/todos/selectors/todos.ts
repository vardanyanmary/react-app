import { RootState } from "../../..";

export const getToDosData = (store:RootState) => store.todos.data

export const getToDosLoading = (store:RootState) => store.todos.isLoading

export const getSelectedToDo = (store:RootState) => store.todos.selectToDo

export const getToDosError = (store:RootState) => store.todos.error